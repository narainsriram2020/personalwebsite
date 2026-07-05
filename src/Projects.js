import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import satedCover from './projectimages/sated2.jpg';

const featured = [
    {
        id: 'planetterp',
        name: 'PlanetTerp Chatbot',
        tagline: 'AI assistant for UMD course & professor reviews',
        overview: 'A virtual assistant for PlanetTerp — where UMD students look up course reviews, professor ratings, and grade distributions. Instead of searching, students just ask: the bot retrieves reviews, historical grades, and UMD facts conversationally, with chat history for context across a session.',
        detail: 'Built in Python on Streamlit, with the Google Gemini API generating context-aware answers. Semantic search surfaces the most relevant reviews, and caching keeps response times fast.',
        tech: ['Python', 'Streamlit', 'Gemini API', 'Semantic Search'],
        cover: { type: 'chat' },
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/PlanetTerpChatBot' },
            { label: 'Live chatbot', href: 'https://planetterp-chat-bot.streamlit.app/' },
        ],
    },
    {
        id: 'sated',
        name: 'Sated',
        tagline: 'The best bang for your buck, at 3,900+ Chipotles',
        overview: 'A full-stack platform that ranks every Chipotle location in America — all 3,900+ of them — with real-time weighted community ratings across portion size, protein, speed, cleanliness, and consistency. Search any area on the map, filter dynamically, and find the location that actually loads your bowl.',
        detail: 'A PostgreSQL schema designed around the ratings model, with Next.js APIs computing weighted rankings and analytics in real time. Mapbox GL drives the interactive map on a responsive TypeScript frontend, and indexed queries and aggregations keep everything low-latency.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Mapbox GL'],
        cover: { type: 'image', src: satedCover, position: 'left center', href: 'https://sated.vercel.app/' },
        links: [
            { label: 'Live app', href: 'https://sated.vercel.app/' },
        ],
    },
    {
        id: 'bizcamp',
        name: 'BizCamp',
        tagline: 'Boost company workflow with AI',
        overview: 'An AI-driven productivity tool inspired by Salesforce and CRM software: real-time meeting transcription, smart summaries, concept-graph generation, and an integrated AI chatbot. BizCamp turns meeting data into actionable insight so teams can track engagement and make better decisions.',
        detail: 'Next.js frontend, FastAPI backend, MongoDB for structured data, and Qdrant as the vector database for semantic search. AssemblyAI powers real-time transcription. Special attention went into a scalable database architecture and handling large volumes of meeting data securely.',
        tech: ['Next.js', 'FastAPI', 'MongoDB', 'Qdrant', 'AssemblyAI'],
        cover: { type: 'video', src: 'https://i.ytimg.com/vi/0aQxmoBndzs/hqdefault.jpg', href: 'https://www.youtube.com/watch?v=0aQxmoBndzs' },
        links: [
            { label: 'GitHub', href: 'https://github.com/aluthra23/bizcamp' },
            { label: 'Demo', href: 'https://www.youtube.com/watch?v=0aQxmoBndzs' },
            { label: 'Devpost', href: 'https://devpost.com/software/902064?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional#app-team' },
        ],
    },
    {
        id: 'livealittle',
        name: 'Live a Little',
        tagline: 'A daily push to actually go do something',
        overview: 'Born from group chats that had gone quiet: every day, one random person in your friend group gets a real-world challenge — a small push to step outside the routine and actually do something. A full suite of party games keeps the whole group engaged whenever you\'re together, so you spend more time trying new things and reconnecting with the people who matter most.',
        detail: 'Built in React Native with Expo, with a Supabase database behind groups, daily challenge assignment, and the party games.',
        tech: ['React Native', 'Expo', 'Supabase'],
        cover: { type: 'video', src: 'https://i.ytimg.com/vi/eEeHS8_GKww/hqdefault.jpg', href: 'https://www.youtube.com/watch?v=eEeHS8_GKww' },
        links: [
            { label: 'Demo', href: 'https://www.youtube.com/watch?v=eEeHS8_GKww' },
            { label: 'Devpost', href: 'https://devpost.com/software/live-a-little' },
        ],
    },
];

const more = [
    {
        id: 'canadian_options',
        name: 'CA Options Pricing',
        tagline: 'Options pricing research on Canadian markets',
        overview: 'A financial modeling project building replicable options-pricing tools for Canadian institutions, focused on the banking sector. Applied Black-Scholes and binomial tree models to Canadian market data with realistic parameter calibration — modular Jupyter notebooks, parquet-based storage, and validation against real market behavior.',
        tech: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
        links: [
            { label: 'GitHub', href: 'https://github.com/3752V/CA-options-pricing' },
        ],
    },
    {
        id: 'waiste',
        name: 'wAIste',
        tagline: 'AI-powered waste classification',
        overview: 'Built with Arav Luthra: upload a photo of any waste item and two AI models — one for general classification, one for advanced garbage identification — tell you how to recycle it. Flutter frontend, Flask backend running Roboflow inference.',
        tech: ['Flutter', 'Flask', 'Python', 'Roboflow'],
        image: 'https://i.ytimg.com/vi/ZyRgfsvGNfk/hqdefault.jpg',
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/wAIste' },
            { label: 'Demo', href: 'https://www.youtube.com/watch?v=ZyRgfsvGNfk&ab_channel=AravLuthra' },
        ],
    },
    {
        id: 'cisco',
        name: 'Cisco Hackathon — 5th Place',
        tagline: 'Last-mile logistics optimization',
        overview: 'Tackled the last-mile delivery challenge at a Cisco-hosted hackathon: route planning, real-time tracking, and delivery-to-customer communication in an iOS app designed in Figma and built in Xcode. Placed 5th among all teams.',
        tech: ['Swift', 'Xcode', 'Figma'],
        image: 'https://i.ytimg.com/vi/HN9LMe0GwBM/hqdefault.jpg',
        links: [
            { label: 'Demo', href: 'https://www.youtube.com/watch?v=HN9LMe0GwBM&t=3s&ab_channel=NarainSriram' },
        ],
    },
    {
        id: 'website',
        name: 'This Website',
        tagline: 'Digital portfolio, designed & built from scratch',
        overview: 'The site you are reading — React with styled-components and framer-motion, a single design system of editorial type, hairlines, and quiet interactions.',
        tech: ['React', 'styled-components', 'framer-motion'],
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/personalwebsite/tree/master' },
        ],
    },
    {
        id: 'weather',
        name: 'Weather App',
        tagline: 'Forecasts for any coordinates on Earth',
        overview: 'Enter coordinates anywhere in the world and get current conditions, a 5-day forecast, radar, humidity, and wind — built in React Native on the AccuWeather API.',
        tech: ['React Native', 'AccuWeather API'],
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/weatherapp-narain-sriram' },
        ],
    },
    {
        id: 'workout',
        name: 'Running Workout Tracker',
        tagline: 'GPS fitness tracking for runners',
        overview: 'Start a run, watch your route draw on the map, and get distance, average speed, and full stats at the finish — react-native-maps plus expo-location.',
        tech: ['React Native', 'react-native-maps', 'expo-location'],
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/React-Native-Apps/tree/main/mapapp---sriram' },
        ],
    },
    {
        id: 'football',
        name: 'Football Table Simulator',
        tagline: 'Simulate a season in any league',
        overview: 'Pick your league and simulate football match outcomes with algorithms tuned for realistic results — built in Swift with UIKit.',
        tech: ['Swift', 'UIKit'],
        links: [
            { label: 'GitHub', href: 'https://github.com/narainsriram2020/FootballTable/tree/master' },
        ],
    },
];

const LinkRow = ({ links }) => (
    <Links>
        {links.map((l) => (
            <ProjectLink key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} ↗
            </ProjectLink>
        ))}
    </Links>
);

/* Hand-built cover: mini chat exchange for the PlanetTerp bot */
const ChatCover = () => (
    <ChatCard>
        <ChatTitle>🐢 PlanetTerp Chatbot</ChatTitle>
        <BubbleUser>who should I take for CMSC330?</BubbleUser>
        <BubbleBot>
            Pulling PlanetTerp reviews, grade distributions, and professor
            ratings for CMSC330 — here's what students say →
        </BubbleBot>
        <ChatInput>Ask about any UMD course or professor…</ChatInput>
    </ChatCard>
);

const Cover = ({ cover, name }) => {
    if (cover.type === 'video') {
        return (
            <CoverLink href={cover.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${name} demo`}>
                <CoverImage src={cover.src} alt={`${name} demo video`} loading="lazy" />
                <PlayBadge>▶ Watch demo</PlayBadge>
            </CoverLink>
        );
    }
    if (cover.type === 'chat') return <ChatCover />;
    if (cover.href) {
        return (
            <CoverLink href={cover.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name}`}>
                <CoverImage src={cover.src} alt={`${name} screenshot`} loading="lazy" $position={cover.position} />
                <PlayBadge>Open the app ↗</PlayBadge>
            </CoverLink>
        );
    }
    return (
        <ImageCard>
            <CoverImage src={cover.src} alt={`${name} screenshot`} loading="lazy" $position={cover.position} />
        </ImageCard>
    );
};

function Projects() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <Section>
            <Wrapper>
                <SectionHeading index="03" title="Projects" />

                {featured.map((p, i) => (
                    <Feature
                        key={p.id}
                        $flip={i % 2 === 1}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: '-70px' }}
                    >
                        <FeatBody>
                            <FeatNum>{String(i + 1).padStart(2, '0')}</FeatNum>
                            <FeatName>{p.name}</FeatName>
                            <FeatTagline>{p.tagline}</FeatTagline>
                            <FeatText>{p.overview}</FeatText>
                            <FeatDetail>{p.detail}</FeatDetail>
                            <TechRow>{p.tech.join(' · ')}</TechRow>
                            <LinkRow links={p.links} />
                        </FeatBody>

                        <CoverWrap $tilt={i % 2 === 1 ? 1.4 : -1.4}>
                            <Cover cover={p.cover} name={p.name} />
                        </CoverWrap>
                    </Feature>
                ))}

                <MoreLabel>More projects</MoreLabel>
                <MoreList>
                    {more.map((p, i) => {
                        const isOpen = openIdx === i;
                        return (
                            <MoreRow key={p.id}>
                                <MoreButton onClick={() => setOpenIdx(isOpen ? null : i)} aria-expanded={isOpen}>
                                    <MoreName $open={isOpen}>{p.name}</MoreName>
                                    <MoreTagline>{p.tagline}</MoreTagline>
                                    <Plus $open={isOpen} aria-hidden>+</Plus>
                                </MoreButton>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <MoreDetails
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <MoreDetailsInner $hasImage={!!p.image}>
                                                <div>
                                                    <FeatText>{p.overview}</FeatText>
                                                    <TechRow>{p.tech.join(' · ')}</TechRow>
                                                    <LinkRow links={p.links} />
                                                </div>
                                                {p.image && (
                                                    <MoreThumb src={p.image} alt={`${p.name} demo video thumbnail`} loading="lazy" />
                                                )}
                                            </MoreDetailsInner>
                                        </MoreDetails>
                                    )}
                                </AnimatePresence>
                            </MoreRow>
                        );
                    })}
                </MoreList>

                <AllProjects href="https://github.com/narainsriram2020" target="_blank" rel="noopener noreferrer">
                    See everything on GitHub ↗
                </AllProjects>
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

const Feature = styled(motion.div)`
    display: grid;
    grid-template-columns: ${({ $flip }) => ($flip ? '0.9fr 1.1fr' : '1.1fr 0.9fr')};
    gap: 60px;
    align-items: center;
    padding: 56px 0;
    border-top: 1px solid ${({ theme }) => theme.color.line};

    ${({ $flip }) => $flip && `
        & > *:first-child { order: 2; }
        & > *:last-child  { order: 1; }
    `}

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 42px 0;

        & > *:first-child { order: 2; }
        & > *:last-child  { order: 1; }
    }
`;

const FeatBody = styled.div``;

const FeatNum = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 14px;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.color.accentSky};
    margin-bottom: 10px;
`;

const FeatName = styled.h3`
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: clamp(26px, 3.8vw, 42px);
    line-height: 1.1;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.color.ink};
    margin: 0 0 6px;
`;

const FeatTagline = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.color.accentSky};
    margin-bottom: 18px;
`;

const FeatText = styled.p`
    font-size: 15px;
    line-height: 1.75;
    color: ${({ theme }) => theme.color.inkSoft};
    margin: 0 0 12px;
`;

const FeatDetail = styled.p`
    font-size: 14px;
    line-height: 1.7;
    color: ${({ theme }) => theme.color.muted};
    margin: 0 0 18px;
`;

const TechRow = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12.5px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.color.accentSky};
    margin-bottom: 14px;
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 13.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.accentSky};
    text-decoration: none;
    background: rgba(98, 164, 222, 0.08);
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    border-radius: 999px;
    padding: 8px 18px;
    transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
        color: ${({ theme }) => theme.color.bg};
        background: ${({ theme }) => theme.color.accentSky};
        border-color: ${({ theme }) => theme.color.accentSky};
        transform: translateY(-2px);
    }
`;

const CoverWrap = styled.div`
    position: relative;
    transform: rotate(${({ $tilt }) => $tilt}deg);
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover { transform: rotate(0deg) scale(1.01); }
`;

const coverCard = `
    display: block;
    width: 100%;
    aspect-ratio: 16 / 11;
    border-radius: 18px;
    overflow: hidden;
`;

const CoverLink = styled.a`
    ${coverCard}
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    box-shadow: 0 30px 80px rgba(3, 10, 22, 0.55);
`;

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $position }) => $position || 'center'};
    display: block;
`;

const ImageCard = styled.div`
    ${coverCard}
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    box-shadow: 0 30px 80px rgba(3, 10, 22, 0.55);
    background: ${({ theme }) => theme.color.bgElevated};
`;

const PlayBadge = styled.span`
    position: absolute;
    left: 14px;
    bottom: 14px;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.color.ink};
    background: rgba(11, 26, 46, 0.82);
    backdrop-filter: blur(6px);
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 999px;
    padding: 7px 14px;
`;

const ChatCard = styled.div`
    ${coverCard}
    background: ${({ theme }) => theme.color.bgElevated};
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    box-shadow: 0 30px 80px rgba(3, 10, 22, 0.55);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ChatTitle = styled.div`
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.color.ink};
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

const BubbleUser = styled.div`
    align-self: flex-end;
    max-width: 78%;
    font-size: 13.5px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.bg};
    background: ${({ theme }) => theme.color.accentSky};
    border-radius: 14px 14px 4px 14px;
    padding: 9px 14px;
`;

const BubbleBot = styled.div`
    align-self: flex-start;
    max-width: 85%;
    font-size: 13.5px;
    line-height: 1.55;
    color: ${({ theme }) => theme.color.inkSoft};
    background: ${({ theme }) => theme.color.bgInset};
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 14px 14px 14px 4px;
    padding: 10px 14px;
`;

const ChatInput = styled.div`
    margin-top: auto;
    font-size: 13px;
    color: ${({ theme }) => theme.color.muted};
    background: ${({ theme }) => theme.color.bgInset};
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 999px;
    padding: 10px 16px;
`;

const MoreLabel = styled.div`
    font-family: ${({ theme }) => theme.font.display};
    font-size: 19px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.color.ink};
    margin: 64px 0 14px;
`;

const MoreList = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

const MoreRow = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const MoreButton = styled.button`
    display: grid;
    grid-template-columns: minmax(200px, 320px) 1fr 40px;
    align-items: baseline;
    gap: 20px;
    width: 100%;
    padding: 20px 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 28px;
    }
`;

const MoreName = styled.span`
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: ${({ $open, theme }) => ($open ? theme.color.ink : theme.color.inkSoft)};
    transition: color 0.25s ease;

    ${MoreButton}:hover & { color: ${({ theme }) => theme.color.ink}; }
`;

const MoreTagline = styled.span`
    font-size: 13.5px;
    color: ${({ theme }) => theme.color.muted};

    @media (max-width: 768px) { display: none; }
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

const MoreDetails = styled(motion.div)`
    overflow: hidden;
`;

const MoreDetailsInner = styled.div`
    display: grid;
    grid-template-columns: ${({ $hasImage }) => ($hasImage ? 'minmax(0, 1fr) 240px' : 'minmax(0, 720px)')};
    gap: 28px;
    align-items: start;
    padding: 2px 0 26px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const MoreThumb = styled.img`
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    box-shadow: 0 16px 44px rgba(3, 10, 22, 0.45);
`;

const AllProjects = styled.a`
    display: inline-block;
    font-size: 14px;
    color: ${({ theme }) => theme.color.muted};
    text-decoration: none;
    margin-top: 36px;
    transition: color 0.25s ease;

    &:hover { color: ${({ theme }) => theme.color.accentSky}; }
`;

export default Projects;
