import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import sewaImage from './volunteeringimages/sewa.png';
import habitatImage from './volunteeringimages/hfh.png';
import she from './volunteeringimages/sewa1.png';

const orgs = [
  {
    name: 'Sewa International',
    period: 'Mar 2021 — Dec 2023',
    image: sewaImage,
    url: 'https://www.sewausa.org/',
    blurb:
      'Four years as a Group Leader with a humanitarian nonprofit focused on disaster relief, education, and healthcare. Led the Sponsor-a-Child program, park and river cleanups, and blood drives — and mentored the next group of young volunteers coming up behind me.',
    highlight:
      'Part of the Plastic Bag Ban Initiative that made Parsippany, NJ one of the first towns in the state to ban plastic bags.',
    stats: [
      { value: '400+', label: 'volunteer hours' },
      { value: '3×', label: 'Presidential Service Awards' },
    ],
  },
  {
    name: 'Tennis for SEWA SHE',
    period: 'Summers 2021 — 2023',
    image: she,
    url: 'https://www.sewausa.org/SHE',
    blurb:
      'I turned the thing I loved most in high school into a fundraiser. Across three summers I organized and taught tennis lessons for kids, with every dollar going to the SEWA SHE Project — which funds education, healthcare, and vocational training for women and children.',
    highlight:
      'The original goal was $240, enough to sponsor one girl for a year. The lessons raised five times that.',
    stats: [
      { value: '$1,200', label: 'raised teaching tennis' },
      { value: '5', label: "girls' education funded" },
    ],
  },
  {
    name: 'Habitat for Humanity',
    period: 'Summer 2021',
    image: habitatImage,
    url: 'https://www.habitat.org/',
    blurb:
      'Hands-on work with my local Habitat branch — clearing and properly disposing of construction waste, and organizing and labeling inventory so the branch could run smoother.',
    highlight: null,
    stats: [],
  },
];

function Volunteering() {
  return (
    <Section>
      <Wrapper>
        <SectionHeading index="05" title="Volunteering" />

        <Entries>
          {orgs.map((org, i) => (
            <Entry
              key={org.name}
              $flip={i % 2 === 1}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <PhotoWrap $flip={i % 2 === 1}>
                <PhotoBacking $flip={i % 2 === 1} />
                <Photo src={org.image} alt={org.name} loading="lazy" $tilt={i % 2 === 1 ? 1.6 : -1.6} />
              </PhotoWrap>

              <Content>
                <Period>{org.period}</Period>
                <Name>{org.name}</Name>
                <Blurb>{org.blurb}</Blurb>
                {org.highlight && <Highlight>{org.highlight}</Highlight>}

                {org.stats.length > 0 && (
                  <Stats>
                    {org.stats.map((s) => (
                      <Stat key={s.label}>
                        <StatValue>{s.value}</StatValue>
                        <StatLabel>{s.label}</StatLabel>
                      </Stat>
                    ))}
                  </Stats>
                )}

                <OrgLink href={org.url} target="_blank" rel="noopener noreferrer">
                  Visit {new URL(org.url).hostname.replace('www.', '')} ↗
                </OrgLink>
              </Content>
            </Entry>
          ))}
        </Entries>
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

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;

  @media (max-width: 900px) { gap: 70px; }
`;

const Entry = styled(motion.div)`
  display: grid;
  grid-template-columns: ${({ $flip }) => ($flip ? '1.15fr 1fr' : '1fr 1.15fr')};
  gap: 64px;
  align-items: center;

  /* photo on the right for flipped entries */
  ${({ $flip }) => $flip && `
    & > *:first-child { order: 2; }
    & > *:last-child  { order: 1; }
  `}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;

    & > *:first-child { order: 1; }
    & > *:last-child  { order: 2; }
  }
`;

const PhotoWrap = styled.div`
  position: relative;
`;

/* Offset frame sitting behind the photo — gives it physical depth */
const PhotoBacking = styled.div`
  position: absolute;
  inset: 0;
  transform: translate(${({ $flip }) => ($flip ? '-16px' : '16px')}, 16px);
  border: 1px solid ${({ theme }) => theme.color.accentDeep};
  border-radius: 18px;
`;

const Photo = styled.img`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  padding: 30px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.color.lineStrong};
  box-shadow: 0 30px 80px rgba(3, 10, 22, 0.55);
  transform: rotate(${({ $tilt }) => $tilt}deg);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  ${PhotoWrap}:hover & {
    transform: rotate(0deg) scale(1.015);
  }
`;

const Content = styled.div``;

const Period = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 12px;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(28px, 3.8vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.color.ink};
  margin: 0 0 18px;
`;

const Blurb = styled.p`
  font-size: 15.5px;
  line-height: 1.75;
  color: ${({ theme }) => theme.color.inkSoft};
  margin: 0 0 14px;
  max-width: 520px;
`;

const Highlight = styled.p`
  font-size: 14.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.muted};
  border-left: 2px solid ${({ theme }) => theme.color.accent};
  padding-left: 16px;
  margin: 0 0 26px;
  max-width: 500px;
`;

const Stats = styled.div`
  display: flex;
  gap: 44px;
  margin-bottom: 26px;
`;

const Stat = styled.div``;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 600;
  font-size: clamp(30px, 3.4vw, 40px);
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.accentSky};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.color.muted};
  margin-top: 7px;
`;

const OrgLink = styled.a`
  display: inline-block;
  font-size: 14px;
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accentSky};
    border-color: ${({ theme }) => theme.color.accentSky};
  }
`;

export default Volunteering;
