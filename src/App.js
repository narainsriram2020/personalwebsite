// App.js
import React from 'react';
import { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';
import theme from './theme';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Volunteering from './Volunteering';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.ink};
    font-family: ${({ theme }) => theme.font.body};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    @media (max-width: 768px) { font-size: 15px; }
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
  }

  a { color: inherit; }

  ::selection {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.bg};
  }

  /* Film grain over everything — the texture that keeps flat color alive */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* Quiet, monochrome scrollbar (no neon) */
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.color.bg}; }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.accentDeep};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.color.bg};
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.color.accentDeep} ${({ theme }) => theme.color.bg};
  }
`;

const drift1 = keyframes`
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(90px, 60px) scale(1.08); }
`;

const drift2 = keyframes`
  from { transform: translate(0, 0) scale(1.05); }
  to   { transform: translate(-70px, 90px) scale(1); }
`;

const drift3 = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(50px, -70px); }
`;

// Fixed, slow-moving ambient glows that sit behind every section.
const Atmosphere = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  will-change: transform;
`;

const BlueGlow = styled(Blob)`
  width: 58vw;
  height: 58vw;
  top: -18vw;
  left: -12vw;
  background: radial-gradient(circle, rgba(98, 164, 222, 0.13), transparent 62%);
  animation: ${drift1} 34s ease-in-out infinite alternate;
`;

const SkyGlow = styled(Blob)`
  width: 46vw;
  height: 46vw;
  top: 34%;
  right: -16vw;
  background: radial-gradient(circle, rgba(155, 196, 232, 0.09), transparent 62%);
  animation: ${drift2} 41s ease-in-out infinite alternate;
`;

const AmberGlow = styled(Blob)`
  width: 44vw;
  height: 44vw;
  bottom: -14vw;
  left: 8vw;
  background: radial-gradient(circle, rgba(224, 164, 92, 0.07), transparent 62%);
  animation: ${drift3} 38s ease-in-out infinite alternate;
`;

const Section = styled.section`
  scroll-margin-top: 90px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Atmosphere aria-hidden>
      <BlueGlow />
      <SkyGlow />
      <AmberGlow />
    </Atmosphere>
    <Header />
    <main>
      <Section id="home"><Home /></Section>
      <Section id="experience"><Experience /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="education"><Education /></Section>
      <Section id="volunteering"><Volunteering /></Section>
      <Section id="contact"><Contact /></Section>
    </main>
  </ThemeProvider>
);

export default App;
