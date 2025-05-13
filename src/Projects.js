import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { GiTurtleShell } from "react-icons/gi";

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);

    const projectsList = [
        {
            id: "bizcamp",
            name: 'BizCamp',
            tagline: "Boost company workflow with AI",
            overview: 'BizCamp is an AI-driven productivity tool designed to streamline company workflow and optimize team collaboration. Drawing inspiration from Salesforce and CRM software, BizCamp offers real-time meeting transcriptions, smart meeting summaries, concept graph generation, and an integrated AI chatbot. By transforming meeting data into actionable insights, BizCamp empowers organizations to improve communication, track engagement, and enhance decision-making. The platform is built with scalability, security, and real-world deployment in mind, helping businesses manage knowledge and extract value from every conversation.',
            techDetails: 'BizCamp is built using a modern tech stack, including Next.js for the frontend, FastAPI for the backend, MongoDB for structured data management, and Qdrant as the vector database for semantic search and retrieval. AssemblyAI provides real-time transcription capabilities, while GitHub is used for version control and collaboration. Special attention was given to designing an efficient, scalable database architecture, ensuring secure data handling, and optimizing AI-driven features to handle large volumes of meeting data.',
            techStack: ['Next.js', 'FastAPI', 'MongoDB', 'Qdrant', 'AssemblyAI', 'GitHub'],
            githubLink: 'https://github.com/aluthra23/bizcamp',
            youtubeLink: 'https://www.youtube.com/watch?v=0aQxmoBndzs',
            devPostLink: 'https://devpost.com/software/902064?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional#app-team',
            bgColor: '#e9f7ef', // Light green
        },
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
            id: "canadian_options",
            name: 'CA Options Pricing',
            tagline: "Canadian Options Research",
            overview: 'CA Options Pricing is a financial modeling project focused on building robust options pricing tools for Canadian institutions. We applied classical models such as the Black-Scholes and the Binomial Tree method to Canadian financial datasets. Our main focus was in the Canadian banking sector. The goal is to provide replicable, scalable options pricing methodologies grounded in financial theory and real market behavior.',
            techDetails: 'The project structure is built around modular Jupyter notebooks and Python scripts. Data is managed using efficient parquet file storage formats and processed with Python’s pandas library. Special emphasis is placed on realistic parameter calibration and model validation against market data.',
            techStack: ['Python', 'Pandas', 'NumPy', 'Scipy', 'Matplotlib'],
            githubLink: 'https://github.com/3752V/CA-options-pricing',
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

    return (
        <SectionContainer>
            <ContentWrapper>
                <Heading>Projects</Heading>

                <GithubProfileButton href="https://github.com/narainsriram2020" target="_blank">
                <GitHubIcon size={24} style={{ marginRight: '8px' }} />
                View My GitHub Profile
                </GithubProfileButton>

                <ProjectGrid>
                    {projectsList.map((project, index) => (
                        <ProjectCard
                            key={project.id}
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
                                                Visit Chatbot
                                            </ActionButton>
                                        )}
                                    </ButtonGroup>
                                </ProjectDetails>
                            )}
                        </ProjectCard>
                    ))}
                </ProjectGrid>
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

const GithubProfileButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #112240;
    color: #64ffda;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin: 0 auto 40px;
    max-width: 250px;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-3px);
    }
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled.div`
    background-color: #112240;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    border: 1px solid #1e3a5f;
    transition: all 0.3s ease;
    height: ${props => props.expanded ? 'auto' : '220px'};
    display: flex;
    flex-direction: column;
    
    &:hover {
        border-color: #64ffda;
        box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
    
    animation: ${fadeIn} 0.5s ease-out;
    animation-delay: ${props => Math.min(0.1 * props.index, 1)}s;
`;

const ProjectHeader = styled.div`
    padding: 25px 25px 20px;
    border-bottom: ${props => props.expanded ? '1px solid #1e3a5f' : 'none'};
`;

const ProjectName = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #e6f1ff;
    margin: 0 0 10px;
`;

const ProjectTagline = styled.p`
    font-size: 16px;
    color: #64ffda;
    margin: 0 0 15px;
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: #64ffda;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    
    &:hover {
        color: #64ffda;
        text-decoration: underline;
    }
`;

const ProjectDetails = styled.div`
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const DetailSection = styled.div`
    margin-bottom: 15px;
`;

const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: #64ffda;
    margin: 0 0 10px;
`;

const DetailText = styled.div`
    font-size: 16px;
    line-height: 1.6;
    color: #a8b2d1;
`;

const TechStackSection = styled.div`
    margin-bottom: 20px;
`;

const TechBadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const TechBadge = styled.span`
    background-color: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
    margin-top: auto;
    
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: transparent;
    color: #64ffda;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 8px 15px;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-2px);
    }
`;

const GitHubIcon = styled(FaGithub)`
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    color: #64ffda;
`;

const YouTubeIcon = styled(FaYoutube)`
    margin-right: 8px;
`;

const TerpIcon = styled(GiTurtleShell)`
    margin-right: 8px;
`;

const StyledLink = styled.a`
    color: #64ffda;
    text-decoration: underline;
    
    &:hover {
        text-decoration: none;
    }
`;

export default Projects;