import React, { useState } from 'react';
import styled from 'styled-components';

function Skills() {
    const [indexHovered, setIndexHovered] = useState(null); // State to track the hovered index
    const skillsList = [
        {
            name: 'Python',
            logo: '/python.png',
            description: 'High-level, general-purpose programming language',
            proficiency: 'Expert',
            used: 'Employed Python in personal projects for data analysis with NumPy and Pandas.'
        },
        {
            name: 'Java',
            logo: '/java.png',
            description: 'Object-oriented, class-based programming language',
            proficiency: 'Expert',
            used: 'Gained proficiency through academic studies and projects, including developing a GUI-based application.'
        },
        {
            name: 'JavaScript',
            logo: '/js.png',
            description: 'High-level, dynamic programming language for web development',
            proficiency: 'Advanced',
            used: 'Extensively used for web development, including building websites and interactive applications.'
        },
        {
            name: 'React JS & React Native',
            logo: '/rn.png',
            description: 'Framework for building cross-platform mobile applications',
            proficiency: 'Advanced',
            used: 'Developed multiple mobile apps and a website, showcasing skills in creating responsive user interfaces.'
        },
        {
            name: 'Flutter',
            logo: '/fl.png',
            description: 'Google\'s UI toolkit for building natively compiled applications',
            proficiency: 'Advanced',
            used: 'Developed the frontend of the wAIste app utilizing the Flutter framework.'
        },
        {
            name: 'Swift',
            logo: '/swift.png',
            description: 'Language for developing iOS, macOS applications.',
            proficiency: 'Intermediate',
            used: 'Showcased expertise in Swift by building a football table game, combining programming skills with game development concepts.'
        },
        {
            name: 'SQL',
            logo: '/sql.png',
            description: 'Programming language for managing and querying relational databases',
            proficiency: 'Advanced',
            used: 'Utilized MySQL during my Rebel Internship, writing complex queries and designing database schemas.'
        },
        {
            name: 'NumPy',
            logo: '/numpy.webp',
            description: 'Python library for scientific computing',
            proficiency: 'Expert',
            used: 'Employed for numerical computing in a house price data analysis project.'
        },
        {
            name: 'Pandas',
            logo: '/pandas.png',
            description: 'Python library for data manipulation and analysis',
            proficiency: 'Expert',
            used: 'Used alongside NumPy for data manipulation and analysis in a house price project.'
        },
        {
            name: 'Git',
            logo: '/git.png',
            description: 'Distributed version control system for tracking changes in source code',
            proficiency: 'Expert',
            used: 'Proficient in using Git for version control and collaboration across projects.'
        },
        {
            name: 'Unix/Linux',
            logo: '/linux.png',
            description: 'Family of open-source, multi-tasking operating systems',
            proficiency: 'Expert',
            used: 'Proficient in Unix/Linux operating systems, including shell scripting and command-line tools.'
        },
        {
            name: 'MATLAB',
            logo: '/matlab.png',
            description: 'Numerical computing environment and programming language',
            proficiency: 'Advanced',
            used: 'Mastered MATLAB in Linear Algebra, certified in MATLAB ONRAMP, used for various numerical computing tasks.'
        },
        {
            name: 'HTML/CSS',
            logo: '/html.png',
            description: 'Language for creating and designing web pages',
            proficiency: 'Advanced',
            used: 'Proficient in HTML for building web pages and web applications.'
        },
        {
            name: 'Python Django',
            logo: '/django.png',
            description: 'Python framework for building secure web applications.',
            proficiency: 'Beginner',
            used: 'Leveraging Django for scalable web application development in my Rebel Internship.'
        },
        {
            name: 'Google Cloud Platform',
            logo: '/gc.png',
            description: 'Google\'s comprehensive cloud computing platform for various services.',
            proficiency: 'Beginner',
            used: 'Utilizing Google Cloud Platform for backend development in my Rebel Internship, including App Engine and Cloud SQL.'
        },
        {
            name: 'Figma',
            logo: '/figma.png',
            description: 'Web-based collaborative tool for UI/UX design and prototyping.',
            proficiency: 'Intermediate',
            used: 'Currently using Figma to create UI/UX designs in my Rebel Summer Internship'
        },
        {
            name: 'Flask Server',
            logo: '/flask.png',
            description: 'Python web framework for building web applications and APIs.',
            proficiency: 'Advanced',
            used: 'Used Flask for backend development in the wAIste project, implementing RESTful APIs.'
        },
        {
            name: 'Rest API',
            logo: '/Restapi.webp',
            description: 'Architectural style for building web services and data exchange.',
            proficiency: 'Advanced',
            used: 'Implemented a RESTful API for the wAIste project\'s backend'
        },
        {
            name: 'Microsoft Office',
            logo: '/office.png',
            description: 'Productivity software for documents, spreadsheets, and presentations.',
            proficiency: 'Expert',
            used: 'Proficient in Word, Excel, and PowerPoint for document creation, data analysis, and presentations.'
        },
        {
            name: 'Scratch',
            logo: '/scratch.png',
            description: 'Visual programming language for creating interactive stories, games.',
            proficiency: 'Expert',
            used: 'Used in APCSP to develop interactive games and projects through drag-and-drop programming.'
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

    const ItemContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
    `;

    const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, auto);
        grid-gap: 20px;
        padding-top: 60px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `;

    const ItemCard = styled.div`
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
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

    return (
        <SectionContainer>
            <Heading>Skills</Heading>
            <GridContainer>
                {skillsList.map((skill, index) => (
                    <ItemCard key={index}>
                        <ItemContainer>
                            <LogoContainer>
                                <Logo
                                    src={skill.logo}
                                    alt={skill.name}
                                    isLarge={
                                        skill.name === 'NumPy' ||
                                        skill.name === 'MATLAB' ||
                                        skill.name === 'Google Cloud Platform' ||
                                        skill.name === 'Swift' ||
                                        skill.name === 'SQL'
                                    }
                                />
                            </LogoContainer>
                            <SkillName>{skill.name}</SkillName>
                            <Proficiency>Proficiency: {skill.proficiency}</Proficiency>
                            <Description>{skill.description}</Description>
                        </ItemContainer>
                        <UsedDescription>{skill.used}</UsedDescription>
                    </ItemCard>
                ))}
            </GridContainer>
        </SectionContainer>
    );
}

export default Skills;
