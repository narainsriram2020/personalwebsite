import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrollingUp = scrollPosition < lastScrollPosition;

      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'volunteering', 'contact'];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const isInView = scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50;

          // Adjust the condition for the Contact section specifically
          if (section === 'contact') {
            // Check if scroll position is within the section's top to bottom
            const isInContactView = scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + window.innerHeight - 50;
            if (isInContactView && section !== activeSection) {
              setActiveSection(section);
            }
          } else if (isInView && section !== activeSection) {
            setActiveSection(section);
          }
        }
      });

      setIsAtTop(scrollPosition === 0);
      lastScrollPosition = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        let offset = 0;
        if (window.innerWidth <= 768) {
          // Adjust the offset for mobile
          offset = 290; // Adjust this offset as needed
        }

        const offsetTop = section.offsetTop - offset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }

    // Close mobile menu after clicking on a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <HeaderContainer isAtTop={isAtTop}>
        <HeaderContent>
          <LogoContainer isAtTop={isAtTop}>
            <Logo>Narain Sriram</Logo>
          </LogoContainer>
          <NavToggle onClick={toggleMobileMenu}>
            <span />
            <span />
            <span />
          </NavToggle>
          <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
            <NavLink active={activeSection === 'home'} onClick={() => handleNavClick('home')}>Home</NavLink>
            <NavLink active={activeSection === 'skills'} onClick={() => handleNavClick('skills')}>Skills</NavLink>
            <NavLink active={activeSection === 'experience'} onClick={() => handleNavClick('experience')}>Experience</NavLink>
            <NavLink active={activeSection === 'projects'} onClick={() => handleNavClick('projects')}>Projects</NavLink>
            <NavLink active={activeSection === 'education'} onClick={() => handleNavClick('education')}>Education</NavLink>
            <NavLink active={activeSection === 'volunteering'} onClick={() => handleNavClick('volunteering')}>Volunteering</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => handleNavClick('contact')}>Contact</NavLink>
          </NavLinks>
        </HeaderContent>
      </HeaderContainer>
      {!isAtTop && window.innerWidth <= 768 && (
        <BackToTopBox onClick={scrollToTop}>
          <UpArrow />
          Back to Top
        </BackToTopBox>
      )}
      {!isAtTop && window.innerWidth > 768 && (
        <IslandContainer>
          <StyledIsland activeSection={activeSection} handleNavClick={handleNavClick} />
        </IslandContainer>
      )}
    </Container>
  );
}

const StyledIsland = ({ activeSection, handleNavClick }) => (
  <Island>
    <NavLinks>
      <NavLink active={activeSection === 'home'} onClick={() => handleNavClick('home')}>Home</NavLink>
      <NavLink active={activeSection === 'skills'} onClick={() => handleNavClick('skills')}>Skills</NavLink>
      <NavLink active={activeSection === 'experience'} onClick={() => handleNavClick('experience')}>Experience</NavLink>
      <NavLink active={activeSection === 'projects'} onClick={() => handleNavClick('projects')}>Projects</NavLink>
      <NavLink active={activeSection === 'education'} onClick={() => handleNavClick('education')}>Education</NavLink>
      <NavLink active={activeSection === 'volunteering'} onClick={() => handleNavClick('volunteering')}>Volunteering</NavLink>
      <NavLink active={activeSection === 'contact'} onClick={() => handleNavClick('contact')}>Contact</NavLink>
    </NavLinks>
  </Island>
);

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
`;

const HeaderContainer = styled.div`
  background-color: #0e4166;
  color: white;
  padding: 15px 0;
  transition: opacity 0.3s ease;
  opacity: ${({ isAtTop }) => (isAtTop ? '1' : '0')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px; /* Add padding to center the menu items */
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 81px;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 130px;
  transition: transform 0.3s ease;
  transform: ${({ isAtTop }) => (isAtTop ? 'translateX(-50%)' : 'none')};

  @media (max-width: 768px) {
    transform: none;
  }
`;

const NavToggle = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;

    span {
      display: block;
      width: 30px;
      height: 4px;
      background-color: #fff;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, top 0.3s ease-in-out;
      position: relative;

      &:nth-child(1) {
        transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
        top: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? '10px' : '0'};
      }

      &:nth-child(2) {
        opacity: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? '0' : '1'};
      }

      &:nth-child(3) {
        transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        top: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? '-10px' : '0'};
      }
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: ${({ isAtTop }) => (isAtTop ? 'flex-end' : 'flex-start')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '20px' : '0')};
    max-height: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '500px' : '0')};
    overflow: hidden;
  }
`;

const NavLink = styled.button`
  font-size: 18px;
  color: ${({ active }) => (active ? '#3e76af' : '#fff')};
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? '#fff' : '#3e76af')};
    color: ${({ active }) => (active ? '#3e76af' : '#fff')};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
  }
`;

const IslandContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const Island = styled.div`
  background-color: #0e4166;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeDown} 0.5s ease forwards;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const BackToTopBox = styled.div`
  position: fixed;
  bottom: 20px; /* Adjusted to be at the bottom */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(14, 65, 102, 0.8); /* Transparent background */
  color: white;
  border-radius: 10px;
  padding: 15px 25px; /* Increased size */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  font-size: 16px; /* Increased font size */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: rgba(62, 118, 175, 0.8);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const UpArrow = styled.span`
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

export default Header;