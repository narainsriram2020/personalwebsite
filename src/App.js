// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Volunteering from './Volunteering';
import { createGlobalStyle } from 'styled-components';
import styled, { keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Prevent horizontal overflow */
  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-color: #0a192f;
    color: #e6f1ff;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
  }

  /* Responsive font sizes */
  html {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a192f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #64ffda;
    border-radius: 4px;
    border: 2px solid #0a192f;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #4cdbbd;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #64ffda #0a192f;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.loaded ? 0 : 1};
  visibility: ${props => props.loaded ? 'hidden' : 'visible'};
  transition: opacity 0.5s ease-in-out, visibility 0.5s;
`;

const LogoAnimation = styled.div`
  font-size: 72px;
  font-weight: bold;
  color: #64ffda;
  position: relative;
  animation: ${fadeIn} 2s ease-out;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 4px;
    background-color: #64ffda;
    animation: expandLine 2s forwards;
  }

  @keyframes expandLine {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const Section = styled.div`
  min-height: 100vh;
  padding: 40px 0;
  animation: ${slideUp} 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay || '0s'};
`;

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <LoadingScreen loaded={loaded}>
        <LogoAnimation>NS</LogoAnimation>
      </LoadingScreen>
      <MainContainer loaded={loaded}>
        <Header />
        <Section id="home" delay="0.2s"><Home /></Section>
        <Section id="skills" delay="0.3s"><Skills /></Section>
        <Section id="experience" delay="0.4s"><Experience /></Section>
        <Section id="projects" delay="0.5s"><Projects /></Section>
        <Section id="education" delay="0.6s"><Education /></Section>
        <Section id="volunteering" delay="0.7s"><Volunteering /></Section>
        <Section id="contact" delay="0.8s"><Contact /></Section>
      </MainContainer>
    </Router>
  );
}

export default App;
