import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = ['home', 'experience', 'skills', 'projects', 'education', 'volunteering', 'contact'];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const isInView = scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50;

          if (section === 'contact') {
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
          offset = 290;
        }

        const offsetTop = section.offsetTop - offset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }

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
          <LogoContainer>
            <Logo>NS</Logo>
          </LogoContainer>
          <NavToggle onClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen}>
            <span />
            <span />
            <span />
          </NavToggle>
          <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
            <NavLink active={activeSection === 'home'} onClick={() => handleNavClick('home')}>Home</NavLink>
            <NavLink active={activeSection === 'experience'} onClick={() => handleNavClick('experience')}>Experience</NavLink>
            <NavLink active={activeSection === 'skills'} onClick={() => handleNavClick('skills')}>Skills</NavLink>
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
    <IslandNavLinks>
      <IslandNavItem active={activeSection === 'home'} onClick={() => handleNavClick('home')}>Home</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'experience'} onClick={() => handleNavClick('experience')}>Experience</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'skills'} onClick={() => handleNavClick('skills')}>Skills</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'projects'} onClick={() => handleNavClick('projects')}>Projects</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'education'} onClick={() => handleNavClick('education')}>Education</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'volunteering'} onClick={() => handleNavClick('volunteering')}>Volunteering</IslandNavItem>
      <Divider />
      <IslandNavItem active={activeSection === 'contact'} onClick={() => handleNavClick('contact')}>Contact</IslandNavItem>
    </IslandNavLinks>
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
  background-color: #0a192f;
  color: #e6f1ff;
  padding: 15px 0;
  transition: opacity 0.3s ease;
  opacity: ${({ isAtTop }) => (isAtTop ? '1' : '0')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

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
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #64ffda;
  letter-spacing: 1px;
`;

const NavToggle = styled.div`
  display: none;
  position: absolute;
  top: 15px;
  right: 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;

    span {
      display: block;
      width: 28px;
      height: 2px;
      background-color: #64ffda;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

      &:nth-child(1) {
        transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        opacity: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? '0' : '1'};
      }

      &:nth-child(3) {
        transform: ${({ isMobileMenuOpen }) => isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
      }
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '20px' : '0')};
    max-height: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '500px' : '0')};
    overflow: hidden;
    width: 100%;
  }
`;

const NavLink = styled.button`
  font-size: 16px;
  color: ${({ active }) => (active ? '#64ffda' : '#ccd6f6')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.3s, transform 0.2s;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #64ffda;
    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
    text-align: left;
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
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 8px 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${fadeDown} 0.5s ease forwards;
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const IslandNavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const IslandNavItem = styled.button`
  font-size: 14px;
  color: ${({ active }) => (active ? '#64ffda' : '#ccd6f6')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 10px;
  transition: color 0.3s, transform 0.2s;
  position: relative;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: ${({ active }) => (active ? '60%' : '0')};
    height: 2px;
    background-color: #64ffda;
    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover {
    color: #64ffda;
    
    &:after {
      width: 60%;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: rgba(100, 255, 218, 0.3);
`;

const BackToTopBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(100, 255, 218, 0.2);
  color: #64ffda;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px);
  }
`;

const UpArrow = styled.span`
  border: solid #64ffda;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-135deg);
`;

export default Header;