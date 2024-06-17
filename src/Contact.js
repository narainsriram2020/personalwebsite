import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaEnvelope, FaDev, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const contacts = [
        { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/narainsriram/', color: '#0A66C2' },
        { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/narainsriram/', color: '#db2d7d' },
        { name: 'Devpost', icon: <FaDev />, link: 'https://devpost.com/narainsriram', color: '#003e54' },
        { name: 'Gmail', icon: <FaEnvelope />, link: 'mailto:narainsriram@gmail.com', color: '#eb4031' },
        { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/narainsriram2020', color: '#24292E' },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <ContactSection>
            <Heading>Contact</Heading>
            <LinksContainer>
                {contacts.map((contact, index) => (
                    <LinkItem
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={contact.color}
                        isHovered={hoveredIndex === index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <IconContainer>{contact.icon}</IconContainer>
                        <LinkText>{contact.name}</LinkText>
                    </LinkItem>
                ))}
            </LinksContainer>
        </ContactSection>
    );
};

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(135deg, #1a1a1a, #4682B4);
    color: #fff;
    min-height: 91vh;
`;

const Heading = styled.h2`
    font-size: 48px;
    margin-bottom: 60px;
    text-align: center;
    //text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
`;

const glowAnimation = (color) => keyframes`
    0% {
        box-shadow: 0 0 20px rgba(${color}, 0.5);
    }
    50% {
        box-shadow: 0 0 40px rgba(${color}, 1);
    }
    100% {
        box-shadow: 0 0 20px rgba(${color}, 0.5);
    }
`;

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LinkItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${({ isHovered, color }) => (isHovered ? color : '#fff')};
    font-size: 18px;
    font-weight: bold;
    transition: transform 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;
    padding: 30px;
    border-radius: 50%;
    background-color: ${({ isHovered }) => (isHovered ? '#fff' : '#333')};
    transform: ${({ isHovered }) => (isHovered ? 'scale(1.2) translateY(-10px)' : 'scale(1) translateY(0)')};
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 180px;
    box-sizing: border-box;
    margin: 20px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2) translateY(-10px);
        animation: ${({ color }) => glowAnimation(hexToRgb(color))} 2s infinite;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ color }) => color};
        opacity: 0;
        transition: opacity 0.5s ease;
        z-index
        : -1;
    }

    &:hover:before {
        opacity: 0.3;
    }
`;

const IconContainer = styled.div`
    font-size: 50px;
    margin-bottom: 15px;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    animation: ${({ isHovered }) => isHovered ? rotateAnimation : 'none'} 2s linear infinite;
`;

const LinkText = styled.span`
    transition: transform 0.5s ease;
    transform: translateZ(20px);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

// Helper function to convert hex color to rgb
const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return `${r},${g},${b}`;
};

export default Contact;
