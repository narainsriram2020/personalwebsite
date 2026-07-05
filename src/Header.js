import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SECTIONS = ['home', 'experience', 'skills', 'projects', 'education', 'volunteering', 'contact'];
const LABELS = {
  home: 'Home',
  experience: 'Experience',
  skills: 'Skills',
  projects: 'Projects',
  education: 'Education',
  volunteering: 'Volunteering',
  contact: 'Contact',
};

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      SECTIONS.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;
        const { offsetTop, offsetHeight } = element;
        const reach = section === 'contact' ? window.innerHeight : offsetHeight;
        const inView = scrollPosition >= offsetTop - 90 && scrollPosition < offsetTop + reach - 90;
        if (inView && section !== activeSection) setActiveSection(section);
      });

      setIsAtTop(scrollPosition < 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = window.innerWidth <= 768 ? 80 : 0;
        window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <Container>
      <TopBar isAtTop={isAtTop}>
        <Bar>
          <Logo onClick={() => handleNavClick('home')}>NS</Logo>
          <Toggle onClick={() => setIsMobileMenuOpen((v) => !v)} open={isMobileMenuOpen}>
            <span />
            <span />
            <span />
          </Toggle>
          <Nav open={isMobileMenuOpen}>
            {SECTIONS.map((id) => (
              <NavLink key={id} active={activeSection === id} onClick={() => handleNavClick(id)}>
                {LABELS[id]}
              </NavLink>
            ))}
          </Nav>
        </Bar>
      </TopBar>

      {!isAtTop && (
        <IslandWrap>
          <Island>
            {SECTIONS.map((id) => (
              <IslandItem key={id} active={activeSection === id} onClick={() => handleNavClick(id)}>
                {LABELS[id]}
              </IslandItem>
            ))}
          </Island>
        </IslandWrap>
      )}
    </Container>
  );
}

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.header`
  position: relative;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 50;
  padding: 22px 0;
  opacity: ${({ isAtTop }) => (isAtTop ? 1 : 0)};
  transition: opacity 0.4s ease, background 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    opacity: 1;
    padding: 14px 0;
    background: ${({ isAtTop, theme }) => (isAtTop ? 'transparent' : `${theme.color.bg}e6`)};
    backdrop-filter: ${({ isAtTop }) => (isAtTop ? 'none' : 'blur(14px)')};
    border-bottom: 1px solid ${({ isAtTop, theme }) => (isAtTop ? 'transparent' : theme.color.line)};
  }
`;

const Bar = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    padding: 0 20px;
  }
`;

const Logo = styled.button`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.ink};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.25s ease;
  &:hover { color: ${({ theme }) => theme.color.accent}; }
`;

const Toggle = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    width: 26px;
    box-sizing: content-box;
    background: none;
    border: none;
    cursor: pointer;
    padding: 12px 0 12px 12px; /* larger tap target without shifting the icon */

    span {
      display: block;
      height: 1.5px;
      width: 100%;
      background: ${({ theme }) => theme.color.ink};
      transition: transform 0.3s ease, opacity 0.3s ease;
      &:nth-child(1) { transform: ${({ open }) => (open ? 'translateY(8px) rotate(45deg)' : 'none')}; }
      &:nth-child(2) { opacity: ${({ open }) => (open ? 0 : 1)}; }
      &:nth-child(3) { transform: ${({ open }) => (open ? 'translateY(-8px) rotate(-45deg)' : 'none')}; }
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    position: absolute;
    top: calc(100% + 12px);
    left: 12px;
    right: 12px;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    overflow: hidden;
    padding: 8px;
    background: ${({ theme }) => theme.color.bgElevated}f2;
    backdrop-filter: blur(14px);
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(3, 10, 22, 0.45);
    max-height: ${({ open }) => (open ? '480px' : '0')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: max-height 0.35s ease, opacity 0.25s ease, visibility 0.35s;
  }
`;

const NavLink = styled.button`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 15px;
  color: ${({ active, theme }) => (active ? theme.color.ink : theme.color.muted)};
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  position: relative;
  transition: color 0.25s ease;

  &:after {
    content: '';
    position: absolute;
    left: 14px;
    bottom: 4px;
    height: 1px;
    width: ${({ active }) => (active ? 'calc(100% - 28px)' : '0')};
    background: ${({ theme }) => theme.color.accent};
    transition: width 0.3s ease;
  }
  &:hover { color: ${({ theme }) => theme.color.ink}; }

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    padding: 12px 14px;
    border-radius: 10px;
    background: ${({ active, theme }) => (active ? theme.color.bgInset : 'transparent')};
    &:after { display: none; }
  }
`;

const IslandWrap = styled.div`
  position: fixed;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  @media (max-width: 768px) { display: none; }
`;

const Island = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.color.bgElevated}cc;
  backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 999px;
  padding: 6px 10px;
  box-shadow: 0 12px 40px rgba(3, 10, 22, 0.45);
  animation: ${fadeDown} 0.45s ease forwards;
`;

const IslandItem = styled.button`
  font-family: ${({ theme }) => theme.font.body};
  font-size: 13.5px;
  color: ${({ active, theme }) => (active ? theme.color.bg : theme.color.muted)};
  background: ${({ active, theme }) => (active ? theme.color.accentSky : 'transparent')};
  border: none;
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 999px;
  transition: color 0.25s ease, background 0.25s ease;
  &:hover { color: ${({ active, theme }) => (active ? theme.color.bg : theme.color.ink)}; }
`;

export default Header;
