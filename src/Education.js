import React from 'react';
import styled from 'styled-components';
import rhslogo from './educationimages/rhslogo.jpeg';
import umdlogo from './educationimages/umdlogo1.webp';

function Education() {
    return (
        <Section>
            <Heading>Education</Heading>
            <Timeline>
                <EducationItem>
                    <Image src={umdlogo} alt="University of Maryland – College Park" />
                    <Content>
                        <Institution>University of Maryland – College Park</Institution>
                        <Degree>B.S in Computer Science (Specialization in Data Science)</Degree>
                        <Date>Expected Graduation: December 2026</Date>
                        <Details>
                            <Detail>Pursuing minor in Statistics</Detail>
                            <Courses>Courses:</Courses>
                            <CourseList>
                                <Course>CMSC 131: Object-Oriented Programming I</Course>
                                <Course>CMSC 132: Object-Oriented Programming II</Course>
                                <Course>CMSC 216: Introduction to Computer Systems</Course>
                                <Course>CMSC 250: Discrete Structures</Course>
                                <Course>MATH 141: Calculus II</Course>
                                <Course>MATH 240: Linear Algebra</Course>
                                <Course>STAT 400: Applied Probability and Statistics I</Course>
                            </CourseList>
                            <Clubs>Clubs:</Clubs>
                            <ClubList>
                                <Club>Competitive Programming</Club>
                                <Club>Google Developer at UMD</Club>
                                <Club>AI/ML</Club>
                                <Club>Club Tennis</Club>
                            </ClubList>
                        </Details>
                    </Content>
                </EducationItem>
                <EducationItem>
                    <Image src={rhslogo} alt="Randolph High School" />
                    <Content>
                        <Institution>Randolph High School</Institution>
                        <Date>Graduated: June 2023</Date>
                        <Details>
                            <Courses>Courses:</Courses>
                            <CourseList>
                                <Course>AP Biology</Course>
                                <Course>AP Computer Science A</Course>
                                <Course>AP Calculus AB</Course>
                                <Course>AP Physics 1</Course>
                                <Course>AP Statistics</Course>
                                <Course>AP Macroeconomics</Course>
                                <Course>AP Microeconomics</Course>
                                <Course>AP Psychology</Course>
                                <Course>AP Environmental Science</Course>
                                <Course>AP Computer Science Principles</Course>
                            </CourseList>
                            <Clubs>Clubs:</Clubs>
                            <ClubList>
                                <Club>
                                    Tennis: Varsity 1st Singles
                                    <SubList>
                                        <SubItem>Varisty Captain</SubItem>
                                        <SubItem>NJAC American Division Second Team</SubItem>
                                        <SubItem>RHS Boys Tennis Rookie of the Year</SubItem>
                                        <SubItem>Team MVP</SubItem>
                                        <SubItem>Morris County Tennis Tournament-Semifinalist</SubItem>
                                    </SubList>
                                </Club>
                                <Club>
                                    Computer Science Honor Society
                                    <SubList>
                                        <SubItem>Qualified for AFA CyberPatriot Nationals</SubItem>
                                        <SubItem>Completed tutoring and other volunteering activites</SubItem>
                                    </SubList>
                                </Club>
                                <Club>
                                    Speech and Debate
                                    <SubList>
                                        <SubItem>Specialized in Informative Speech</SubItem>
                                        <SubItem>Participated in 47th Annual Harvard National Forensics Tournament</SubItem>
                                    </SubList>
                                </Club>
                                <Club>
                                    Math National Honor Society
                                    <SubList>
                                        <SubItem>Completed math related tutoring and other volunteering activites</SubItem>
                                    </SubList>
                                </Club>
                                <Club>
                                    Science National Honor Society
                                    <SubList>
                                        <SubItem>Completed science related tutoring and other volunteering activites</SubItem>
                                        <SubItem>Competed in two science fairs researching ideas of plant growth and time relativity</SubItem>
                                    </SubList>
                                </Club>
                                <Club>
                                    Chess Club - <ItalicText>Vice President</ItalicText>
                                    <SubList>
                                        <SubItem>Social and Outreach Coordinator</SubItem>
                                        <SubItem>Managed Instagram and Youtube accounts</SubItem>
                                    </SubList>
                                </Club>
                            </ClubList>
                        </Details>
                    </Content>
                </EducationItem>
            </Timeline>
        </Section>
    );
}

const Section = styled.div`
    padding: 60px 20px;
    background-color: #4682B4;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h2`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
    text-align: center;
`;

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        gap: 50px; /* Add gap between cards on mobile */
    }
`;

const EducationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    max-width: 800px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 600px) {
        margin: 0 10px; /* Add some margin to the left and right on mobile devices */
        width: calc(100% - 20px); /* Ensure it doesn't cover the whole width */
    }
`;

const Image = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Content = styled.div`
    width: 100%;
    text-align: center;
`;

const Institution = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const Degree = styled.p`
    font-size: 20px;
    color: #555;
    margin-bottom: 5px;
`;

const Date = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #0288d1;
    margin-bottom: 10px;
`;

const Details = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: left;
`;

const Detail = styled.li`
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
`;

const Courses = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
`;

const Clubs = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
`;

const CourseList = styled.ul`
    list-style-type: disc;
    margin: 10px 0 10px 20px;
    padding: 0;
`;

const ClubList = styled.ul`
    list-style-type: disc;
    margin: 10px 0 10px 20px;
    padding: 0;
`;

const Course = styled.li`
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
`;

const Club = styled.li`
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
`;

const SubList = styled.ul`
    list-style-type: circle;
    margin: 5px 0 5px 20px;
    padding: 0;
`;

const SubItem = styled.li`
    font-size: 14px;
    color: #777;
    margin-bottom: 3px;
`;

const ItalicText = styled.span`
    font-style: italic;
`;

export default Education;
