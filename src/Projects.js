import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaYoutube } from 'react-icons/fa'; // Import GitHub and YouTube icons from react-icons/fa
import { GiTurtleShell } from "react-icons/gi";

function Projects() {
    const projectsList = [
        {
            name: '🐢 PlanetTerp Chatbot',
            overview: 'The PlanetTerp Chatbot is an AI-powered virtual assistant designed to enhance the experience of using the Planet Terp website. Planet Terp is where University of Maryland students can access reviews and ratings of courses, professors, and grade distributions. Unlike traditional search tools, this chatbot offers a fully interactive and immersive experience, allowing students to ask questions naturally and receive detailed responses. Key features include real-time retrieval of course reviews, professor ratings, historical grade distributions, and fun facts about UMD. The chatbot also supports chat history, enabling users to maintain context across conversations, and includes a sidebar with essential UMD-related resources to assist students in navigating their academic journey effectively. With its advanced AI capabilities, the chatbot streamlines the process of finding relevant academic information, helping students make well-informed decisions about their courses and professors.',
            techDetails: 'The chatbot is developed using Python and built on Streamlit, a powerful framework for creating interactive web applications. This enables a clean and user-friendly interface, ensuring seamless interaction. The chatbot’s AI-powered responses are made possible through the Google Gemini API, allowing it to generate context-aware, precise answers to user queries. To enhance search efficiency, the chatbot incorporates semantic search, ensuring students receive the most relevant information based on their input. A structured backend system handles query processing, and caching mechanisms are implemented to optimize response times, minimizing delays and improving user experience.',
            githubLink: 'https://github.com/narainsriram2020/PlanetTerpChatBot',
            chatLink: 'https://planetterp-chat-bot.streamlit.app/',
        },   
        {
            name: 'wAIste',
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
            githubLink: 'https://github.com/narainsriram2020/wAIste',
            youtubeLink: 'https://www.youtube.com/watch?v=ZyRgfsvGNfk&ab_channel=AravLuthra',
        },
        {
            name: 'Cisco Hackathon',
            overview: 'As a team, we participated in a Cisco-hosted hackathon, where we collectively tackled the last-mile challenge in logistics. Together, we developed an innovative application designed to optimize route planning, enhance real-time tracking capabilities, and facilitate seamless communication between delivery personnel and customers, aiming to revolutionize the final leg of the delivery process. Our solution secured 5th place among all participating groups, highlighting its effectiveness in addressing last-mile inefficiencies and showcasing our dedication to innovation in logistics technology.',
            techDetails: 'We developed the app using Xcode, which is an Integrated Development Environment (IDE) for macOS. Xcode is primarily used for developing software for Apple platforms, such as iOS and macOS. Additionally, we utilized Figma for designing the app. Figma is a web-based design tool used for collaborative interface design.',
            youtubeLink: 'https://www.youtube.com/watch?v=HN9LMe0GwBM&t=3s&ab_channel=NarainSriram',
        },
        {
            name: 'Personal Website',
            overview: 'My personal website serves as a digital reflection of who I am professionally. It\'s a virtual space where I compile and showcase my skills, past projects, diverse experiences, volunteer engagements, and educational background. Essentially, it encapsulates all the essential aspects of my professional journey, offering visitors a comprehensive insight into my capabilities and accomplishments.',
            techDetails: 'In crafting this website, I opted for React.js, a powerful JavaScript library renowned for its ability to create dynamic and interactive user interfaces. With React.js, I could design a website that presents information and engages visitors with seamless navigation and visually appealing design elements. Its flexibility allowed me to develop reusable components, ensuring consistency and efficiency across the website. Moreover, React.js facilitated easy updates, enabling me to keep the website current and reflective of my latest endeavors.',
            githubLink: 'https://github.com/narainsriram2020/personalwebsite/tree/master',
        },
        {
            name: 'Weather App',
            overview: 'An app where the user can enter in the coordinates of any place in the world and the current weather, 5-day weather, radar, and other information (humidity, wind speed, etc..) will be returned. ',
            techDetails: 'The app was developed using React Native, a framework for building mobile applications using JavaScript and React. React Native allows for cross-platform development, enabling the creation of iOS and Android apps from a single codebase. The Accuweather API was integrated into the app, facilitating access to weather data through API calls. API integration involves making requests to external servers to retrieve and display information, in this case, weather data such as current conditions, forecasts, and radar images.',
            githubLink: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/weatherapp-narain-sriram',
        },
        {
            name: 'Running Workout Tracker',
            overview: 'A mobile app that allows users to track their running workouts. The app implements functionalities like starting and stopping the stopwatch, tracking user location and displaying markers on the map, calculating total distance and average speed, and navigating to the final screen to display run statistics.',
            techDetails: 'The app is built using React Native, a framework for building cross-platform mobile applications with JavaScript and React. It utilizes the react-native-maps library for displaying maps and tracking user location, and integrates with the expo-location library to access device location services.',
            githubLink: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/mapapp---sriram',
        },
        {
            name: 'Football Table Simulator',
            overview: 'I developed an app enabling users to simulate football (soccer) match outcomes by selecting their preferred leagues. This endeavor showcases my skills in app development and passion for coding, combining technology with sports simulation.',
            techDetails: 'The app was developed using Swift, Apple\'s programming language for iOS, macOS, watchOS, and tvOS app development.Swift is known for its performance, safety features, and ease of use, making it ideal for building robust and efficient iOS applications.The user- friendly interface was crafted using Swift\'s UIKit framework, which provides a set of components and tools for building interactive user interfaces on iOS devices. Additionally, advanced algorithms were implemented in Swift to ensure accurate match simulations, leveraging the language\'s versatility and power in handling complex computations.',
            githubLink: 'https://github.com/narainsriram2020/FootballTable/tree/master',
        },
    ];

    const GitHubButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px; /* Increased margin */
    padding: 12px 24px; /* Increased padding */
    font-size: 18px; /* Increased font size */
    color: #555;
    background-color: #fff;
    border: 2px solid #555;
    border-radius: 5px;
    text-decoration: none; /* Remove underline from anchor */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for the hover effect */

    &:hover {
        transform: scale(1.05); /* Scale up the button on hover */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow on hover for highlighting effect */
    }

    @media (max-width: 600px) {
        width: calc(100% - 48px); /* Adjusted width for smaller screens */
        max-width: 300px; /* Added max-width to prevent overflow */
        margin-left: auto; /* Align to the right on mobile */
        margin-right: auto; /* Align to the left on mobile */
    }
`;

    const YouTubeButton = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px; /* Increased margin */
        padding: 12px 24px; /* Increased padding */
        font-size: 18px; /* Increased font size */
        color: #555;
        background-color: #fff;
        border: 2px solid #555;
        border-radius: 5px;
        text-decoration: none; /* Remove underline from anchor */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for the hover effect */

        &:hover {
            transform: scale(1.05); /* Scale up the button on hover */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow on hover for highlighting effect */
        }

        @media (max-width: 600px) {
        width: 100%; /* Adjusted width for smaller screens */
        max-width: 300px; /* Added max-width to prevent overflow */
        }
    `;

    const TerpButton = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px; /* Increased margin */
        padding: 12px 24px; /* Increased padding */
        font-size: 18px; /* Increased font size */
        color: #555;
        background-color: #fff;
        border: 2px solid #555;
        border-radius: 5px;
        text-decoration: none; /* Remove underline from anchor */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for the hover effect */

        &:hover {
            transform: scale(1.05); /* Scale up the button on hover */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow on hover for highlighting effect */
        }

        @media (max-width: 600px) {
        width: 100%; /* Adjusted width for smaller screens */
        max-width: 300px; /* Added max-width to prevent overflow */
        }
    `;

    const GitHubIcon = styled(FaGithub)`
        margin-right: 10px; /* Increased margin */
        transition: transform 0.3s ease; /* Add transition for the rotation effect */

        ${GitHubButton}:hover & {
            transform: rotate(360deg); /* Rotate the icon 360 degrees on hover */
        }
    `;

    const YouTubeIcon = styled(FaYoutube)`
        margin-right: 10px; /* Increased margin */
        transition: transform 0.3s ease; /* Add transition for the rotation effect */

        ${YouTubeButton}:hover & {
            transform: rotate(360deg); /* Rotate the icon 360 degrees on hover */
        }
    `;

    const TerpIcon = styled(FaYoutube)`
        margin-right: 10px; /* Increased margin */
        transition: transform 0.3s ease; /* Add transition for the rotation effect */

        ${YouTubeButton}:hover & {
            transform: rotate(360deg); /* Rotate the icon 360 degrees on hover */
        }
    `;

    return (
        <Section>
            <Heading>Projects</Heading>
            <Container>
                <GitHubButton href="https://github.com/narainsriram2020" target="_blank">
                    <GitHubIcon />
                    View My Github Here
                </GitHubButton>
                {projectsList.map((project, index) => (
                    <ProjectCard key={index}>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectSectionTitle>Project Overview:</ProjectSectionTitle>
                        <ProjectDescription>
                            {project.overview}
                        </ProjectDescription>
                        <ProjectSectionTitle>Technical Details:</ProjectSectionTitle>
                        <ProjectDescription>{project.techDetails}</ProjectDescription>
                        {/* Conditional rendering for YouTube and GitHub buttons */}
                        {project.name === '🐢 PlanetTerp Chatbot' && (
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                <TerpButton href={project.chatLink} target="_blank">
                                    <TerpIcon />
                                    View Chatbot
                                </TerpButton>
                                <GitHubButton href={project.githubLink} target="_blank">
                                    <GitHubIcon />
                                    View on GitHub
                                </GitHubButton>
                            </div>
                        )}
                        {project.name === 'wAIste' && (
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                <YouTubeButton href={project.youtubeLink} target="_blank">
                                    <YouTubeIcon />
                                    View on YouTube
                                </YouTubeButton>
                                <GitHubButton href={project.githubLink} target="_blank">
                                    <GitHubIcon />
                                    View on GitHub
                                </GitHubButton>
                            </div>
                        )}
                        {project.name === 'Cisco Hackathon' && (
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                <YouTubeButton href={project.youtubeLink} target="_blank" style={{ width: '100%' }}>
                                    <YouTubeIcon />
                                    View on YouTube
                                </YouTubeButton>
                            </div>
                        )}
                        {project.name !== 'wAIste' && project.name !== 'Cisco Hackathon' && project.name !== '🐢 PlanetTerp Chatbot' && (
                            <GitHubButton href={project.githubLink} target="_blank">
                                <GitHubIcon />
                                View on GitHub
                            </GitHubButton>
                        )}
                    </ProjectCard>
                ))}
            </Container>
        </Section>
    );
}

const Section = styled.div`
    padding: 60px;
    background-color: #3e97af;
    text-align: center; /* Center the content */
`;

const StyledLink = styled.a`
    color: #007bff; /* Change color to blue */
    font-weight: bold; /* Make the text bold */
    text-decoration: underline; /* Underline the text */
    cursor: pointer; /* Show pointer cursor on hover */
    /* Add any other styles as needed */
`;

const ProjectDescription = styled.p`
    font-size: 18px; /* Increased font size */
    color: #777;
    text-align: left;
    line-height: 1.6; /* Adjusted line height for better readability */
`;

const Heading = styled.h2`
    font-size: 40px; /* Increased font size */
    font-weight: bold;
    margin-bottom: 30px;
    color: white;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column; /* Stack cards vertically */
    align-items: center; /* Center horizontally */
    gap: 40px; /* Increased space between cards */
`;

const ProjectCard = styled.div`
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px; /* Increased padding */
    width: 90%; /* Adjusted width */
    max-width: 800px; /* Increased maximum width */
`;

const ProjectName = styled.h3`
    font-size: 26px; /* Increased font size */
    font-weight: bold;
    color: #555;
    margin-bottom: 15px;
    text-align: center;
`;

const ProjectSectionTitle = styled.h4`
    font-size: 20px; /* Increased font size */
    font-weight: bold;
    color: #333;
    margin: 20px 0; /* Increased margin */
    text-align: left;
`;

export default Projects;
