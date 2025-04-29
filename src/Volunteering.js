import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import sewaImage from './volunteeringimages/sewa.png';
import habitatImage from './volunteeringimages/hfh.png';
import she from './volunteeringimages/sewa1.png';

function Volunteering() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };


  return (
    <SectionContainer>
      <ContentWrapper>
        <Heading>Volunteering</Heading>

        <ExperienceContainer>
          {[{
            name: 'Habitat for Humanity',
            period: 'Summer 2021',
            description: 'Habitat for Humanity is a nonprofit organization that helps families build and improve places to call home. They believe affordable housing plays a critical role in strong and stable communities.',
            image: habitatImage,
            url: 'https://www.habitat.org/',
            contributions: [
              'Volunteered by helping my local Habitat for Humanity clear out waste and made sure to dispose this waste properly.',
              'Additionally, I helped to order and label the local branch.'
            ]
          }, {
            name: 'Sewa International',
            period: 'March 2021 – December 2023',
            description: 'Sewa International is a Hindu faith-based humanitarian non-profit service organization. Its focus areas include disaster relief and rehabilitation, education, and healthcare services.',
            image: sewaImage,
            url: 'https://www.sewausa.org/',
            contributions: [
              'Assisted in sorting and distributing food donations to local communities.',
              'Led Sponsor-a-child program, park and river cleanups, and blood drives.',
              'Was apart of the SEWA Plastic Bag Ban Intiative which helped ban plastic bags in Parsippany, NJ, one of the first places in New Jersey to ban plastic bags.',
              'Mentored a group of young volunteers and helped them understand the core values of the organization and the importance of giving back to the community.',
              'Volunteered 100+ hours every year for 4 years, Group Leader, received 3 Presidential awards.'
            ]
          }, {
            name: 'Tennis Lessons for Children',
            period: 'Summer 2021 ~ Summer 2023',
            description: 'The SEWA SHE Project is focused on empowering women and children through various impactful community initiatives including education, healthcare, and vocational training.',
            image: she,
            url: 'https://www.sewausa.org/SHE',
            contributions: [
              'Contributed to the SEWA initiatives by aiming to gather $240 from each volunteer, which could support funding for a girl child for 12 months.',
              'Went beyond the initial goal by securing $1,200, which was enough to support the education of five girls.',
              'Dedicated summers of 2021, 2022, and 2023 to organizing and conducting tennis lessons, raising a total of $1,200, all of which was graciously donated to the SEWA SHE Project.'
            ]
          }].map((exp, index) => (
            <ExperienceCard
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              isActive={activeCard === index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <ImageContainer>
                  <Image src={exp.image} alt={exp.name} />
                  <Overlay isActive={activeCard === index}>
                    <OverlayText>Visit Website</OverlayText>
                  </Overlay>
                </ImageContainer>
                <ExperienceName>{exp.name}</ExperienceName>
                <Period>{exp.period}</Period>
                <DescriptionBlock>
                  <Description>{exp.description}</Description>
                  <Contributions>
                    <ContributionTitle>My Contributions:</ContributionTitle>
                    <ContributionList>
                      {exp.contributions.map((item, i) => (
                        <ContributionItem key={i}>{item}</ContributionItem>
                      ))}
                    </ContributionList>
                  </Contributions>
                </DescriptionBlock>
              </CardContent>
            </ExperienceCard>
          ))}
        </ExperienceContainer>
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.a`
  background-color: #112240;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border: 1px solid ${props => props.isActive ? '#64ffda' : '#1e3a5f'};
  transition: all 0.3s ease, box-shadow 0.4s ease;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(100, 255, 218, 0.25), 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }

  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${props => props.index * 0.2}s;
`;

const CardContent = styled.div`
  padding: 0 0 25px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ExperienceCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const OverlayText = styled.span`
  color: #64ffda;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #64ffda;
  border-radius: 4px;
`;

const ExperienceName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #e6f1ff;
  margin: 0 25px 10px;
`;

const Period = styled.span`
  font-size: 16px;
  color: #64ffda;
  font-family: 'Roboto Mono', monospace;
  margin: 0 25px 15px;
`;

const DescriptionBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #a8b2d1;
  margin: 0 25px 20px;
`;

const Contributions = styled.div`
  margin: 0 25px;
`;

const ContributionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #e6f1ff;
  margin-bottom: 12px;
`;

const ContributionList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ContributionItem = styled.li`
  margin-bottom: 8px;
  color: #a8b2d1;
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  padding-left: 20px;
  animation: ${slideIn} 0.5s ease-out both;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
    font-size: 18px;
  }
`;

export default Volunteering;
