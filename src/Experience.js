import React from 'react';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import ciscoLogo from './experienceimages/cisco.png';
import humanaLogo from './experienceimages/humana.png';
import elLogo2 from './experienceimages/el3.jpg';
import alclogo from './experienceimages/alc.png';
import pythonIcon from './experienceimages/py.png';
import rebel2 from './experienceimages/rebel2.jpeg';
import gitIcon from './experienceimages/git copy.png';
import swiftIcon from './experienceimages/swift1.png';
import figmaIcon from './experienceimages/fig.png';
import djangoIcon from './experienceimages/dj.png';
import rnIcon from './experienceimages/rn.png';
import SQLIcon from './experienceimages/sql.png';
import gcIcon from './experienceimages/gc.png';
import businessIcon from './experienceimages/business.png';
import chapone from './experienceimages/chapone.png';
import nextjs from './experienceimages/next-js copy.png';
import apex from './experienceimages/apex.jpeg';
import pandasIcon from './experienceimages/pandas.png';
import numpyIcon from './experienceimages/numpy.webp';
import skyvernIcon from './experienceimages/skyvern.png';
import umdcs from './experienceimages/umdcs.jpg';
import salesforceIcon from './experienceimages/salesforce.png';
import apexLogo from './experienceimages/apexlogo.png';
import mulesoftIcon from './experienceimages/mulesoft.png';
import jsIcon from './experienceimages/js.png';
import genesysIcon from './experienceimages/genesys.png';
import styled from 'styled-components';

const experiences = [
    {
        company: 'Humana',
        logo: humanaLogo,
        title: 'Software Engineering Intern',
        date: 'May 2025 ~ Present',
        description: [
            'Working in the CRM team utilizing tools like Salesforce, Genesys, and MuleSoft to build and integrate robust solutions that streamline customer service processes',
            'Optimized DML operations and overall code efficiency in the Humana pharmacy application, reducing processing time by 30%, resolving governor limit exceptions, and enhancing performance for 2,000,000+ daily users',
            'Integrated Google’s Agent Assist into the Salesforce call center platform, enabling real-time transcription and automated post-call summaries to boost agent efficiency and enhance customer experience through AI-powered insights',
            'Reduced agent handling time by 20% and contributed to an initiative projected to generate $35M/year'
        ],
        icons: [],
    },
    {
      company: 'UMD Computer Sciecnce Department',
      logo: umdcs,
      title: 'Machine Learning Research Assistant',
      date: 'August 2025 ~ Present',
      description: [
          'Working with professor Haizhao Yang to on spatio-temporal diffusion models for precipitation',
      ],
      icons: [],
  },
    {
        company: 'Alpha Intelligence Capital',
        logo: alclogo,
        title: 'Full Stack Engineer',
        date: 'February 2025 ~ Present',
        description: [
            'Working with Angel Investor Zeki Mokhtarzada and the UMD Hatchery Program to develop an advanced automation tool using Skyvern AI that streamlines document retrieval and processing',
            'Utilizing LLMs and implementing a RAG system to build an intelligent chat bot tailored for financial institutions, enhancing client interactions and data accessibility'
        ],
        icons: [pythonIcon, skyvernIcon, gitIcon],
    },
    {
        company: 'Apex Quant',
        logo: apex,
        title: 'Junior Quantitative Analyst',
        date: 'October 2024 ~ Present',
        description: [
            'Building a custom data loader using Python to create an in-house dataset, enhancing data accessibility for projects.',
            'Designing quantitative trading strategies to identify and optimize the most effective approach for the club\'s portfolio.',
            'Engineering advanced infrastructure to enhance the efficiency of trading strategies, aligning with market demands.',
        ],
        icons: [pythonIcon, pandasIcon, numpyIcon, gitIcon],
    },
    {
        company: 'Chapter One',
        logo: chapone,
        title: 'Software Engineering Internship',
        date: 'September 2024 - December 2024',
        description: [
            'Leveraged Next.js and the OpenAI API to seamlessly integrate Twilio, designing and implementing automated emailing and calling systems.',
            'Engaged in full-stack development tasks, contributing to both client-side and server-side code.',
            'Worked directly with clients to understand their business needs, providing tailored solutions that aligned with their goals.',
        ],
        icons: [nextjs, pythonIcon, SQLIcon, gitIcon],
    },
    {
        company: 'weRebel',
        logo: rebel2,
        title: 'Software Engineering Internship',
        date: 'May 2024 - August 2024',
        description: [
            'Collaborated with a team to design, develop, and deploy features for the Rebel Artist Platforms, ensuring a seamless user experience.',
            'Built user interfaces using JavaScript React Framework, creating responsive and interactive web apps.',
            'Developed and maintained backend services with Python Django Framework, focusing on scalability and security.',
        ],
        icons: [pythonIcon, djangoIcon, rnIcon, SQLIcon, gcIcon, figmaIcon, gitIcon],
    },
    {
        company: 'Eye Level',
        logo: elLogo2,
        title: 'Marketing/Business Intern',
        date: 'July 2022 - September 2022',
        description: [
            'Led initiatives for the annual event coordination and devised marketing strategies for two locations with 250 students.',
            'Spearheaded marketing and outreach efforts for two Eye Level locations, driving student enrollment and brand visibility.',
        ],
        icons: [businessIcon],
    },
    {
        company: 'Cisco Systems',
        logo: ciscoLogo,
        title: 'Cisco Summer Internship',
        date: 'June 2022 - July 2022',
        description: [
            'Completed a rigorous program, gaining valuable insights into the field of computer science and enhancing personal skills.',
            'Developed a mobile application using Xcode, showcasing proficiency in iOS app development.',
            'Collaborated with cross-functional teams to deliver innovative solutions and meet project objectives.',
        ],
        icons: [pythonIcon, swiftIcon, figmaIcon, gitIcon],
    },
];

const Experience = () => {
    return (
      <Section>
        <ContentWrapper>
          <Heading>Experience</Heading>
  
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineDot />
                <Card
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <Logo
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    isLarge={exp.company === 'Alpha Intelligence Capital' || exp.company === 'Chapter One'}
                    />

                  <JobTitle>{exp.title}</JobTitle>
                  <Company>{exp.company}</Company>
                  <Date>{exp.date}</Date>
                  <BulletList>
                    {exp.description.map((point, idx) => (
                      <Bullet key={idx}>{point}</Bullet>
                    ))}
                  </BulletList>
                  <TechStack>
                    {exp.icons.map((icon, idx) => (
                      <TechIcon key={idx} src={icon} alt="Tech" />
                    ))}
                  </TechStack>
                </Card>
              </TimelineItem>
            ))}
          </Timeline>
        </ContentWrapper>
      </Section>
    );
  };
  
  const Section = styled.div`
    background-color: #0a192f;
    padding: 100px 20px;
    color: #e6f1ff;
  `;
  
  const ContentWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
  `;
  
  const Heading = styled.h2`
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 60px;
    color: #e6f1ff;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    
    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #64ffda;
    }
`;
  
  
  const Timeline = styled.div`
    position: relative;
    margin: 0 auto;
    padding-left: 20px;
    &:before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      width: 2px;
      height: 100%;
      background: #1e3a5f;
    }
  `;
  
  const TimelineItem = styled.div`
    position: relative;
    margin-bottom: 50px;
  `;
  
  const TimelineDot = styled.div`
    position: absolute;
    left: 11px;
    width: 18px;
    height: 18px;
    background: #64ffda;
    border-radius: 50%;
    z-index: 1;
  `;
  
  const Card = styled(motion.div)`
    background: #112240;
    border: 1px solid #1e3a5f;
    border-radius: 10px;
    padding: 25px;
    margin-left: 50px;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  `;
  
  const Logo = styled.img`
  width: ${({ isLarge }) => (isLarge ? '75px' : '60px')};
  height: ${({ isLarge }) => (isLarge ? '75px' : '60px')};
  object-fit: contain;
  margin-bottom: 10px;
`;

  
  const JobTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  `;
  
  const Company = styled.h4`
    font-size: 18px;
    color: #64ffda;
    margin-bottom: 10px;
  `;
  
  const Date = styled.p`
    font-size: 14px;
    color: #8892b0;
    margin-bottom: 15px;
  `;
  
  const BulletList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`;

const Bullet = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: #a8b2d1;
  font-size: 15px;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    top: 0;
    color: #64ffda;
  }
`;

  
  const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  `;
  
  const TechIcon = styled.img`
    width: 28px;
    height: 28px;
  `;
  
  export default Experience;