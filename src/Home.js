import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const codeSnippets = [
  "System.out.println(\"Hello, world!\");",
  "import { useState, useEffect } from 'react';",
  "for (int i = 0; i < arr.length; i++) {",
  "def train_model(dataset):",
  'pip install -r "requirements.txt"',
  'git commit -am "Fixed Bugs" ',
  "import pandas as pd",
  "if (user != null && user.isActive()) {",
  "<input type=\"text\" placeholder=\"Search\">",
  "body { background-color: #0a192f; }",
  "add eax, ebx",
  "import Head from 'next/head';",
  "app.get('/api', (req, res) => res.json(data));",
  "from fastapi import FastAPI",
  "SELECT * FROM users WHERE active = 1;",
  "docker-compose up -d",
  "locahost:3000"
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 800);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const elements = Array.from({ length: 20 }, () => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 0.5 + 0.2,
      fontSize: Math.random() * 12 + 10,
      opacity: Math.random() * 0.2 + 0.1,
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      elements.forEach(el => {
        ctx.globalAlpha = el.opacity;
        ctx.font = `${el.fontSize}px 'Roboto Mono', monospace`;
        ctx.fillStyle = '#64ffda';
        ctx.fillText(el.text, el.x, el.y);

        el.y -= el.speed;
        if (el.y < -50) {
          el.y = height + 50;
          el.x = Math.random() * width;
          el.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Canvas ref={canvasRef} />

      <GradientOverlay />

      <Content isVisible={isVisible}>
        <Greeting>Hi, my name is</Greeting>
        <Name>Narain Sriram.</Name>
        <Description>
          I'm a junior Computer Science and Math student at the University of Maryland,
          specializing in Machine Learning.
        </Description>
      </Content>
    </Container>
  );
}

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 50px;
  overflow: hidden;
  background-color: #0a192f;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(10, 25, 47, 0.6) 0%,
    rgba(10, 25, 47, 0.8) 40%,
    rgba(10, 25, 47, 0.95) 80%
  );
  z-index: 1;
`;

const Content = styled.div`
  max-width: 700px;
  z-index: 2;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.8s ease, transform 0.8s ease;
  position: relative;
`;

const Greeting = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #64ffda;
  font-family: 'Roboto Mono', monospace;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

const Name = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin: 0 0 30px 0;
  color: #e6f1ff;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.8s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 700px;
  color: #8892b0;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 1.0s;
  opacity: 0;
`;

export default Home;
