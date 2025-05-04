import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import rhslogo from './educationimages/rhslogo.jpeg';
import umdlogo from './educationimages/umdlogo1.webp';

function Education() {
    const [activePanel, setActivePanel] = useState('umd');

    const handlePanelChange = (panelId) => {
        setActivePanel(panelId);
    };

    return (
        <SectionContainer>
            <ContentWrapper>
                <Heading>Education</Heading>

                <EducationContainer>
                    <TabsContainer>
                        <TabButton
                            active={activePanel === 'umd'}
                            onClick={() => handlePanelChange('umd')}
                        >
                            University of Maryland
                        </TabButton>
                        <TabButton
                            active={activePanel === 'rhs'}
                            onClick={() => handlePanelChange('rhs')}
                        >
                            Randolph High School
                        </TabButton>
                    </TabsContainer>

                    <TabContent active={activePanel === 'umd'}>
                        <EducationCard>
                            <SchoolInfoContainer>
                                <LogoContainer>
                                    <SchoolLogo src={umdlogo} alt="University of Maryland – College Park" />
                                </LogoContainer>
                                <SchoolInfo>
                                    <SchoolName>University of Maryland – College Park</SchoolName>
                                    <Degree>B.S in Computer Science (Specialization in Data Science)</Degree>
                                    <GradDate>Expected Graduation: December 2026</GradDate>
                                    <Detail>Pursuing minor in Math and Business</Detail>
                                </SchoolInfo>
                            </SchoolInfoContainer>

                            <DetailSection>
                                <SectionTitle>Relevant Coursework</SectionTitle>
                                <CourseGrid>
                                    <CourseItem>CMSC 131: Object-Oriented Programming I</CourseItem>
                                    <CourseItem>CMSC 132: Object-Oriented Programming II</CourseItem>
                                    <CourseItem>CMSC 216: Introduction to Computer Systems</CourseItem>
                                    <CourseItem>CMSC 250: Discrete Structures</CourseItem>
                                    <CourseItem>MATH 141: Calculus II</CourseItem>
                                    <CourseItem>MATH 240: Linear Algebra</CourseItem>
                                    <CourseItem>STAT 400: Applied Probability and Statistics I</CourseItem>
                                    <CourseItem>CMSC 330: Organization of Programming Languages</CourseItem>
                                    <CourseItem>CMSC 351: Algorithms</CourseItem>
                                    <CourseItem>BMIN 355: Foundations of Marketing</CourseItem>
                                    <CourseItem>BMIN 395: Foundations of Management</CourseItem>
                                </CourseGrid>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Campus Involvement</SectionTitle>
                                <ClubGrid>
                                    <ClubItem>
                                        <ClubName>Apex Quant</ClubName>
                                        <ClubDescription>Quantitative Finance Club</ClubDescription>
                                    </ClubItem>
                                    <ClubItem>
                                        <ClubName>Competitive Programming</ClubName>
                                        <ClubDescription>Algorithm competitions and coding challenges</ClubDescription>
                                    </ClubItem>
                                    <ClubItem>
                                        <ClubName>Google Developer at UMD</ClubName>
                                        <ClubDescription>Technical workshops and projects</ClubDescription>
                                    </ClubItem>
                                    <ClubItem>
                                        <ClubName>AI/ML</ClubName>
                                        <ClubDescription>Artificial Intelligence and Machine Learning projects</ClubDescription>
                                    </ClubItem>
                                    <ClubItem>
                                        <ClubName>Club Tennis</ClubName>
                                        <ClubDescription>Recreational and competitive tennis</ClubDescription>
                                    </ClubItem>
                                </ClubGrid>
                            </DetailSection>
                        </EducationCard>
                    </TabContent>

                    <TabContent active={activePanel === 'rhs'}>
                        <EducationCard>
                            <SchoolInfoContainer>
                                <LogoContainer>
                                    <SchoolLogo src={rhslogo} alt="Randolph High School" />
                                </LogoContainer>
                                <SchoolInfo>
                                    <SchoolName>Randolph High School</SchoolName>
                                    <GradDate>Graduated: June 2023</GradDate>
                                </SchoolInfo>
                            </SchoolInfoContainer>

                            <DetailSection>
                                <SectionTitle>Advanced Placement Courses</SectionTitle>
                                <CourseGrid>
                                    <CourseItem>AP Biology</CourseItem>
                                    <CourseItem>AP Computer Science A</CourseItem>
                                    <CourseItem>AP Calculus AB</CourseItem>
                                    <CourseItem>AP Physics 1</CourseItem>
                                    <CourseItem>AP Statistics</CourseItem>
                                    <CourseItem>AP Macroeconomics</CourseItem>
                                    <CourseItem>AP Microeconomics</CourseItem>
                                    <CourseItem>AP Psychology</CourseItem>
                                    <CourseItem>AP Environmental Science</CourseItem>
                                    <CourseItem>AP Computer Science Principles</CourseItem>
                                </CourseGrid>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Extracurricular Activities</SectionTitle>
                                <AccordionContainer>
                                    <ActivityAccordion title="Tennis: Varsity 1st Singles">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Varsity Captain</AchievementItem>
                                                <AchievementItem>NJAC American Division Second Team</AchievementItem>
                                                <AchievementItem>RHS Boys Tennis Rookie of the Year</AchievementItem>
                                                <AchievementItem>Team MVP</AchievementItem>
                                                <AchievementItem>Morris County Tennis Tournament-Semifinalist</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>

                                    <ActivityAccordion title="Computer Science Honor Society">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Qualified for AFA CyberPatriot Nationals</AchievementItem>
                                                <AchievementItem>Completed tutoring and other volunteering activities</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>

                                    <ActivityAccordion title="Speech and Debate">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Specialized in Informative Speech</AchievementItem>
                                                <AchievementItem>Participated in 47th Annual Harvard National Forensics Tournament</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>

                                    <ActivityAccordion title="Math National Honor Society">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Completed math related tutoring and other volunteering activities</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>

                                    <ActivityAccordion title="Science National Honor Society">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Completed science related tutoring and other volunteering activities</AchievementItem>
                                                <AchievementItem>Competed in two science fairs researching ideas of plant growth and time relativity</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>

                                    <ActivityAccordion title="Chess Club - Vice President">
                                        <AccordionContent>
                                            <AchievementList>
                                                <AchievementItem>Social and Outreach Coordinator</AchievementItem>
                                                <AchievementItem>Managed Instagram and Youtube accounts</AchievementItem>
                                            </AchievementList>
                                        </AccordionContent>
                                    </ActivityAccordion>
                                </AccordionContainer>
                            </DetailSection>
                        </EducationCard>
                    </TabContent>
                </EducationContainer>
            </ContentWrapper>
        </SectionContainer>
    );
}

// Accordion component for activities
const ActivityAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionWrapper>
            <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
                <AccordionTitle>{title}</AccordionTitle>
                <AccordionIcon isOpen={isOpen}>+</AccordionIcon>
            </AccordionHeader>
            <AccordionBody isOpen={isOpen}>
                {children}
            </AccordionBody>
        </AccordionWrapper>
    );
};

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

const slideDown = keyframes`
  from {
    opacity: 0;
    height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    height: auto;
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

const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
`;

const TabButton = styled.button`
    padding: 10px 20px;
    background-color: ${props => props.active ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
    color: ${props => props.active ? '#64ffda' : '#8892b0'};
    border: none;
    border-bottom: 2px solid ${props => props.active ? '#64ffda' : 'transparent'};
    cursor: pointer;
    font-size: 18px;
    font-weight: ${props => props.active ? '600' : '400'};
    transition: all 0.3s ease;
    
    &:hover {
        color: #64ffda;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`;

const TabContent = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    animation: ${fadeIn} 0.5s ease-out;
`;

const EducationCard = styled.div`
    background-color: #112240;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    border: 1px solid #1e3a5f;
    padding: 30px;
`;

const SchoolInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const LogoContainer = styled.div`
    margin-right: 30px;
    
    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

const SchoolLogo = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #64ffda;
`;

const SchoolInfo = styled.div`
    flex: 1;
`;

const SchoolName = styled.h3`
    font-size: 26px;
    font-weight: 700;
    color: #e6f1ff;
    margin-bottom: 10px;
`;

const Degree = styled.p`
    font-size: 20px;
    color: #a8b2d1;
    margin-bottom: 10px;
`;

const GradDate = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #64ffda;
    margin-bottom: 15px;
`;

const Detail = styled.p`
    font-size: 16px;
    color: #8892b0;
`;

const DetailSection = styled.div`
    margin-bottom: 40px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const SectionTitle = styled.h4`
    font-size: 20px;
    font-weight: 600;
    color: #e6f1ff;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #1e3a5f;
`;

const CourseGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CourseItem = styled.div`
    padding: 12px 15px;
    background-color: rgba(100, 255, 218, 0.05);
    border-radius: 5px;
    color: #a8b2d1;
    font-size: 16px;
    transition: transform 0.2s ease, background-color 0.2s ease;
    
    &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-3px);
    }
`;

const ClubGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ClubItem = styled.div`
    padding: 20px;
    background-color: rgba(100, 255, 218, 0.05);
    border-radius: 5px;
    transition: transform 0.2s ease, background-color 0.2s ease;
    
    &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-3px);
    }
`;

const ClubName = styled.h5`
    font-size: 18px;
    font-weight: 600;
    color: #64ffda;
    margin-bottom: 8px;
`;

const ClubDescription = styled.p`
    font-size: 14px;
    color: #8892b0;
`;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const AccordionWrapper = styled.div`
    border: 1px solid #1e3a5f;
    border-radius: 5px;
    background-color: rgba(100, 255, 218, 0.03);
    overflow: hidden;
`;

const AccordionHeader = styled.div`
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
        background-color: rgba(100, 255, 218, 0.08);
    }
`;

const AccordionTitle = styled.h5`
    font-size: 18px;
    font-weight: 500;
    color: #e6f1ff;
`;

const AccordionIcon = styled.span`
    color: #64ffda;
    font-size: 20px;
    font-weight: bold;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

const AccordionBody = styled.div`
    max-height: ${props => props.isOpen ? '500px' : '0'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.3s ease;
    animation: ${props => props.isOpen ? slideDown : 'none'} 0.3s ease;
`;

const AccordionContent = styled.div`
    padding: 0 20px 20px;
`;

const AchievementList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const AchievementItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: #a8b2d1;
    font-size: 16px;
    
    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #64ffda;
    }
`;

export default Education;
