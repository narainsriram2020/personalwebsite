import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// The 3D toy (three.js) lives in its own chunk and is only requested a
// few seconds after first paint, on capable desktop devices.
const Tennis = lazy(() => import('./Tennis'));

const NAME = 'Narain Sriram';

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.45 + 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const wordReveal = {
  hidden: { y: '108%' },
  show: (i = 0) => ({
    y: '0%',
    transition: { duration: 0.85, delay: 0.1 + 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Home() {
  const letterRefs = useRef([]);
  const [play, setPlay] = useState(false);

  // Load the tennis rally ~2s after paint, desktop only.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.matchMedia('(hover: none)').matches) return undefined;
    if (window.innerWidth < 900) return undefined;
    const t = setTimeout(() => setPlay(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // The one flourish: letters near the cursor swell in weight and lift
  // slightly, eased per-frame. Silent on touch and reduced-motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const letters = letterRefs.current.filter(Boolean);
    const state = letters.map(() => ({ w: 500, y: 0 }));
    const mouse = { x: -9999, y: -9999 };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    const tick = () => {
      letters.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(mouse.x - cx, mouse.y - cy);
        const t = Math.max(0, 1 - d / 240);
        const eased = t * t;
        const s = state[i];
        s.w += (500 + 200 * eased - s.w) * 0.16;
        s.y += (-8 * eased - s.y) * 0.16;
        el.style.fontVariationSettings = `'wght' ${s.w.toFixed(1)}`;
        el.style.transform = `translateY(${s.y.toFixed(2)}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  let letterIdx = -1;

  return (
    <Hero>
      <Blueprint aria-hidden>
        <GridLines />
        <Cross style={{ top: '16%', left: '9%' }}>+</Cross>
        <Cross style={{ top: '24%', left: '72%' }}>+</Cross>
        <Cross style={{ top: '58%', left: '86%' }}>+</Cross>
        <Cross style={{ top: '76%', left: '18%' }}>+</Cross>
        <Cross style={{ top: '82%', left: '62%' }}>+</Cross>
      </Blueprint>
      {play && (
        <Suspense fallback={null}>
          <Tennis />
        </Suspense>
      )}
      <Inner>
        <Name aria-label={NAME}>
          {NAME.split(' ').map((word, wi) => (
            <WordClip key={wi} aria-hidden>
              <WordReveal custom={wi} variants={wordReveal} initial="hidden" animate="show">
                {word.split('').map((ch, ci) => {
                  letterIdx += 1;
                  const idx = letterIdx;
                  return (
                    <Letter key={ci} ref={(el) => { letterRefs.current[idx] = el; }}>
                      {ch}
                    </Letter>
                  );
                })}
              </WordReveal>
            </WordClip>
          ))}
        </Name>

        <Lead custom={0} variants={fade} initial="hidden" animate="show">
          CS and math at the University of Maryland. Software engineer
          at <Accent>BNY</Accent>. <Accent>ML researcher</Accent> working on
          diffusion models for extreme-weather prediction.
        </Lead>

        <Actions custom={1} variants={fade} initial="hidden" animate="show">
          <Primary href="#experience">
            View my work
          </Primary>
          <Socials>
            <IconLink href="https://github.com/narainsriram2020" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/narainsriram/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:narainsriram@gmail.com" aria-label="Email">
              <FaEnvelope />
            </IconLink>
          </Socials>
        </Actions>
      </Inner>
    </Hero>
  );
}

const Hero = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: transparent;
  overflow: hidden;
`;

/* Blueprint backdrop: hairline graph grid fading out radially, with a few
   surveyor's crosses at the intersections. Structure, not decoration. */
const Blueprint = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(170, 200, 230, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(170, 200, 230, 0.07) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 85% 78% at 42% 44%, black 25%, transparent 76%);
  -webkit-mask-image: radial-gradient(ellipse 85% 78% at 42% 44%, black 25%, transparent 76%);
`;

const Cross = styled.span`
  position: absolute;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  font-weight: 300;
  line-height: 1;
  color: rgba(155, 196, 232, 0.34);
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 140px 32px 80px;

  @media (max-width: 768px) { padding: 120px 20px 60px; }
`;

const Name = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  column-gap: 0.22em;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(56px, 12vw, 148px);
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.ink};
  margin: 0 0 34px;
`;

const WordClip = styled.span`
  display: inline-block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
  white-space: nowrap;
`;

const WordReveal = styled(motion.span)`
  display: inline-block;
`;

const Letter = styled.span`
  display: inline-block;
  font-variation-settings: 'wght' 500;
  will-change: transform, font-variation-settings;
`;

const Lead = styled(motion.p)`
  font-size: clamp(19px, 2.3vw, 25px);
  line-height: 1.55;
  font-weight: 400;
  color: ${({ theme }) => theme.color.inkSoft};
  max-width: 720px;
  margin: 0 auto 46px;
  text-align: center;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.color.accentSky};
  font-weight: 600;
`;

const Actions = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

const Primary = styled.a`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 15px;
  color: ${({ theme }) => theme.color.bg};
  background: ${({ theme }) => theme.color.accentSky};
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 13px 26px;
  border-radius: 999px;
  transition: transform 0.2s ease, background 0.25s ease;
  &:hover { background: ${({ theme }) => theme.color.accent}; transform: translateY(-2px); }
`;

const Socials = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 6px;
`;

const IconLink = styled.a`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  font-size: 19px;
  color: ${({ theme }) => theme.color.muted};
  border-radius: 50%;
  transition: color 0.25s ease, background 0.25s ease;
  &:hover { color: ${({ theme }) => theme.color.ink}; background: ${({ theme }) => theme.color.bgElevated}; }
`;

export default Home;
