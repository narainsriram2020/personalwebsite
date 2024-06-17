import React from 'react';
import styled from 'styled-components';
import sewaImage from './volunteeringimages/sewa.png';
import habitatImage from './volunteeringimages/hfh.png';
import she from './volunteeringimages/sewa1.png';

function Volunteering() {
  return (
    <Section>
      <BackgroundPattern />
      <ContentWrapper>
        <Heading>Volunteering</Heading>
        <ExperienceContainer>
          <ExperienceCard href="https://www.habitat.org/" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Image src={habitatImage} alt="Habitat for Humanity" />
              <ExperienceName>Habitat for Humanity</ExperienceName>
              <Description>
                Habitat for Humanity is a nonprofit organization that helps families build and improve places to call home. They believe affordable housing plays a critical role in strong and stable communities.
              </Description>
              <ExperienceDetails>
                <ExperienceDate>Summer 2021</ExperienceDate>
                <ul>
                  <li>Volunteered by helping my local Habitat for Humanity clear out waste and made sure to dispose this waste properly.</li>
                  <li>Additionally, I helped to order and label the local branch.</li>
                </ul>
              </ExperienceDetails>
            </CardContent>
          </ExperienceCard>
          <ExperienceCard href="https://www.sewausa.org/" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Image src={sewaImage} alt="Sewa International" />
              <ExperienceName>Sewa International</ExperienceName>
              <Description>
                Sewa International is a Hindu faith-based humanitarian non-profit service organization. Its focus areas include disaster relief and rehabilitation, education, and healthcare services.
              </Description>
              <ExperienceDetails>
                <ExperienceDate>March 2021 - December 2023</ExperienceDate>
                <ul>
                  <li>Assisted in sorting and distributing food donations to local communities.</li>
                  <li>Led Sponsor-a-child program, park and river cleanups, and blood drives.</li>
                  <li>Was apart of the SEWA Plastic Bag Ban Intiative which helped ban plastic bags in Parsippany, NJ, one of the first places in New Jersey to ban plastic bags.</li>
                  <li>Mentored a group of young volunteers and helped them understand the core values of the organization and the importance of giving back to the community</li>
                  <li>Volunteered 100+ hours every year for 4 years, Group Leader, received 3 Presidential awards</li>
                </ul>
              </ExperienceDetails>
            </CardContent>
          </ExperienceCard>
          <ExperienceCard href="https://www.sewausa.org/SHE" target="_blank" rel="noopener noreferrer">
            <CardContent>
              <Image src={she} alt="SEWA SHE Project" />
              <ExperienceName>Tennis Lessons for Children</ExperienceName>
              <Description>
                The SEWA SHE Project is focused on empowering women and children through various initiatives including education, healthcare, and vocational training.
              </Description>
              <ExperienceDetails>
                <ExperienceDate>Summer 2021 ~ Summer 2022</ExperienceDate>
                <ul>
                  <li>Contributed to the SEWA initiatives by aiming to gather $240 from each volunteer, which could support funding for a girl child for 12 months.</li>
                  <li>Went beyond the initial goal by securing $1,200, which was enough to support the education of five girls.</li>
                  <li>Dedicated summers of 2021, 2022, and 2023 to organizing and conducting tennis lessons, raising a total of $1,200, all of which was graciously donated to the SEWA SHE Project.</li>
                </ul>
              </ExperienceDetails>
            </CardContent>
          </ExperienceCard>
        </ExperienceContainer>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  width: 100%;
  min-height: 85vh;
  padding: 60px 20px;
  color: #333333;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #87CEEB, #1E90FF);
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #ffffff; /* White header text */
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Add gap between cards on mobile */
  }
`;

const ExperienceCard = styled.a`
  width: 400px;  /* Adjusted to fit within typical screen sizes */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #ffffff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 75%; /* Adjust to 90% to ensure it fits well on mobile */
    margin-left: 35px;
    margin-right: auto;
    box-sizing: border-box; /* Ensure padding and borders are included in the element's total width and height */
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Allow the image to scale with the card */
  max-height: 200px; /* Set a max height to prevent it from being too large */
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 600px) {
    max-height: 150px; /* Reduce max height on mobile for better scaling */
  }
`;

const ExperienceName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ExperienceDetails = styled.div`
  font-size: 16px;
`;

const ExperienceDate = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export default Volunteering;
