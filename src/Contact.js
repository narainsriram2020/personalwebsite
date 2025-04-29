import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaDev, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#64ffda');
    gradient.addColorStop(0.5, '#0aafff');
    gradient.addColorStop(1, '#c792ea');

    let t = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0a192f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      for (let i = 0; i <= canvas.width; i++) {
        const y = Math.sin(i * 0.01 + t) * 30 + Math.sin(i * 0.02 + t * 1.5) * 20 + canvas.height / 2;
        if (i === 0) {
          ctx.moveTo(i, y);
        } else {
          ctx.lineTo(i, y);
        }
      }
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      t += 0.01;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contacts = [
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/narainsriram/', color: '#0A66C2' },
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/narainsriram/', color: '#E1306C' },
    { name: 'Devpost', icon: <FaDev />, link: 'https://devpost.com/narainsriram', color: '#003E54' },
    { name: 'Email', icon: <FaEnvelope />, link: 'mailto:narainsriram@gmail.com', color: '#EA4335' },
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/narainsriram2020', color: '#24292E' },
  ];

  return (
    <SectionContainer>
      <Canvas ref={canvasRef} />
      <ContentWrapper visible={visible}>
        <Heading>Let's Connect</Heading>
        <SocialRow>
          {contacts.map((contact, index) => (
            <SocialLink
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              color={contact.color}
            >
              <IconWrapper>{contact.icon}</IconWrapper>
              <SocialName>{contact.name}</SocialName>
            </SocialLink>
          ))}
        </SocialRow>
        <Footer>Designed & Built by Narain Sriram &copy; {new Date().getFullYear()}</Footer>
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
  text-align: center;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.8s ease;
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 50px 0;
  margin-top: 100px;
  color: #e6f1ff;
  position: relative;
  display: inline-block;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 315px;
    height: 4px;
    background-color: #64ffda;
  }
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 60px;
`;

const SocialLink = styled.a`
  background-color: #112240;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #1e3a5f;
  color: #e6f1ff;
  text-decoration: none;
  width: 140px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ color }) => color};
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

const SocialName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Footer = styled.footer`
  font-size: 14px;
  color: #8892b0;
  margin-top: 400px;
`;

export default Contact;