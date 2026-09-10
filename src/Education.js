import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';

const coursework = [
    'CMSC 131 · OOP I',
    'CMSC 132 · OOP II',
    'CMSC 216 · Computer Systems',
    'CMSC 250 · Discrete Structures',
    'CMSC 330 · Programming Languages',
    'CMSC 351 · Algorithms',
    'MATH 141 · Calculus II',
    'MATH 240 · Linear Algebra',
    'STAT 400 · Probability & Statistics',
    'BMIN 355 · Marketing',
    'BMIN 395 · Management',
];

const involvement = [
    { name: 'App Dev Club', desc: 'Alpha Intelligence Capital project' },
    { name: 'Apex Quant', desc: 'Quantitative finance club' },
    { name: 'Competitive Programming', desc: 'Algorithm competitions' },
    { name: 'Google Developer @ UMD', desc: 'Technical workshops and projects' },
    { name: 'AI/ML Club', desc: 'Applied AI and ML projects' },
    { name: 'Club Tennis', desc: 'Recreational and competitive tennis' },
];

const apCourses = [
    'AP Computer Science A', 'AP Computer Science Principles', 'AP Calculus AB',
    'AP Statistics', 'AP Physics 1', 'AP Biology', 'AP Environmental Science',
    'AP Macroeconomics', 'AP Microeconomics', 'AP Psychology',
];

const hsActivities = [
    { name: 'Varsity Tennis — 1st Singles', detail: 'Captain · NJAC American Division Second Team · Rookie of the Year · Team MVP · Morris County semifinalist' },
    { name: 'CS Honor Society', detail: 'Qualified for AFA CyberPatriot Nationals · tutoring and volunteering' },
    { name: 'Speech & Debate', detail: 'Informative Speech · 47th Annual Harvard National Forensics Tournament' },
    { name: 'Math & Science Honor Societies', detail: 'Tutoring · two science-fair research projects' },
    { name: 'Chess Club — Vice President', detail: 'Social & outreach coordinator' },
];

function Education() {
    const [hsOpen, setHsOpen] = useState(false);

    return (
        <Section>
            <Wrapper>
                <SectionHeading index="04" title="Education" />

                <Spread
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <SchoolRow>
                        <div>
                            <School>University of Maryland</School>
                            <Degree>
                                B.S. Computer Science <DegreeSoft>— Data Science specialization</DegreeSoft>
                            </Degree>
                            <Degree>
                                <DegreeSoft>Minors in Mathematics & Business</DegreeSoft>
                            </Degree>
                        </div>
                        <Grad>Class of 2027</Grad>
                    </SchoolRow>

                    <SubLabel>Coursework</SubLabel>
                    <Chips>
                        {coursework.map((c) => (
                            <Chip key={c}>{c}</Chip>
                        ))}
                    </Chips>

                    <SubLabel>On campus</SubLabel>
                    <Clubs>
                        {involvement.map((club) => (
                            <Club key={club.name}>
                                <ClubName>{club.name}</ClubName>
                                <ClubDesc>{club.desc}</ClubDesc>
                            </Club>
                        ))}
                    </Clubs>
                </Spread>

                <HsRow>
                    <HsButton onClick={() => setHsOpen((v) => !v)} aria-expanded={hsOpen}>
                        <HsName $open={hsOpen}>Randolph High School</HsName>
                        <HsDate>class of 2023</HsDate>
                        <Plus $open={hsOpen} aria-hidden>+</Plus>
                    </HsButton>
                    <AnimatePresence initial={false}>
                        {hsOpen && (
                            <HsDetails
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <HsInner>
                                    <SubLabel>AP coursework</SubLabel>
                                    <Chips>
                                        {apCourses.map((c) => (
                                            <Chip key={c}>{c}</Chip>
                                        ))}
                                    </Chips>

                                    <SubLabel>Activities</SubLabel>
                                    <Activities>
                                        {hsActivities.map((a) => (
                                            <Activity key={a.name}>
                                                <ActivityName>{a.name}</ActivityName>
                                                <ActivityDetail>{a.detail}</ActivityDetail>
                                            </Activity>
                                        ))}
                                    </Activities>
                                </HsInner>
                            </HsDetails>
                        )}
                    </AnimatePresence>
                </HsRow>
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

const Spread = styled(motion.div)``;

const SchoolRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    margin-bottom: 44px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const School = styled.h3`
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: clamp(30px, 4.6vw, 48px);
    line-height: 1.08;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.color.ink};
    margin: 0 0 12px;
`;

const Degree = styled.div`
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.inkSoft};
`;

const DegreeSoft = styled.span`
    color: ${({ theme }) => theme.color.muted};
`;

const Grad = styled.div`
    font-size: 14.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.muted};
    white-space: nowrap;
`;

const SubLabel = styled.div`
    font-family: ${({ theme }) => theme.font.display};
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.color.ink};
    margin: 36px 0 16px;
`;

const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Chip = styled.span`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.color.inkSoft};
    background: ${({ theme }) => theme.color.bgInset};
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 6px;
    padding: 6px 12px;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.color.lineStrong};
        color: ${({ theme }) => theme.color.ink};
    }
`;

const Clubs = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px 32px;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Club = styled.div``;

const ClubName = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.inkSoft};
    margin-bottom: 3px;
`;

const ClubDesc = styled.div`
    font-size: 13.5px;
    color: ${({ theme }) => theme.color.muted};
`;

const HsRow = styled.div`
    margin-top: 56px;
    border-top: 1px solid ${({ theme }) => theme.color.line};
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

const HsButton = styled.button`
    display: grid;
    grid-template-columns: 1fr auto 40px;
    align-items: baseline;
    gap: 20px;
    width: 100%;
    padding: 22px 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
`;

const HsName = styled.span`
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: 19px;
    letter-spacing: -0.01em;
    color: ${({ $open, theme }) => ($open ? theme.color.ink : theme.color.inkSoft)};
    transition: color 0.25s ease;

    ${HsButton}:hover & { color: ${({ theme }) => theme.color.ink}; }
`;

const HsDate = styled.span`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.color.muted};

    @media (max-width: 600px) { display: none; }
`;

const Plus = styled.span`
    justify-self: end;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 19px;
    font-weight: 300;
    line-height: 1;
    color: ${({ $open, theme }) => ($open ? theme.color.accent : theme.color.muted)};
    transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
    transition: transform 0.35s ease, color 0.3s ease;
`;

const HsDetails = styled(motion.div)`
    overflow: hidden;
`;

const HsInner = styled.div`
    padding-bottom: 30px;

    ${SubLabel}:first-child { margin-top: 0; }
`;

const Activities = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const Activity = styled.div``;

const ActivityName = styled.div`
    font-size: 14.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.inkSoft};
    margin-bottom: 2px;
`;

const ActivityDetail = styled.div`
    font-size: 13px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.muted};
`;

export default Education;
