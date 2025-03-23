import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { GiTurtleShell } from "react-icons/gi";

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);

    const projectsList = [
        // Your existing projects array remains unchanged
        {
            id: "planetterp",
            name: '🐢 PlanetTerp Chatbot',
            tagline: "AI-powered virtual assistant for UMD students",
            overview: 'The PlanetTerp Chatbot is an AI-powered virtual assistant designed to enhance the experience of using the Planet Terp website. Planet Terp is where UMD students can access reviews and ratings of courses, professors, and grade distributions. Unlike traditional search tools, this chatbot offers a fully interactive and immersive experience, allowing students to ask questions naturally and receive detailed responses. Key features include real-time retrieval of course reviews, professor ratings, historical grade distributions, and fun facts about UMD. The chatbot also supports chat history, enabling users to maintain context across conversations, and includes a sidebar with essential UMD-related resources to assist students in navigating their academic journey effectively. With its advanced AI capabilities, the chatbot streamlines the process of finding relevant academic information, helping students make well-informed decisions about their courses and professors.',
            techDetails: 'The chatbot is developed using Python and built on Streamlit, a powerful framework for creating interactive web applications. This enables a clean and user-friendly interface, ensuring seamless interaction. The chatbot\'s AI-powered responses are made possible through the Google Gemini API, allowing it to generate context-aware, precise answers to user queries. To enhance search efficiency, the chatbot incorporates semantic search, ensuring students receive the most relevant information based on their input. A structured backend system handles query processing, and caching mechanisms are implemented to optimize response times, minimizing delays and improving user experience.',
            techStack: ['Python', 'Streamlit', 'Google Gemini API', 'Semantic Search'],
            githubLink: 'https://github.com/narainsriram2020/PlanetTerpChatBot',
            chatLink: 'https://planetterp-chat-bot.streamlit.app/',
            bgColor: '#e9f7ef', // Light green
        },
        {
            id: "waiste",
            name: 'wAIste',
            tagline: "AI-powered waste classification system",
            overview: (
                <>
                    I collaborated with{' '}
                    <StyledLink
                        href="https://www.linkedin.com/in/arav-luthra-7280ba221/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Arav Luthra
                    </StyledLink>{' '}
                    on this project. wAIste is an innovative project that utilizes AI technology to streamline waste management and recycling efforts. The platform allows users to upload images of various waste items, which are then analyzed by AI algorithms to determine the appropriate recycling category. What distinguishes wAIste is its employment of two distinct AI models: one dedicated to general waste classification, and another specialized in advanced garbage identification. In the future, we plan to further enhance wAIste by integrating additional features and expanding its capabilities. This includes improving the accuracy of AI predictions, adding support for different types of waste materials, and incorporating user feedback to enhance the user experience. We also aim to explore partnerships with recycling organizations and municipalities to scale the impact of wAIste and promote sustainable waste management on a larger scale.
                </>
            ),
            techDetails: 'The front end was developed using Flutter, a cross-platform framework for building mobile applications, allowing us to create a user-friendly interface for image uploading and result display. On the backend, we used Flask, a lightweight web framework in Python, to handle image processing and AI inference. It utilizes the Roboflow platform\'s inference SDK to integrate with machine learning models for waste categorization and garbage detection. Powered by a Flask server, wAIste facilitates seamless interaction between the front-end mobile application and the underlying AI models, delivering efficient and tailored waste management recommendations to users.',
            techStack: ['Flutter', 'Flask', 'Python', 'Roboflow', 'Machine Learning'],
            githubLink: 'https://github.com/narainsriram2020/wAIste',
            youtubeLink: 'https://www.youtube.com/watch?v=ZyRgfsvGNfk&ab_channel=AravLuthra',
            bgColor: '#e6f7f5', // Light teal
        },
        {
            id: "cisco",
            name: 'Cisco Hackathon',
            tagline: "Last-mile logistics optimization solution",
            overview: 'As a team, we participated in a Cisco-hosted hackathon, where we collectively tackled the last-mile challenge in logistics. Together, we developed an innovative application designed to optimize route planning, enhance real-time tracking capabilities, and facilitate seamless communication between delivery personnel and customers, aiming to revolutionize the final leg of the delivery process. Our solution secured 5th place among all participating groups, highlighting its effectiveness in addressing last-mile inefficiencies and showcasing our dedication to innovation in logistics technology.',
            techDetails: 'We developed the app using Xcode, which is an Integrated Development Environment (IDE) for macOS. Xcode is primarily used for developing software for Apple platforms, such as iOS and macOS. Additionally, we utilized Figma for designing the app. Figma is a web-based design tool used for collaborative interface design.',
            techStack: ['Xcode', 'Swift', 'Figma'],
            youtubeLink: 'https://www.youtube.com/watch?v=HN9LMe0GwBM&t=3s&ab_channel=NarainSriram',
            bgColor: '#eae6f7', // Light purple
        },
        {
            id: "website",
            name: 'Personal Website',
            tagline: "Digital portfolio",
            overview: 'My personal website serves as a digital reflection of who I am professionally. It\'s a virtual space where I compile and showcase my skills, past projects, diverse experiences, volunteer engagements, and educational background. Essentially, it encapsulates all the essential aspects of my professional journey, offering visitors a comprehensive insight into my capabilities and accomplishments.',
            techDetails: 'In crafting this website, I opted for React.js, a powerful JavaScript library renowned for its ability to create dynamic and interactive user interfaces. With React.js, I could design a website that presents information and engages visitors with seamless navigation and visually appealing design elements. Its flexibility allowed me to develop reusable components, ensuring consistency and efficiency across the website. Moreover, React.js facilitated easy updates, enabling me to keep the website current and reflective of my latest endeavors.',
            techStack: ['React.js', 'Styled Components', 'JavaScript', 'HTML/CSS'],
            githubLink: 'https://github.com/narainsriram2020/personalwebsite/tree/master',
            bgColor: '#f7e6e6', // Light pink
        },
        {
            id: "weather",
            name: 'Weather App',
            tagline: "Retrieve weather information for any location",
            overview: 'An app where the user can enter in the coordinates of any place in the world and the current weather, 5-day weather, radar, and other information (humidity, wind speed, etc..) will be returned. ',
            techDetails: 'The app was developed using React Native, a framework for building mobile applications using JavaScript and React. React Native allows for cross-platform development, enabling the creation of iOS and Android apps from a single codebase. The Accuweather API was integrated into the app, facilitating access to weather data through API calls. API integration involves making requests to external servers to retrieve and display information, in this case, weather data such as current conditions, forecasts, and radar images.',
            techStack: ['React Native', 'JavaScript', 'Accuweather API'],
            githubLink: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/weatherapp-narain-sriram',
            bgColor: '#e6f0f7', // Light blue
        },
        {
            id: "workout",
            name: 'Running Workout Tracker',
            tagline: "Mobile fitness tracking for runners",
            overview: 'A mobile app that allows users to track their running workouts. The app implements functionalities like starting and stopping the stopwatch, tracking user location and displaying markers on the map, calculating total distance and average speed, and navigating to the final screen to display run statistics.',
            techDetails: 'The app is built using React Native, a framework for building cross-platform mobile applications with JavaScript and React. It utilizes the react-native-maps library for displaying maps and tracking user location, and integrates with the expo-location library to access device location services.',
            techStack: ['React Native', 'JavaScript', 'react-native-maps', 'expo-location'],
            githubLink: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/mapapp---sriram',
            bgColor: '#f7f6e6', // Light yellow
        },
        {
            id: "football",
            name: 'Football Table Simulator',
            tagline: "Interactive football simulator",
            overview: 'I developed an app enabling users to simulate football (soccer) match outcomes by selecting their preferred leagues. This endeavor showcases my skills in app development and passion for coding, combining technology with sports simulation.',
            techDetails: 'The app was developed using Swift, Apple\'s programming language for iOS, macOS, watchOS, and tvOS app development. Swift is known for its performance, safety features, and ease of use, making it ideal for building robust and efficient iOS applications. The user-friendly interface was crafted using Swift\'s UIKit framework, which provides a set of components and tools for building interactive user interfaces on iOS devices. Additionally, advanced algorithms were implemented in Swift to ensure accurate match simulations, leveraging the language\'s versatility and power in handling complex computations.',
            techStack: ['Swift', 'UIKit', 'iOS Development'],
            githubLink: 'https://github.com/narainsriram2020/FootballTable/tree/master',
            bgColor: '#f0e6f7', // Light lavender
        },
    ];

    const toggleProject = (id) => {
        if (expandedProject === id) {
            setExpandedProject(null);
        } else {
            setExpandedProject(id);
        }
    };

    // For floating background elements
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create particles on component mount
        const newParticles = [];
        for (let i = 0; i < 12; i++) {
            newParticles.push({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 2 + 0.5}rem`,
                animationDuration: `${Math.random() * 30 + 20}s`,
                opacity: Math.random() * 0.3 + 0.1,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <Section>
            {/* Background particles */}
            {particles.map((particle) => (
                <Particle
                    key={particle.id}
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                        animationDuration: particle.animationDuration,
                        opacity: particle.opacity,
                    }}
                />
            ))}

            <ContentContainer>
                <Heading>Projects</Heading>
                <SubHeading></SubHeading>
                
                <GithubProfileButton href="https://github.com/narainsriram2020" target="_blank">
                    <GitHubIcon size={24} />
                    View My GitHub Profile
                </GithubProfileButton>
                
                <ProjectGrid>
                    {projectsList.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            bgColor={project.bgColor}
                            expanded={expandedProject === project.id}
                            isLast={index === projectsList.length - 1}
                        >
                            <ProjectHeader>
                                <ProjectName>{project.name}</ProjectName>
                                <ProjectTagline>{project.tagline}</ProjectTagline>
                                <ExpandButton 
                                    onClick={() => toggleProject(project.id)}
                                    expanded={expandedProject === project.id}
                                >
                                    {expandedProject === project.id ? 'Show Less' : 'Show More'}
                                </ExpandButton>
                            </ProjectHeader>
                            
                            {expandedProject === project.id && (
                                <ProjectDetails>
                                    <DetailSection>
                                        <SectionTitle>Project Overview</SectionTitle>
                                        <DetailText>{project.overview}</DetailText>
                                    </DetailSection>
                                    
                                    <DetailSection>
                                        <SectionTitle>Technical Details</SectionTitle>
                                        <DetailText>{project.techDetails}</DetailText>
                                    </DetailSection>
                                    
                                    <TechStackSection>
                                        <SectionTitle>Tech Stack</SectionTitle>
                                        <TechBadgeContainer>
                                            {project.techStack.map((tech, idx) => (
                                                <TechBadge key={idx}>{tech}</TechBadge>
                                            ))}
                                        </TechBadgeContainer>
                                    </TechStackSection>
                                    
                                    <ButtonGroup>
                                        {project.githubLink && (
                                            <ActionButton href={project.githubLink} target="_blank">
                                                <GitHubIcon />
                                                GitHub Repo
                                            </ActionButton>
                                        )}
                                        {project.youtubeLink && (
                                            <ActionButton 
                                                href={project.youtubeLink} 
                                                target="_blank"
                                                youtube
                                            >
                                                <YouTubeIcon />
                                                Demo Video
                                            </ActionButton>
                                        )}
                                        {project.chatLink && (
                                            <ActionButton 
                                                href={project.chatLink} 
                                                target="_blank"
                                                terp
                                            >
                                                <TerpIcon />
                                                Live Demo
                                            </ActionButton>
                                        )}
                                    </ButtonGroup>
                                </ProjectDetails>
                            )}
                        </ProjectCard>
                    ))}
                </ProjectGrid>
            </ContentContainer>
        </Section>
    );
}

// Updated styled components
const Section = styled.div`
    position: relative;
    padding: 80px 20px;
    background: linear-gradient(135deg, #2a6a82 0%, #1c5a6f 100%);
    text-align: center;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1400px;
    margin: 0 auto;
`;

// Animated background particles
const Particle = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: 1;
    animation: float linear infinite;

    @keyframes float {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(100px, 50px) rotate(90deg);
        }
        50% {
            transform: translate(50px, 100px) rotate(180deg);
        }
        75% {
            transform: translate(-50px, 50px) rotate(270deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
`;

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const SubHeading = styled.p`
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
`;

const GithubProfileButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 14px 30px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        background-color: #222;
    }
`;

// Modified to center the last item
const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
    
    @media (min-width: 1110px) {
        & > *:last-child:nth-child(3n-1) {
            grid-column-end: -2;
        }
        
        & > *:last-child:nth-child(3n-2) {
            grid-column-end: 3;
        }
    }
    
    @media (max-width: 1109px) and (min-width: 769px) {
        & > *:last-child:nth-child(2n) {
            grid-column: span 2;
        }
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled.div`
    background-color: ${props => props.bgColor || '#fff'};
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    height: ${props => props.expanded ? 'auto' : '220px'};
    position: relative;
    
    &:hover {
        transform: ${props => props.expanded ? 'none' : 'translateY(-10px)'};
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, #3e97af, #2c7a8f);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover::before {
        opacity: 1;
    }
`;

const ProjectHeader = styled.div`
    padding: 25px;
    position: relative;
`;

const ProjectName = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

const ProjectTagline = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    font-style: italic;
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: #3e97af;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
        color: #2c7a8f;
    }
`;

const ProjectDetails = styled.div`
    padding: 0 25px 25px;
`;

const DetailSection = styled.div`
    margin-bottom: 25px;
`;

const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 700;
    color: #444;
    margin-bottom: 12px;
    text-align: left;
    padding-bottom: 6px;
    border-bottom: 2px solid rgba(62, 151, 175, 0.3);
`;

const DetailText = styled.p`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    text-align: left;
`;

const TechStackSection = styled.div`
    margin-bottom: 25px;
`;

const TechBadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const TechBadge = styled.span`
    padding: 6px 12px;
    background-color: rgba(62, 151, 175, 0.15);
    color: #2c7a8f;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
    justify-content: flex-start;
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    padding: 10px 18px;
    background-color: ${props => {
        if (props.youtube) return '#FF0000';
        if (props.terp) return '#4CAF50';
        return '#333';
    }};
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-3px);
        opacity: 0.9;
    }
`;

const GitHubIcon = styled(FaGithub)`
    margin-right: 8px;
`;

const YouTubeIcon = styled(FaYoutube)`
    margin-right: 8px;
`;

const TerpIcon = styled(GiTurtleShell)`
    margin-right: 8px;
`;

const StyledLink = styled.a`
    color: #3e97af;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
        color: #2c7a8f;
    }
`;

export default Projects;