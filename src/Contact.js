import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EMAIL = 'narainsriram@gmail.com';

const elsewhere = [
  { name: 'GitHub', link: 'https://github.com/narainsriram2020' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/narainsriram/' },
  { name: 'Devpost', link: 'https://devpost.com/narainsriram' },
  { name: 'Instagram', link: 'https://www.instagram.com/narainsriram/' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <FooterSection>
      <Wrapper>
        <Top
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <Kicker>
            <KickerNum>06</KickerNum>
            <KickerRule />
            <KickerWord>Contact</KickerWord>
          </Kicker>

          <Big>
            Whether it's an internship, a research idea, or a pickup tennis
            match — my inbox is open.
          </Big>

          <EmailRow>
            <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
            <CopyButton onClick={copyEmail} aria-label="Copy email address">
              {copied ? 'Copied ✓' : 'Copy'}
            </CopyButton>
          </EmailRow>
        </Top>

        <Elsewhere>
          <ElsewhereLabel>Find me<br />elsewhere</ElsewhereLabel>
          <SocialButtons>
            {elsewhere.map((s) => (
              <SocialButton key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
                {s.name} <Arrow aria-hidden>↗</Arrow>
              </SocialButton>
            ))}
          </SocialButtons>
        </Elsewhere>

        <BottomBar>
          <Copyright>© {new Date().getFullYear()} Narain Sriram</Copyright>
          <TopButton onClick={backToTop}>Back to top ↑</TopButton>
        </BottomBar>
      </Wrapper>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 110px 0 34px;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

const KickerNum = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.accentSky};
`;

const KickerRule = styled.span`
  height: 1px;
  width: 120px;
  background: ${({ theme }) => theme.color.lineStrong};
`;

const KickerWord = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.muted};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 32px;
  @media (max-width: 768px) { padding: 0 20px; }
`;

const Top = styled(motion.div)`
  margin-bottom: 72px;
`;

const Big = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(30px, 4.6vw, 54px);
  line-height: 1.18;
  letter-spacing: -0.018em;
  color: ${({ theme }) => theme.color.ink};
  max-width: 820px;
  margin: 0 0 42px;
`;

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`;

const EmailLink = styled.a`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(19px, 2.6vw, 27px);
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.accentSky};
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.color.accentSky};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover:after { transform: scaleX(1); }
`;

const CopyButton = styled.button`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.color.muted};
  background: ${({ theme }) => theme.color.bgElevated};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.color.ink};
    border-color: ${({ theme }) => theme.color.lineStrong};
  }
`;

const Elsewhere = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  gap: 24px;
  padding: 38px 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const ElsewhereLabel = styled.div`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.ink};

  @media (max-width: 700px) {
    br { display: none; }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const Arrow = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.accent};
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.color.inkSoft};
  text-decoration: none;
  background: ${({ theme }) => theme.color.bgElevated};
  border: 1px solid ${({ theme }) => theme.color.lineStrong};
  border-radius: 999px;
  padding: 12px 24px;
  transition: color 0.25s ease, border-color 0.25s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    color: ${({ theme }) => theme.color.ink};
    border-color: ${({ theme }) => theme.color.accent};
    transform: translateY(-2px);

    ${Arrow} { transform: translate(2px, -2px); }
  }

  @media (max-width: 700px) {
    flex: 1 1 calc(50% - 7px);
    justify-content: center;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 26px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const Copyright = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
`;

const Made = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
  text-align: center;

  @media (max-width: 700px) { display: none; }
`;

const TopButton = styled.button`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.25s ease;

  &:hover { color: ${({ theme }) => theme.color.accentSky}; }
`;

export default Contact;
