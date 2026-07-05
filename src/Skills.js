import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';

const skillCategories = [
    {
        label: 'Programming Languages',
        skills: [
            { name: 'Python', logo: '/python.png', used: 'Data analysis, ML research pipelines, and backend work across internships and projects' },
            { name: 'Java', logo: '/java.png', used: 'Object-oriented coursework and GUI application development' },
            { name: 'JavaScript', logo: '/js.png', used: 'Web development across internships — React frontends and Node tooling' },
            { name: 'C', logo: '/c.png', used: 'Systems programming coursework — memory management and low-level projects' },
            { name: 'Swift', logo: '/swift.png', used: 'Built a football table simulator and a Cisco hackathon iOS app' },
            { name: 'Rust', logo: '/rust.png', used: 'Systems projects in CMSC 330 — safety and concurrency' },
            { name: 'OCaml', logo: '/ocaml.png', used: 'Functional programming and interpreters in CMSC 330' },
            { name: 'x86-64 Assembly', logo: '/x86(2).png', used: 'CPU-level programming in computer systems coursework' },
        ],
    },
    {
        label: 'Web & Mobile',
        skills: [
            { name: 'React / React Native', logo: '/rn.png', used: 'This site, weRebel internship interfaces, and multiple mobile apps' },
            { name: 'Next.js', logo: '/next-js.png', used: 'Automated emailing and calling systems at Chapter One' },
            { name: 'Flutter', logo: '/fl.png', used: 'Frontend of the wAIste waste-classification app' },
            { name: 'Flask', logo: '/flask.png', used: 'RESTful backend and AI inference server for wAIste' },
            { name: 'Django', logo: '/django.png', used: 'Scalable backend services during my weRebel internship' },
            { name: 'HTML/CSS', logo: '/html.png', used: 'Everything on the web I have ever shipped' },
        ],
    },
    {
        label: 'Data & ML',
        skills: [
            { name: 'NumPy', logo: '/numpy.webp', used: 'Numerical computing in quant strategies and ML research' },
            { name: 'Pandas', logo: '/pandas.png', used: 'Dataset construction and analysis at Apex Quant and in research' },
            { name: 'SQL', logo: '/sql.png', used: 'Complex queries and schema design during my weRebel internship' },
            { name: 'MATLAB', logo: '/matlab.png', used: 'Linear algebra coursework, ONRAMP certified' },
        ],
    },
    {
        label: 'Cloud & Enterprise',
        skills: [
            { name: 'Google Cloud', logo: '/gc.png', used: 'App Engine and Cloud SQL backends at weRebel' },
            { name: 'Salesforce', logo: '/salesforce.png', used: 'CRM development and Google Agent Assist integration at Humana' },
            { name: 'Apex', logo: '/apex.png', used: 'DML optimization serving 2M+ daily users at Humana' },
            { name: 'Genesys', logo: '/genesys.jpg', used: 'Call-center automation and real-time support at Humana' },
            { name: 'MuleSoft', logo: '/mulesoft.png', used: 'API and backend system integration at Humana' },
        ],
    },
    {
        label: 'Databases & Tools',
        skills: [
            { name: 'MongoDB', logo: '/mongodb.svg', used: 'Primary database across multiple projects, including BizCamp' },
            { name: 'Firebase', logo: '/firebase.png', used: 'Auth, Firestore, and real-time sync in app projects' },
            { name: 'Git', logo: '/git.png', used: 'Version control on every project and team I have worked with' },
            { name: 'Unix/Linux', logo: '/linux.png', used: 'Shell scripting and command-line tooling, daily driver' },
            { name: 'Figma', logo: '/figma.png', used: 'UI/UX design during my weRebel internship' },
        ],
    },
];

function CategoryBlock({ label, skills }) {
    const [active, setActive] = useState(0);

    return (
        <Block
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
        >
            <BlockLabel>{label}</BlockLabel>
            <BlockBody>
                <Tokens>
                    {skills.map((skill, i) => (
                        <Token
                            key={skill.name}
                            $active={active === i}
                            $dimmed={active !== i}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => setActive(i)}
                        >
                            <TokenLogo src={skill.logo} alt="" aria-hidden loading="lazy" />
                            {skill.name}
                        </Token>
                    ))}
                </Tokens>
                <DetailLine>{skills[active].used}</DetailLine>
            </BlockBody>
        </Block>
    );
}

function Skills() {
    return (
        <Section>
            <Wrapper>
                <SectionHeading index="02" title="Skills" />
                <List>
                    {skillCategories.map((cat) => (
                        <CategoryBlock key={cat.label} label={cat.label} skills={cat.skills} />
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
}

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

const Block = styled(motion.div)`
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 32px;
    padding: 38px 0;
    border-top: 1px solid ${({ theme }) => theme.color.line};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 30px 0;
    }
`;

const BlockLabel = styled.div`
    font-family: ${({ theme }) => theme.font.display};
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.color.ink};
    padding-top: 6px;
`;

const BlockBody = styled.div``;

const Tokens = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 12px;
`;

const Token = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: clamp(18px, 2.2vw, 24px);
    letter-spacing: -0.01em;
    line-height: 1.25;
    color: ${({ $active, $dimmed, theme }) =>
        $active ? theme.color.ink : $dimmed ? theme.color.muted : theme.color.inkSoft};
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    transition: color 0.25s ease, opacity 0.25s ease;
    opacity: ${({ $dimmed }) => ($dimmed ? 0.6 : 1)};

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        height: 1px;
        width: ${({ $active }) => ($active ? '100%' : '0')};
        background: ${({ theme }) => theme.color.accent};
        transition: width 0.3s ease;
    }
`;

const TokenLogo = styled.img`
    width: 22px;
    height: 22px;
    object-fit: contain;
    flex: none;
`;

const DetailLine = styled.div`
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.muted};
    margin-top: 18px;
    min-height: 22px;
`;

export default Skills;
