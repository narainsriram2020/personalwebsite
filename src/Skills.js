import React from 'react';
import styled, { keyframes } from 'styled-components';

function Skills() {

    const skillsList = [
        {
            name: 'Python',
            logo: '/python.png',
            description: 'High-level, general-purpose programming language',
            //proficiency: 'Advanced',
            used: 'Employed Python in personal projects for data analysis with NumPy and Pandas'
        },
        {
            name: 'Java',
            logo: '/java.png',
            description: 'Object-oriented, class-based programming language',
            //proficiency: 'Advanced',
            used: 'Gained proficiency through academic studies and projects, including developing a GUI-based application'
        },
        {
            name: 'C',
            logo: '/c.png',
            description: 'Low-level, powerful programming language for system and application development',
            //proficiency: 'Advanced',
            used: 'Utilized C to complete multiple school projects'
        },
        {
            name: 'x86-64 Assembly',
            logo: '/x86(2).png',
            description: 'Low-level language for CPU instruction and memory control',
            //proficiency: 'Advanced',
            used: 'Utilized x86-64 assembly to complete multiple school projects'
        },
        {
            name: 'JavaScript',
            logo: '/js.png',
            description: 'High-level, dynamic programming language for web development',
            //proficiency: 'Advanced',
            used: 'Extensively used for web development, including building websites and interactive applications'
        },
        {
            name: 'React JS & React Native',
            logo: '/rn.png',
            description: 'Framework for building cross-platform mobile applications',
            //proficiency: 'Advanced',
            used: 'Developed multiple mobile apps and a website, showcasing skills in creating responsive user interfaces'
        },
        {
            name: 'Flutter',
            logo: '/fl.png',
            description: 'Google\'s UI toolkit for building natively compiled applications',
            //proficiency: 'Intermediate',
            used: 'Developed the frontend of the wAIste app utilizing the Flutter framework'
        },
        {
            name: 'Next.js',
            logo: '/next-js.png',
            description: 'React framework for building fast, server-rendered web applications',
            //proficiency: 'Intermediate',
            used: 'Utilized Next.js during my internship at Chapter One'
        },
        {
            name: 'Swift',
            logo: '/swift.png',
            description: 'Language for developing iOS, macOS applications',
            //proficiency: 'Familiar',
            used: 'Showcased expertise in Swift by building a football table game, combining programming skills with game development concepts'
        },
        {
            name: 'SQL',
            logo: '/sql.png',
            description: 'Programming language for managing and querying relational databases',
            //proficiency: 'Intermediate',
            used: 'Utilized MySQL during my Rebel Internship, writing complex queries and designing database schemas'
        },
        {
            name: 'NumPy',
            logo: '/numpy.webp',
            description: 'Python library for scientific computing',
            //proficiency: 'Intermediate',
            used: 'Employed for numerical computing in a house price data analysis project'
        },
        {
            name: 'Pandas',
            logo: '/pandas.png',
            description: 'Python library for data manipulation and analysis',
            //proficiency: 'Intermediate',
            used: 'Used alongside NumPy for data manipulation and analysis in a house price project'
        },
        {
            name: 'Git',
            logo: '/git.png',
            description: 'Distributed version control system for tracking changes in source code',
            //proficiency: 'Advanced',
            used: 'Proficient in using Git for version control and collaboration across projects'
        },
        {
            name: 'Unix/Linux',
            logo: '/linux.png',
            description: 'Family of open-source, multi-tasking operating systems',
            //proficiency: 'Advanced',
            used: 'Proficient in Unix/Linux operating systems, including shell scripting and command-line tools'
        },
        {
            name: 'MATLAB',
            logo: '/matlab.png',
            description: 'Numerical computing environment and programming language',
            //proficiency: 'Intermediate',
            used: 'Mastered MATLAB in Linear Algebra, certified in MATLAB ONRAMP, used for various numerical computing tasks'
        },
        {
            name: 'HTML/CSS',
            logo: '/html.png',
            description: 'Language for creating and designing web pages',
            //proficiency: 'Intermediate',
            used: 'Proficient in HTML for building web pages and web applications'
        },
        {
            name: 'Google Cloud Platform',
            logo: '/gc.png',
            description: 'Google\'s comprehensive cloud computing platform for various services',
            //proficiency: 'Familiar',
            used: 'Utilized Google Cloud Platform for backend development in my rebel internship, including App Engine and Cloud SQL'
        },
        {
            name: 'Flask',
            logo: '/flask.png',
            description: 'Python web framework for building web applications and APIs',
            //proficiency: 'Intermediate',
            used: 'Used Flask for backend development in the wAIste project, implementing RESTful APIs'
        },
        {
            name: 'Figma',
            logo: '/figma.png',
            description: 'Web-based collaborative tool for UI/UX design and prototyping',
            //proficiency: 'Intermediate',
            used: 'Used Figma to create UI/UX designs during my rebel summer internship'
        },
        {
            name: 'Microsoft Office',
            logo: '/office.png',
            description: 'Productivity software for documents, spreadsheets, and presentations',
            //proficiency: 'Advanced',
            used: 'Proficient in Word, Excel, and PowerPoint for document creation, data analysis, and presentations'
        },
    ];

    return (
        <SectionContainer>
            <ContentWrapper>
                <Heading>Skills</Heading>

                <GridContainer>
                    {skillsList.map((skill, index) => (
                        <SkillCard key={index} index={index}>
                            <LogoContainer>
                                <Logo
                                    src={skill.logo}
                                    alt={skill.name}
                                    isLarge={['NumPy', 'MATLAB', 'Google Cloud Platform', 'Swift', 'SQL'].includes(skill.name)}
                                />
                            </LogoContainer>
                            <SkillName>{skill.name}</SkillName>
                            {/* <ProficiencyBadge proficiency={skill.proficiency}>
                                {skill.proficiency}
                            </ProficiencyBadge> */}
                            <Description>{skill.description}</Description>
                            <UsageHeading>How I've Used It:</UsageHeading>
                            <UsageDescription>{skill.used}</UsageDescription>
                        </SkillCard>
                    ))}
                </GridContainer>
            </ContentWrapper>
        </SectionContainer>
    );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.div`
    padding: 100px 0;
    background-color: #0a192f;
    color: #e6f1ff;
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

const SkillCard = styled.div`
    background-color: #112240;
    border: 1px solid #1e3a5f;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    animation: ${fadeIn} 0.5s ease forwards;
    animation-delay: ${props => Math.min(0.05 * props.index, 1)}s;
    opacity: 0;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
        border-color: #64ffda;
        transform: translateY(-5px);
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

const Logo = styled.img`
    width: ${({ isLarge }) => (isLarge ? '80px' : '60px')};
    height: ${({ isLarge }) => (isLarge ? '80px' : '60px')};
    object-fit: contain;
`;

const SkillName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #e6f1ff;
`;

const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
        case 'Advanced': return '#64ffda';      // teal
        case 'Intermediate': return '#ffcb6b';  // amber
        case 'Familiar': return '#c792ea';      // purple
        default: return '#64ffda';
    }
};

const ProficiencyBadge = styled.span`
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    background-color: ${props => `rgba(${hexToRgb(getProficiencyColor(props.proficiency))}, 0.15)`};
    color: ${props => getProficiencyColor(props.proficiency)};
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 14px;
    color: #a8b2d1;
    margin: 10px 0;
    min-height: 40px;
`;

const UsageHeading = styled.h5`
    font-size: 14px;
    font-weight: 600;
    color: #64ffda;
    margin-top: 10px;
`;

const UsageDescription = styled.p`
    font-size: 13px;
    line-height: 1.4;
    color: #8892b0;
    margin-top: 5px;
`;

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

export default Skills;
