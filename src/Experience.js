import React from 'react';
import ciscoLogo from './experienceimages/cisco.png';
import elLogo from './experienceimages/el2.png';
import blLogo from './experienceimages/pickleball.png';
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

function Experience() {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Experience</h2>
            <div style={experienceList}>
                {experiences.map((experience, index) => (
                    <div key={index} style={card}>
                        <div style={header}>
                            <img src={experience.logo} alt={experience.company} style={logoStyle} />
                            {experience.icons && (
                                <div style={iconsContainerStyle}>
                                    {experience.icons.map((icon, idx) => (
                                        <img key={idx} src={icon.src} alt={icon.alt} style={iconStyle} />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div style={content}>
                            <h3 style={jobTitle}>{experience.title}</h3>
                            <h4 style={companyNameStyle}>{experience.company}</h4>
                            <p style={jobDate}>{experience.date}</p>
                            <ul style={jobDescription}>
                                {experience.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const sectionStyle = {
    padding: '60px 40px 40px 40px',
    backgroundColor: '#87CEEB',
};

const experienceList = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
};

const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#fff',
    textAlign: 'center',
};

const card = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
};

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
};

const logoStyle = {
    width: '100px',
};

const iconsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const content = {
    textAlign: 'left',
    flex: 1,
};

const companyNameStyle = {
    fontSize: '20px',
    margin: '10px 0',
    color: '#3e97af',
};

const jobTitle = {
    fontSize: '30px',
    margin: '10px 0',
    color: '#333',
    textDecoration: 'underline',
    textDecorationColor: '#3e97af'
};

const jobDate = {
    fontSize: '16px',
    margin: '10px 0',
    color: '#666',
};

const jobDescription = {
    fontSize: '18px',
    color: '#666',
    textAlign: 'left',
    listStyleType: 'disc',
    paddingLeft: '20px',
    margin: 0,
};

const iconStyle = {
    width: '30px',
    height: '30px',
    marginRight: '10px',
};

const experiences = [
    {
        company: 'weRebel',
        logo: rebel2,
        title: 'Software Engineering Internship',
        date: 'May 2024 - August 2024',
        description: [
            'Collaborated with a team to design, develop, and deploy features for the Rebel Artist Platforms, ensuring a seamless user experience and robust performance.',
            'Developed user interfaces using JavaScript React Framework, creating responsive and interactive web applications.',
            'Built and maintained backend services with Python Django Framework, focusing on scalability and security.',
            'Employed Agile methodologies, participating in daily stand-ups, sprint planning, and retrospectives to ensure effective communication and continuous improvement.',
            'Worked with version control systems, primarily Git, to manage codebase changes and collaborate with other developers efficiently.',
            'Performed debugging and troubleshooting to resolve issues promptly, maintaining the stability of the platform.',
        ],
        icons: [
            { src: pythonIcon, alt: 'Python' },
            { src: djangoIcon, alt: 'Django' },
            { src: rnIcon, alt: 'React Native' },
            { src: SQLIcon, alt: 'SQL' },
            { src: figmaIcon, alt: 'Figma' },
            { src: gcIcon, alt: 'Google Cloud' },
            { src: gitIcon, alt: 'Git' },
        ]
    },
    {
        company: 'Chapter One',
        logo: chapone,
        title: 'Software Engineering Internship',
        date: 'September 2024 ~ Present',
        description: [
            'Worked alongside other team members to design, build, and refine features for the Chapter One platform.',
            'Engaged in full-stack development tasks, contributing to both client-side and server-side code',
            'Help integrate third-party APIs and services to expand the platforms capabilities',
            'Supported the maintenance and improvement of existing features, based on user feedback and performance data'
        ],
        icons: [
            { src: pythonIcon, alt: 'Python' },
            { src: djangoIcon, alt: 'Django' },
            { src: rnIcon, alt: 'React Native' },
            { src: SQLIcon, alt: 'SQL' },
            { src: figmaIcon, alt: 'Figma' },
            { src: gcIcon, alt: 'Google Cloud' },
            { src: gitIcon, alt: 'Git' },
        ]
    },
    {
        company: 'Cisco Systems',
        logo: ciscoLogo,
        title: 'Cisco Summer Internship',
        date: 'June 2022 - July 2022',
        description: [
            'Completed a rigorous program, gaining valuable insights into the field of computer science and enhancing personal skills',
            'Leveraged Python to enhance coding skills, working on diverse projects to solve complex problems and improve efficiency',
            'Developed a mobile application using Xcode, showcasing proficiency in iOS app development',
            'Collaborated with cross-functional teams to deliver innovative solutions and meet project objectives.',
            'Led a team with members from various disciplines, fostering collaboration and project success',
            'Presented technical findings to senior members and the Hackathon judging panel, translating complex concepts for a broader audience'
        ],
        icons: [
            { src: pythonIcon, alt: 'Python' },
            { src: gitIcon, alt: 'Git' },
            { src: swiftIcon, alt: 'Swift' },
            { src: figmaIcon, alt: 'Figma' }
        ]
    },
    {
        company: 'Eye Level',
        logo: elLogo,
        title: 'Marketing/Business Intern',
        date: 'July 2022 - September 2022',
        description: [
            'Led initiatives for the annual event coordination, and devised marketing strategies for two locations with 250 students',
            'Spearheaded marketing and outreach efforts for two Eye Level locations, driving student enrollment and brand visibility',
            'Developed and implemented intricate marketing strategies, achieving significant results',
        ],
        icons: [
            { src: businessIcon, alt: 'Business' }
        ]
    },
    {
        company: 'NJ United Pickleball Academy',
        logo: blLogo,
        title: 'Pickleball Coach and Program Coordinator ',
        date: 'June 2024 - August 2024',
        description: [
            'Coached and developed pickleball programs for youth, teens, and adults, delivering classes, private lessons, and workshops',
            'Collaborated on promotional events and social media campaigns to increase engagement and program participation'
        ],
        icons: [
            { src: tennisBallIcon, alt: 'Tennis Ball' }
        ]
    },
    {
        company: 'Randolph Department of Parks and Recreation',
        logo: rpr,
        title: 'Tennis Instructor',
        date: 'July 2020 - August 2023',
        description: [
            'Senior coach for 4 years and taught kids, ages ranging from 4-18 about the fundamentals of tennis',
            'Promoted to Head Coach and created lesson plans'
        ],
        icons: [
            { src: tennisBallIcon, alt: 'Tennis Ball' }
        ]
    },
];

export default Experience;
