import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

/*
 * The hero toy: a tennis ball rallying on the blueprint grid. Faint court
 * markings and a hairline net sit on the ground plane; the ball bounces
 * with simple hand-rolled physics, leaves a fading trail, and stamps a
 * ripple ring wherever it lands. The cursor is the racket — get close and
 * the ball gets returned; click serves it toward the click. Loaded lazily
 * a few seconds after first paint so it costs the initial load nothing.
 */

const FOV = 38;
const COURT_HX = 13;   // half-length (screen x)
const COURT_HZ = 7;    // half-width (screen z)
const NET_H = 1.7;
const BALL_R = 0.55;
const GRAVITY = -26;

const COLORS = {
  line: 0x62a4de,
  net: 0x8fa3bb,
  ball: 0xcbd94e,
  post: 0x25496e,
};

/*
 * Paint the seam into the felt so the ball is one smooth surface. The true
 * tennis seam is the closed spherical curve x = a·cos t + b·cos 3t,
 * y = a·sin t − b·sin 3t, z = 2√(ab)·sin 2t (a + b = 1). For every texel we
 * take its 3D point on the unit sphere and measure distance to that curve —
 * no pole distortion, seam width constant everywhere.
 */
function makeBallTexture() {
  const W = 384;
  const H = 192;
  const a = 0.78;
  const b = 0.22;
  const N = 220;
  const cx = [];
  const cy = [];
  const cz = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    cx.push(a * Math.cos(t) + b * Math.cos(3 * t));
    cy.push(a * Math.sin(t) - b * Math.sin(3 * t));
    cz.push(2 * Math.sqrt(a * b) * Math.sin(2 * t));
  }

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(W, H);
  const felt = [203, 217, 78];
  const white = [242, 247, 230];

  for (let py = 0; py < H; py++) {
    const theta = ((py + 0.5) / H) * Math.PI;
    const st = Math.sin(theta);
    const y = Math.cos(theta);
    for (let px = 0; px < W; px++) {
      const phi = ((px + 0.5) / W) * Math.PI * 2;
      const x = st * Math.cos(phi);
      const z = st * Math.sin(phi);
      let min = 4;
      for (let i = 0; i < N; i++) {
        const dx = x - cx[i];
        const dy = y - cy[i];
        const dz = z - cz[i];
        const d = dx * dx + dy * dy + dz * dz;
        if (d < min) min = d;
      }
      // 0 → on the seam (white), 1 → felt; soft edge for anti-aliasing
      const k = Math.min(1, Math.max(0, (Math.sqrt(min) - 0.085) / 0.03));
      const o = (py * W + px) * 4;
      img.data[o] = white[0] + (felt[0] - white[0]) * k;
      img.data[o + 1] = white[1] + (felt[1] - white[1]) * k;
      img.data[o + 2] = white[2] + (felt[2] - white[2]) * k;
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeBall() {
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_R, 32, 24),
    new THREE.MeshStandardMaterial({ map: makeBallTexture(), roughness: 0.9 })
  );
  ball.castShadow = true;
  return ball;
}

function buildCourt(scene) {
  const pts = [];
  const seg = (x1, z1, x2, z2) => pts.push(x1, 0.02, z1, x2, 0.02, z2);

  seg(-COURT_HX, -COURT_HZ, COURT_HX, -COURT_HZ);
  seg(-COURT_HX, COURT_HZ, COURT_HX, COURT_HZ);
  seg(-COURT_HX, -COURT_HZ, -COURT_HX, COURT_HZ);
  seg(COURT_HX, -COURT_HZ, COURT_HX, COURT_HZ);
  seg(-COURT_HX, -5, COURT_HX, -5);            // singles sidelines
  seg(-COURT_HX, 5, COURT_HX, 5);
  seg(-6.5, -5, -6.5, 5);                       // service lines
  seg(6.5, -5, 6.5, 5);
  seg(-6.5, 0, 6.5, 0);                         // center service line
  seg(-COURT_HX, 0, -COURT_HX + 0.5, 0);        // baseline center marks
  seg(COURT_HX - 0.5, 0, COURT_HX, 0);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const lines = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 0.28 })
  );
  scene.add(lines);

  // net: hairline mesh strung between two posts at x = 0
  const netPts = [];
  for (let z = -COURT_HZ; z <= COURT_HZ + 0.001; z += 0.7) {
    netPts.push(0, 0, z, 0, NET_H, z);
  }
  for (let y = 0.25; y <= NET_H + 0.001; y += 0.36) {
    netPts.push(0, y, -COURT_HZ, 0, y, COURT_HZ);
  }
  const netGeo = new THREE.BufferGeometry();
  netGeo.setAttribute('position', new THREE.Float32BufferAttribute(netPts, 3));
  scene.add(new THREE.LineSegments(
    netGeo,
    new THREE.LineBasicMaterial({ color: COLORS.net, transparent: true, opacity: 0.2 })
  ));

  // net band (top edge, slightly brighter) and posts
  const bandGeo = new THREE.BufferGeometry();
  bandGeo.setAttribute('position', new THREE.Float32BufferAttribute(
    [0, NET_H, -COURT_HZ, 0, NET_H, COURT_HZ], 3
  ));
  scene.add(new THREE.LineSegments(
    bandGeo,
    new THREE.LineBasicMaterial({ color: 0xeaf0f7, transparent: true, opacity: 0.4 })
  ));

  const postGeo = new THREE.CylinderGeometry(0.07, 0.07, NET_H + 0.15, 10);
  const postMat = new THREE.MeshStandardMaterial({ color: COLORS.post, roughness: 0.6 });
  [-COURT_HZ, COURT_HZ].forEach((z) => {
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.set(0, (NET_H + 0.15) / 2, z);
    post.castShadow = true;
    scene.add(post);
  });
}

function Tennis() {
  const wrapRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 300);

    scene.add(new THREE.AmbientLight(0xdbe8f5, 0.85));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(10, 24, 12);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 20;
    sun.shadow.camera.bottom = -20;
    scene.add(sun);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    buildCourt(scene);

    // ----- ball -----
    const ball = makeBall();
    scene.add(ball);

    const pos = new THREE.Vector3(-8, 5, 0);
    const vel = new THREE.Vector3(7, 4, 1.5);
    const spinAxis = new THREE.Vector3(0, 0, 1);

    // ----- trail -----
    const trailN = 14;
    const trailTex = (() => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const g = c.getContext('2d').createRadialGradient(32, 32, 2, 32, 32, 30);
      g.addColorStop(0, 'rgba(203,217,78,0.8)');
      g.addColorStop(1, 'rgba(203,217,78,0)');
      const ctx = c.getContext('2d');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();
    const trail = [];
    for (let i = 0; i < trailN; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: trailTex,
        transparent: true,
        depthWrite: false,
        opacity: 0.35 * (1 - i / trailN),
      }));
      const k = 1 - i / trailN;
      s.scale.setScalar(BALL_R * 1.6 * k);
      s.visible = false;
      scene.add(s);
      trail.push(s);
    }
    const history = [];

    // ----- bounce ripples -----
    const ripples = [];
    const rippleGeo = new THREE.RingGeometry(0.9, 1.0, 40);
    for (let i = 0; i < 8; i++) {
      const r = new THREE.Mesh(
        rippleGeo,
        new THREE.MeshBasicMaterial({ color: COLORS.line, transparent: true, opacity: 0, side: THREE.DoubleSide })
      );
      r.rotation.x = -Math.PI / 2;
      r.position.y = 0.03;
      r.userData.life = 1;
      scene.add(r);
      ripples.push(r);
    }
    const stampRipple = (x, z, strength) => {
      const r = ripples.find((m) => m.userData.life >= 1) || ripples[0];
      r.userData.life = 0;
      r.userData.strength = Math.min(1, strength);
      r.position.x = x;
      r.position.z = z;
    };

    // ----- interaction -----
    const mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };
    let lastHit = 0;
    let active = true;

    const onMove = (e) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const ballScreen = new THREE.Vector3();
    const toScreen = () => {
      ballScreen.copy(pos).project(camera);
      const rect = renderer.domElement.getBoundingClientRect();
      return {
        x: rect.left + ((ballScreen.x + 1) / 2) * rect.width,
        y: rect.top + ((1 - ballScreen.y) / 2) * rect.height,
      };
    };

    const onClick = (e) => {
      if (!active) return;
      if (e.target.closest('a, button, input, textarea')) return;
      const rect = renderer.domElement.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      const bp = toScreen();
      vel.x = (e.clientX - bp.x) * 0.045;
      vel.z = (e.clientY - bp.y) * 0.03;
      vel.y = 12;
    };
    window.addEventListener('click', onClick);

    const io = new IntersectionObserver(
      ([entry]) => { active = entry.isIntersecting && entry.intersectionRatio > 0.12; },
      { threshold: [0, 0.12, 0.5] }
    );
    io.observe(wrap);

    // ----- camera -----
    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      const hHalf = Math.atan(Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * camera.aspect);
      const dist = Math.max((COURT_HX + 4) / Math.tan(hHalf), 22);
      camera.position.set(0, dist * 0.6, dist * 0.85);
      camera.lookAt(0, 0.6, -0.6);
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // ----- loop -----
    let raf;
    let last = performance.now();
    let frame = 0;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.04);
      last = now;
      if (!active || document.hidden) return;
      frame += 1;

      // physics
      vel.y += GRAVITY * dt;
      vel.multiplyScalar(1 - 0.045 * dt);
      pos.addScaledVector(vel, dt);

      // ground bounce
      if (pos.y < BALL_R && vel.y < 0) {
        pos.y = BALL_R;
        vel.y *= -0.8;
        vel.x *= 0.96;
        vel.z *= 0.96;
        const strength = Math.min(1, Math.abs(vel.y) / 14);
        if (strength > 0.08) stampRipple(pos.x, pos.z, 0.3 + strength * 0.7);
      }
      // walls (a bit beyond the court so it can range around the hero)
      const BX = COURT_HX + 4;
      const BZ = COURT_HZ + 3.5;
      if (pos.x < -BX && vel.x < 0) { pos.x = -BX; vel.x *= -0.85; }
      if (pos.x > BX && vel.x > 0) { pos.x = BX; vel.x *= -0.85; }
      if (pos.z < -BZ && vel.z < 0) { pos.z = -BZ; vel.z *= -0.85; }
      if (pos.z > BZ && vel.z > 0) { pos.z = BZ; vel.z *= -0.85; }
      if (pos.y > 16 && vel.y > 0) vel.y *= 0.9;

      // net: dribble off it if the ball crosses low
      if (Math.abs(pos.x) < 0.25 && pos.y < NET_H + BALL_R * 0.5 && Math.abs(pos.z) < COURT_HZ + 0.4) {
        pos.x = Math.sign(vel.x || 1) * -0.3;
        vel.x *= -0.35;
        vel.y = Math.min(vel.y, 2);
      }

      // cursor racket
      if (now - lastHit > 260) {
        const bp = toScreen();
        const dx = bp.x - mouse.x;
        const dy = bp.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 105) {
          const inv = 1 / (d || 1);
          const swipeX = mouse.x - mouse.px;
          const swipeY = mouse.y - mouse.py;
          vel.x = dx * inv * 10 + swipeX * 0.25;
          vel.z = dy * inv * 6 + swipeY * 0.18;
          vel.y = Math.max(vel.y, 9.5);
          lastHit = now;
        }
      }

      // keep the rally alive if the ball goes dead
      const speed = vel.length();
      if (speed < 2.2 && pos.y <= BALL_R + 0.05) {
        pos.set(Math.random() > 0.5 ? -9 : 9, 5.5, (Math.random() - 0.5) * 6);
        vel.set(pos.x > 0 ? -7.5 : 7.5, 4.5, (Math.random() - 0.5) * 3);
      }
      const maxV = 26;
      if (speed > maxV) vel.multiplyScalar(maxV / speed);

      // visuals
      ball.position.copy(pos);
      spinAxis.set(vel.z, 0, -vel.x).normalize();
      ball.rotateOnWorldAxis(spinAxis, (speed / BALL_R) * dt * 0.35);

      if (frame % 2 === 0) {
        history.unshift(pos.clone());
        if (history.length > trailN) history.pop();
      }
      const showTrail = speed > 7;
      trail.forEach((s, i) => {
        const p = history[i + 1];
        s.visible = showTrail && !!p;
        if (p) s.position.copy(p);
      });

      ripples.forEach((r) => {
        if (r.userData.life < 1) {
          r.userData.life = Math.min(1, r.userData.life + dt * 1.8);
          const t = r.userData.life;
          const s = 0.4 + t * 2.6 * (r.userData.strength || 1);
          r.scale.setScalar(s);
          r.material.opacity = (1 - t) * 0.45 * (r.userData.strength || 1);
        }
      });

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    const readyTimer = setTimeout(() => setOn(true), 120);

    return () => {
      clearTimeout(readyTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      io.disconnect();
      renderer.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        }
      });
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layer ref={wrapRef} $on={on}>
      <Hint $on={on}>cursor returns the ball &nbsp;·&nbsp; click to serve</Hint>
    </Layer>
  );
}

const Layer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition: opacity 1s ease;

  canvas { display: block; width: 100%; height: 100%; }
`;

const Hint = styled.div`
  position: absolute;
  right: 28px;
  bottom: 26px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.color.muted};
  background: ${({ theme }) => theme.color.bgElevated}cc;
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 999px;
  padding: 9px 16px;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition: opacity 0.9s ease 0.6s;
`;

export default Tennis;
