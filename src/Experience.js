import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';

// Company logos
import bnyLogo from './experienceimages/bny.png';
import humanaLogo from './experienceimages/humana.png';
import umdLogo from './experienceimages/umdcs.jpg';
import alcLogo from './experienceimages/alc.png';
import apexLogo from './experienceimages/apex.jpeg';
import chapOneLogo from './experienceimages/chapone.png';
import rebelLogo from './experienceimages/rebel.png';
import eyeLevelLogo from './experienceimages/eyelevel.png';
import ciscoLogo from './experienceimages/cisco.svg';

const experiences = [
  {
    company: 'BNY',
    logo: bnyLogo,
    title: 'Software Engineering Intern',
    date: 'Jun 2026 — Present',
    points: [
      "Software Engineering Intern in BNY's Summer 2026 program.",
    ],
    tech: [],
  },
  {
    company: 'Humana',
    logo: humanaLogo,
    title: 'Software Engineering Intern',
    date: 'May 2025 — Dec 2025',
    points: [
      'Building on the CRM team with Salesforce, Genesys, and MuleSoft to streamline customer-service workflows.',
      'Optimized DML operations in the pharmacy application — cutting processing time 30%, resolving governor-limit exceptions, and improving performance for 2,000,000+ daily users.',
      'Integrated Google Agent Assist into the Salesforce call center for real-time transcription and automated post-call summaries.',
      'Reduced agent handling time 20%; contributed to an initiative projected to generate $35M/year.',
    ],
    tech: ['Salesforce', 'Apex', 'Genesys', 'MuleSoft', 'JavaScript', 'Python'],
  },
  {
    company: 'UMD Computer Science',
    logo: umdLogo,
    title: 'Machine Learning Research Assistant',
    date: 'Aug 2025 — Present',
    points: [
      'Researching diffusion-based generative models for spatiotemporal downscaling of precipitation with Prof. Haizhao Yang.',
      'Building and evaluating deep-learning pipelines on global climate datasets (FV3GFS) to improve fine-scale rainfall prediction and capture extreme events.',
    ],
    tech: ['Python', 'Pandas', 'NumPy'],
  },
  {
    company: 'Alpha Intelligence Capital',
    logo: alcLogo,
    logoDark: true,
    title: 'Full Stack Engineer',
    date: 'Feb 2025 — Apr 2025',
    points: [
      'Worked with angel investor Zeki Mokhtarzada and the UMD Hatchery to build an automation tool on Skyvern AI that streamlines document retrieval and processing.',
      'Built an LLM-powered RAG chatbot tailored for financial institutions, improving client interactions and data accessibility.',
    ],
    tech: ['Python', 'Skyvern', 'Git'],
  },
  {
    company: 'Apex Quant',
    logo: apexLogo,
    title: 'Junior Quantitative Analyst',
    date: 'Oct 2024 — Present',
    points: [
      'Built a custom Python data loader to create an in-house dataset, improving data accessibility across projects.',
      "Designed and back-tested quantitative trading strategies to optimize the approach for the club's portfolio.",
      'Engineered infrastructure to improve the efficiency of trading strategies in line with market demands.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Git'],
  },
  {
    company: 'Chapter One',
    logo: chapOneLogo,
    title: 'Software Engineering Intern',
    date: 'Sep 2024 — Dec 2024',
    points: [
      'Leveraged Next.js and the OpenAI API to integrate Twilio, designing automated emailing and calling systems.',
      'Contributed across the stack on both client- and server-side code.',
      'Worked directly with clients to translate business needs into tailored solutions.',
    ],
    tech: ['Next.js', 'Python', 'SQL', 'Git'],
  },
  {
    company: 'weRebel',
    logo: rebelLogo,
    logoDark: true,
    title: 'Software Engineering Intern',
    date: 'May 2024 — Aug 2024',
    points: [
      'Designed, built, and deployed features for the Rebel Artist Platforms with a focus on a seamless user experience.',
      'Built responsive, interactive interfaces in React.',
      'Developed and maintained Python/Django backend services with an emphasis on scalability and security.',
    ],
    tech: ['Python', 'Django', 'React', 'SQL', 'GCP', 'Figma'],
  },
  {
    company: 'Eye Level',
    logo: eyeLevelLogo,
    title: 'Marketing / Business Intern',
    date: 'Jul 2022 — Sep 2022',
    points: [
      'Led annual event coordination and devised marketing strategies for two locations serving 250 students.',
      'Spearheaded outreach that drove student enrollment and brand visibility.',
    ],
    tech: [],
  },
  {
    company: 'Cisco Systems',
    logo: ciscoLogo,
    logoDark: true,
    title: 'Summer Intern',
    date: 'Jun 2022 — Jul 2022',
    points: [
      'Completed a rigorous program covering computer-science fundamentals and professional development.',
      'Built a mobile application in Xcode, demonstrating iOS development skills.',
      'Collaborated with cross-functional teams to deliver solutions and meet project objectives.',
    ],
    tech: ['Python', 'Swift', 'Figma', 'Git'],
  },
];

const hideOnError = (e) => {
  e.currentTarget.style.display = 'none';
};

const Experience = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx((cur) => (cur === i ? null : i));

  return (
    <Section>
      <Wrapper>
        <SectionHeading index="01" title="Experience" />

        <List>
          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            return (
              <Row
                key={exp.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <RowButton onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <Index $open={isOpen}>{String(i + 1).padStart(2, '0')}</Index>
                  <Company $open={isOpen}>{exp.company}</Company>
                  <Meta>
                    <Role>{exp.title}</Role>
                    <When>{exp.date}</When>
                  </Meta>
                  <Plus $open={isOpen} aria-hidden>+</Plus>
                </RowButton>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Details
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <DetailsInner>
                        <Logo
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          loading="lazy"
                          onError={hideOnError}
                          $dark={exp.logoDark}
                        />
                        <div>
                          <MobileMeta>{exp.title} · {exp.date}</MobileMeta>
                          <Points>
                            {exp.points.map((point, j) => (
                              <Point key={j}>{point}</Point>
                            ))}
                          </Points>
                          {exp.tech.length > 0 && (
                            <Tech>{exp.tech.join(' · ')}</Tech>
                          )}
                        </div>
                      </DetailsInner>
                    </Details>
                  )}
                </AnimatePresence>
              </Row>
            );
          })}
        </List>
      </Wrapper>
    </Section>
  );
};

const Section = styled.div`
  padding: 120px 0;
  background: transparent;
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 32px;
  @media (max-width: 768px) { padding: 0 20px; }
`;

const List = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

const Row = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const RowButton = styled.button`
  display: grid;
  grid-template-columns: 52px 1fr auto 40px;
  align-items: baseline;
  gap: 20px;
  width: 100%;
  padding: 26px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 36px 1fr 28px;
    gap: 12px;
    padding: 20px 0;
  }
`;

const Index = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  letter-spacing: 0.06em;
  color: ${({ $open, theme }) => ($open ? theme.color.accentSky : theme.color.muted)};
  transition: color 0.3s ease;
`;

const Company = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(24px, 3.6vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: ${({ $open, theme }) => ($open ? theme.color.ink : theme.color.inkSoft)};
  transition: color 0.3s ease, transform 0.35s ease;

  ${RowButton}:hover & {
    color: ${({ theme }) => theme.color.ink};
    transform: translateX(6px);
  }
`;

const Meta = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (max-width: 768px) { display: none; }
`;

const Role = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.muted};
`;

const When = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.muted};
`;

const Plus = styled.span`
  justify-self: end;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 22px;
  font-weight: 300;
  line-height: 1;
  color: ${({ $open, theme }) => ($open ? theme.color.accent : theme.color.muted)};
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  transform-origin: center;
  transition: transform 0.35s ease, color 0.3s ease;
`;

const Details = styled(motion.div)`
  overflow: hidden;
`;

const DetailsInner = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 20px;
  padding: 4px 0 34px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 0 0 26px;
  }
`;

const Logo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  background: ${({ $dark, theme }) => ($dark ? theme.color.bgInset : '#F2F5FA')};
  border: 1px solid ${({ $dark, theme }) => ($dark ? theme.color.lineStrong : 'transparent')};
  border-radius: 12px;
  padding: 8px;
  margin-top: 2px;

  @media (max-width: 768px) { width: 46px; height: 46px; }
`;

const Points = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 720px;
`;

const Point = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.inkSoft};

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.accent};
  }
`;

const Tech = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.accentSky};
  margin-top: 16px;
`;

const MobileMeta = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.color.muted};
    margin-bottom: 12px;
  }
`;

export default Experience;
