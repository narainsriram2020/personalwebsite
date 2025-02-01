import React from 'react';
import styled from 'styled-components';

function Skills() {
    const skillsList = [
        {
            name: 'Python',
            logo: '/python.png',
            description: 'High-level, general-purpose programming language',
            proficiency: 'Expert',
            used: 'Employed Python in personal projects for data analysis with NumPy and Pandas'
        },
        {
            name: 'Java',
            logo: '/java.png',
            description: 'Object-oriented, class-based programming language',
            proficiency: 'Expert',
            used: 'Gained proficiency through academic studies and projects, including developing a GUI-based application'
        },
        {
            name: 'C',
            logo: '/c.png',
            description: 'Low-level, powerful programming language for system and application development',
            proficiency: 'Expert',
            used: 'Utilized C to complete multiple school projects'
        },
        {
            name: 'x86-64 Assembly',
            logo: '/x86(2).png',
            description: 'Low-level language for CPU instruction and memory control',
            proficiency: 'Expert',
            used: 'Utilized x86-64 assembly to complete multiple school projects'
        },
        {
            name: 'JavaScript',
            logo: '/js.png',
            description: 'High-level, dynamic programming language for web development',
            proficiency: 'Expert',
            used: 'Extensively used for web development, including building websites and interactive applications'
        },
        {
            name: 'React JS & React Native',
            logo: '/rn.png',
            description: 'Framework for building cross-platform mobile applications',
            proficiency: 'Expert',
            used: 'Developed multiple mobile apps and a website, showcasing skills in creating responsive user interfaces'
        },
        {
            name: 'Flutter',
            logo: '/fl.png',
            description: 'Google\'s UI toolkit for building natively compiled applications',
            proficiency: 'Advanced',
            used: 'Developed the frontend of the wAIste app utilizing the Flutter framework'
        },
        {
            name: 'Next.js',
            logo: '/next-js.png',
            description: 'React framework for building fast, server-rendered web applications',
            proficiency: 'Advanced',
            used: 'Utilized Next.js during my internship at Chapter One'
        },
        {
            name: 'Swift',
            logo: '/swift.png',
            description: 'Language for developing iOS, macOS applications',
            proficiency: 'Intermediate',
            used: 'Showcased expertise in Swift by building a football table game, combining programming skills with game development concepts'
        },
        {
            name: 'SQL',
            logo: '/sql.png',
            description: 'Programming language for managing and querying relational databases',
            proficiency: 'Advanced',
            used: 'Utilized MySQL during my Rebel Internship, writing complex queries and designing database schemas'
        },
        {
            name: 'NumPy',
            logo: '/numpy.webp',
            description: 'Python library for scientific computing',
            proficiency: 'Advanced',
            used: 'Employed for numerical computing in a house price data analysis project'
        },
        {
            name: 'Pandas',
            logo: '/pandas.png',
            description: 'Python library for data manipulation and analysis',
            proficiency: 'Advanced',
            used: 'Used alongside NumPy for data manipulation and analysis in a house price project'
        },
        {
            name: 'Git',
            logo: '/git.png',
            description: 'Distributed version control system for tracking changes in source code',
            proficiency: 'Expert',
            used: 'Proficient in using Git for version control and collaboration across projects'
        },
        {
            name: 'Unix/Linux',
            logo: '/linux.png',
            description: 'Family of open-source, multi-tasking operating systems',
            proficiency: 'Expert',
            used: 'Proficient in Unix/Linux operating systems, including shell scripting and command-line tools'
        },
        {
            name: 'MATLAB',
            logo: '/matlab.png',
            description: 'Numerical computing environment and programming language',
            proficiency: 'Advanced',
            used: 'Mastered MATLAB in Linear Algebra, certified in MATLAB ONRAMP, used for various numerical computing tasks'
        },
        {
            name: 'HTML/CSS',
            logo: '/html.png',
            description: 'Language for creating and designing web pages',
            proficiency: 'Advanced',
            used: 'Proficient in HTML for building web pages and web applications'
        },
        {
            name: 'Google Cloud Platform',
            logo: '/gc.png',
            description: 'Google\'s comprehensive cloud computing platform for various services',
            proficiency: 'Intermediate',
            used: 'Utilized Google Cloud Platform for backend development in my rebel internship, including App Engine and Cloud SQL'
        },
        {
            name: 'Flask',
            logo: '/flask.png',
            description: 'Python web framework for building web applications and APIs',
            proficiency: 'Intermediate',
            used: 'Used Flask for backend development in the wAIste project, implementing RESTful APIs'
        },
        {
            name: 'Figma',
            logo: '/figma.png',
            description: 'Web-based collaborative tool for UI/UX design and prototyping',
            proficiency: 'Intermediate',
            used: 'Used Figma to create UI/UX designs during my rebel summer internship'
        },
        {
            name: 'Microsoft Office',
            logo: '/office.png',
            description: 'Productivity software for documents, spreadsheets, and presentations',
            proficiency: 'Expert',
            used: 'Proficient in Word, Excel, and PowerPoint for document creation, data analysis, and presentations'
        },
    ];

    const SectionContainer = styled.div`
        padding: 40px;
        background-color: #6bbfd1;
        font-family: Arial, sans-serif;
    `;

    const Heading = styled.h2`
        font-size: 40px;
        font-weight: bold;
        margin-bottom: -20px;
        margin-top: 50px;
        color: #fff;
        text-align: center;
    `;

    const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, auto);
        gap: 20px;
        padding-top: 60px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `;

    const ItemCard = styled.div`
        background-color: #fff;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        color: #333;

        /* Subtle parallax effect */
        &:hover {
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
            transform: translateY(-10px);
        }

        /* Parallax effect on content */
        & p {
            transition: transform 0.3s ease;
        }

        &:hover p {
            transform: translateY(-5px);
        }
    `;

    const Logo = styled.img`
        width: ${({ isLarge }) => (isLarge ? '100px' : '50px')};
        margin-bottom: 10px;
    `;

    const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        margin-bottom: 0px;
    `;

    const SkillName = styled.p`
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    `;

    const Proficiency = styled.p`
        font-size: 14px;
        color: #666;
        margin-bottom: 5px;
    `;

    const Description = styled.p`
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
    `;

    const UsedDescription = styled.p`
        font-size: 12px;
        color: #999;
    `;

    // Rendering Skills
    return (
        <SectionContainer>
            <Heading>Skills</Heading>
            <GridContainer>
                {skillsList.map((skill, index) => {
                    // Guard clause to ensure skill object is valid
                    if (!skill.name || !skill.logo || !skill.description) return null;

                    return (
                        <ItemCard key={index}>
                            <LogoContainer>
                                <Logo
                                    src={skill.logo}
                                    alt={skill.name}
                                    isLarge={
                                        ['NumPy', 'MATLAB', 'Google Cloud Platform', 'Swift', 'SQL'].includes(skill.name)
                                    }
                                />
                            </LogoContainer>
                            <SkillName>{skill.name}</SkillName>
                            <Proficiency>Proficiency: {skill.proficiency}</Proficiency>
                            <Description>{skill.description}</Description>
                            <UsedDescription>{skill.used}</UsedDescription>
                        </ItemCard>
                    );
                })}
            </GridContainer>
        </SectionContainer>
    );
}

export default Skills;
