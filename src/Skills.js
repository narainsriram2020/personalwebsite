import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Skills() {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillCategories = {
        'Programming Languages': [
            {
                name: 'Python',
                logo: '/python.png',
                description: 'High-level, general-purpose programming language',
                used: 'Employed Python in personal projects for data analysis with NumPy and Pandas'
            },
            {
                name: 'Java',
                logo: '/java.png',
                description: 'Object-oriented, class-based programming language',
                used: 'Gained proficiency through academic studies and projects, including developing a GUI-based application'
            },
            {
                name: 'C',
                logo: '/c.png',
                description: 'Low-level, powerful programming language for system and application development',
                used: 'Utilized C to complete multiple school projects'
            },
            {
                name: 'JavaScript',
                logo: '/js.png',
                description: 'High-level, dynamic programming language for web development',
                used: 'Extensively used for web development, including building websites and interactive applications'
            },
            {
                name: 'Swift',
                logo: '/swift.png',
                description: 'Language for developing iOS, macOS applications',
                used: 'Showcased expertise in Swift by building a football table game, combining programming skills with game development concepts'
            },
            {
                name: 'Rust',
                logo: '/rust.png',
                description: 'Systems programming language focused on safety, speed, and concurrency',
                used: 'Utilized Rust to complete multiple school projects'
            },
            {
                name: 'OCaml',
                logo: '/ocaml.png',
                description: 'Functional programming language with strong static typing and pattern matching',
                used: 'Utilized OCaml to complete multiple school projects'
            },
            {
                name: 'x86-64 Assembly',
                logo: '/x86(2).png',
                description: 'Low-level language for CPU instruction and memory control',
                used: 'Utilized x86-64 assembly to complete multiple school projects'
            }
        ],
        'Web & Mobile Development': [
            {
                name: 'React JS & React Native',
                logo: '/rn.png',
                description: 'Framework for building cross-platform mobile applications',
                used: 'Developed multiple mobile apps and a website, showcasing skills in creating responsive user interfaces'
            },
            {
                name: 'Flutter',
                logo: '/fl.png',
                description: 'Google\'s UI toolkit for building natively compiled applications',
                used: 'Developed the frontend of the wAIste app utilizing the Flutter framework'
            },
            {
                name: 'Next.js',
                logo: '/next-js.png',
                description: 'React framework for building fast, server-rendered web applications',
                used: 'Utilized Next.js during my internship at Chapter One'
            },
            {
                name: 'HTML/CSS',
                logo: '/html.png',
                description: 'Language for creating and designing web pages',
                used: 'Proficient in HTML for building web pages and web applications'
            },
            {
                name: 'Flask',
                logo: '/flask.png',
                description: 'Python web framework for building web applications and APIs',
                used: 'Used Flask for backend development in the wAIste project, implementing RESTful APIs'
            }
        ],
        'Data & Analytics': [
            {
                name: 'NumPy',
                logo: '/numpy.webp',
                description: 'Python library for scientific computing',
                used: 'Employed for numerical computing in a house price data analysis project'
            },
            {
                name: 'Pandas',
                logo: '/pandas.png',
                description: 'Python library for data manipulation and analysis',
                used: 'Used alongside NumPy for data manipulation and analysis in a house price project'
            },
            {
                name: 'SQL',
                logo: '/sql.png',
                description: 'Programming language for managing and querying relational databases',
                used: 'Utilized MySQL during my Rebel Internship, writing complex queries and designing database schemas'
            },
            {
                name: 'MATLAB',
                logo: '/matlab.png',
                description: 'Numerical computing environment and programming language',
                used: 'Mastered MATLAB in Linear Algebra, certified in MATLAB ONRAMP, used for various numerical computing tasks'
            }
        ],
        'Cloud & Enterprise': [
            {
                name: 'Google Cloud Platform',
                logo: '/gc.png',
                description: 'Google\'s comprehensive cloud computing platform for various services',
                used: 'Utilized Google Cloud Platform for backend development in my rebel internship, including App Engine and Cloud SQL'
            },
            {
                name: 'Salesforce',
                logo: '/salesforce.png',
                description: 'Customer Relationship Management (CRM) platform with tools for sales, service, and automation',
                used: 'Worked on Salesforce CRM during my Humana internship, integrating Google Agent Assist and optimizing platform performance'
            },
            {
                name: 'Apex',
                logo: '/apex.png',
                description: 'Strongly typed, object-oriented programming language for Salesforce development',
                used: 'Used Apex during my internship at Humana'
            },
            {
                name: 'Genesys',
                logo: '/genesys.png',
                description: 'Cloud-based customer experience and contact center platform',
                used: 'Used Genesys in my Humana internship to enhance call center efficiency through automation and real-time support'
            },
            {
                name: 'MuleSoft',
                logo: '/mulesoft.png',
                description: 'Integration platform for connecting applications, data, and devices',
                used: 'Utilized MuleSoft to integrate APIs and backend systems as part of my Humana internship'
            }
        ],
        'Databases & Tools': [
            {
                name: 'MongoDB',
                logo: '/mongodb.svg',
                description: 'NoSQL database program that uses JSON-like documents with dynamic schemas',
                used: 'Built numerous projects using MongoDB as the primary database'
            },
            {
                name: 'Firebase',
                logo: '/fb.png',
                description: 'Google\'s platform for building and scaling mobile and web applications',
                used: 'Leveraged Firebase for authentication, Firestore database, and real-time data sync in app projects'
            },
            {
                name: 'Git',
                logo: '/git.png',
                description: 'Distributed version control system for tracking changes in source code',
                used: 'Proficient in using Git for version control and collaboration across projects'
            },
            {
                name: 'Unix/Linux',
                logo: '/linux.png',
                description: 'Family of open-source, multi-tasking operating systems',
                used: 'Proficient in Unix/Linux operating systems, including shell scripting and command-line tools'
            },
            {
                name: 'Figma',
                logo: '/figma.png',
                description: 'Web-based collaborative tool for UI/UX design and prototyping',
                used: 'Used Figma to create UI/UX designs during my rebel summer internship'
            },
            {
                name: 'Microsoft Office',
                logo: '/office.png',
                description: 'Productivity software for documents, spreadsheets, and presentations',
                used: 'Proficient in Word, Excel, and PowerPoint for document creation, data analysis, and presentations'
            }
        ]
    };

    const categories = ['all', ...Object.keys(skillCategories)];

    const getFilteredSkills = () => {
        if (activeCategory === 'all') {
            return Object.entries(skillCategories).flatMap(([category, skills]) => 
                skills.map(skill => ({ ...skill, category }))
            );
        }
        return skillCategories[activeCategory].map(skill => ({ ...skill, category: activeCategory }));
    };

    return (
        <SectionContainer>
            <ContentWrapper>
                <Heading>Skills</Heading>

                <CategoryTabs>
                    {categories.map((category) => (
                        <CategoryTab
                            key={category}
                            active={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category === 'all' ? 'All Skills' : category}
                        </CategoryTab>
                    ))}
                </CategoryTabs>

                <SkillsContainer>
                    {activeCategory !== 'all' && (
                        <CategoryHeader>
                            <CategoryTitle>{activeCategory}</CategoryTitle>
                            <CategoryLine />
                        </CategoryHeader>
                    )}

                    <GridContainer>
                        {getFilteredSkills().map((skill, index) => (
                            <SkillCard key={`${skill.name}-${skill.category}`} index={index}>
                                <LogoContainer>
                                    <Logo
                                        src={skill.logo}
                                        alt={skill.name}
                                        isLarge={['NumPy', 'MATLAB', 'Google Cloud Platform', 'Swift', 'SQL'].includes(skill.name)}
                                    />
                                </LogoContainer>

                                <SkillName>{skill.name}</SkillName>
                                <Description>{skill.description}</Description>
                                
                                <UsageSection>
                                    <UsageHeading>How I've Used It:</UsageHeading>
                                    <UsageDescription>{skill.used}</UsageDescription>
                                </UsageSection>
                            </SkillCard>
                        ))}
                    </GridContainer>
                </SkillsContainer>
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
    margin-bottom: 40px;
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

const CategoryTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-bottom: 50px;
`;

const CategoryTab = styled.button`
    padding: 10px 20px;
    background: ${props => props.active ? '#64ffda' : 'transparent'};
    border: 1px solid #64ffda;
    border-radius: 6px;
    color: ${props => props.active ? '#0a192f' : '#64ffda'};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${props => props.active ? '#64ffda' : 'rgba(100, 255, 218, 0.1)'};
    }
`;

const SkillsContainer = styled.div`
    position: relative;
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    gap: 20px;
`;

const CategoryTitle = styled.h3`
    font-size: 28px;
    font-weight: 600;
    color: #64ffda;
    margin: 0;
`;

const CategoryLine = styled.div`
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #64ffda, transparent);
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }
`;

const SkillCard = styled.div`
    background-color: #112240;
    border: 1px solid #1e3a5f;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 8px 30px -15px rgba(2, 12, 27, 0.7);
    animation: ${fadeIn} 0.5s ease forwards;
    animation-delay: ${props => Math.min(0.05 * props.index, 1)}s;
    opacity: 0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        border-color: #64ffda;
        box-shadow: 0 12px 40px -15px rgba(100, 255, 218, 0.15);
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

const Logo = styled.img`
    width: ${({ isLarge }) => (isLarge ? '70px' : '60px')};
    height: ${({ isLarge }) => (isLarge ? '70px' : '60px')};
    object-fit: contain;
`;

const SkillName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #e6f1ff;
`;

const Description = styled.p`
    font-size: 14px;
    color: #a8b2d1;
    margin: 12px 0 16px 0;
    line-height: 1.5;
`;

const UsageSection = styled.div`
    text-align: left;
`;

const UsageHeading = styled.h5`
    font-size: 14px;
    font-weight: 600;
    color: #64ffda;
    margin-bottom: 8px;
`;

const UsageDescription = styled.p`
    font-size: 13px;
    line-height: 1.4;
    color: #8892b0;
`;

export default Skills;