import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import ciscoLogo from './experienceimages/cisco.png';
import elLogo from './experienceimages/el2.png';
import pickleballLogo from './experienceimages/pickleball.png';
import rpr from './experienceimages/randolphpr.jpeg';
import pythonIcon from './experienceimages/py.png';
import tennisBallIcon from './experienceimages/tennis.png';
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
import { useState } from 'react';

const experiences = [
    {
        company: 'Apex Quant',
        logo: apex,
        title: 'Junior Quantitative Analyst',
        date: 'October 2024 ~ Present',
        description: [
            'Building a custom data loader using Python to create an in-house dataset, enhancing data accessibility for projects.',
            'Designing quantitative trading strategies to identify and optimize the most effective approach for the club’s portfolio.',
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
        company: 'NJ United Pickleball Academy',
        logo: pickleballLogo,
        title: 'Pickleball Coach and Program Coordinator',
        date: 'June 2024 - August 2024',
        description: [
            'Coached and developed pickleball programs for youth, teens, and adults, delivering classes, private lessons, and workshops.',
            'Collaborated on promotional events and social media campaigns to increase engagement and program participation.',
        ],
        icons: [tennisBallIcon],
    },
    {
        company: 'Eye Level',
        logo: elLogo,
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
    {
        company: 'Randolph Department of Parks and Recreation',
        logo: rpr,
        title: 'Tennis Instructor',
        date: 'July 2020 - August 2023',
        description: [
            'Senior coach for 4 years, teaching kids ages 4-18 the fundamentals of tennis.',
            'Promoted to Head Coach and created lesson plans.',
        ],
        icons: [tennisBallIcon],
    },
];

const Experience = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Experience</h2>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={cardStyle}
                        contentArrowStyle={{ borderRight: '7px solid #ddd' }}
                        iconStyle={{ display: 'none' }}
                        date={<CustomDate date={experience.date} />}
                    >
                        <div style={logoContainerStyle}>
                            <img src={experience.logo} alt={`${experience.company} logo`} style={logoStyle} />
                        </div>
                        <h3 style={jobTitleStyle}>{experience.title}</h3>
                        <h4 style={companyNameStyle}>{experience.company}</h4>
                        <ul style={jobDescriptionStyle}>
                            {experience.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                        <div style={iconsContainerStyle}>
                            {experience.icons.map((icon, idx) => (
                                <img key={idx} src={icon} alt={`Skill ${idx}`} style={skillIconStyle} />
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

// Custom Date Component for styling
const CustomDate = ({ date }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const dateTextStyle = {
        fontSize: '28px',
        color: '#ffffff',
        fontWeight: 'bold',
        textShadow: isHovered
            ? '0 0 5px #60a3d9, 0 0 15px #60a3d9, 0 0 25px #60a3d9' // Soft blue glow
            : '2px 2px 4px rgba(0, 0, 0, 0.3)',
        transition: 'text-shadow 0.4s ease, color 0.3s ease', // Smooth transition
    };

    return (
        <div style={customDateContainerStyle}>
            <FaCalendarAlt style={calendarIconStyle} />
            <span
                style={dateTextStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {date}
            </span>
        </div>
    );
};

const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#87CEEB', // Light blue background
};

const headingStyle = {
    color: '#f7f5f5', // White color for the header
    textAlign: 'center',
    fontSize: '40px',
    marginBottom: '30px',
};

const cardStyle = {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
};

const logoContainerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
};

const logoStyle = {
    maxWidth: '100px',
    maxHeight: '100px',
    objectFit: 'contain',
};

const jobTitleStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
};

const companyNameStyle = {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
};

const jobDescriptionStyle = {
    fontSize: '16px',
    color: '#444',
    listStyleType: 'disc',
    paddingLeft: '20px',
};

const iconsContainerStyle = {
    display: 'flex',
    marginTop: '10px',
};

const skillIconStyle = {
    width: '30px',
    height: '30px',
    marginRight: '10px',
};

// Styles for the custom date container
const customDateContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#f7f5f5',  // Keeping the text color consistent
    fontWeight: 'bold',
    height: '50px',
    marginLeft: '15px',
    padding: '0 10px',
};

// Style for the calendar icon with a subtle rotation animation
const calendarIconStyle = {
    marginRight: '8px',
    fontSize: '24px',  // Icon size
    animation: 'rotate 5s linear infinite',  // Rotation animation
};

export default Experience;
