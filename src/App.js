// App.js
import React from 'react';
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

const GlobalStyle = createGlobalStyle`
  /* Prevent horizontal overflow */
  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
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
    width: 12px; /* Adjust the width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the scrollbar track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0e4166; /* Color of the scrollbar thumb */
    border-radius: 6px; /* Round the corners of the scrollbar thumb */
    border: 3px solid #f1f1f1; /* Space around the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #083354; /* Darker color when hovered */
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #0e4166 #f1f1f1;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Header />
        <div id="home"><Home /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="volunteering"><Volunteering /></div>
        <div id="contact"><Contact /></div>
      </div>
    </Router>
  );
}

export default App;
