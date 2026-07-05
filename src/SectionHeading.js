import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Shared editorial section heading: a small numbered label with a
// hairline rule, then a large serif title. Left-aligned on purpose.
const SectionHeading = ({ index, title, align = 'left' }) => (
  <Wrap
    align={align}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: '-80px' }}
  >
    <Kicker>
      <Num>{index}</Num>
      <Rule />
    </Kicker>
    <Title>{title}</Title>
  </Wrap>
);

const Wrap = styled(motion.div)`
  margin-bottom: 56px;
  text-align: ${({ align }) => align};
`;

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
`;

const Num = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.accentSky};
`;

const Rule = styled.span`
  height: 1px;
  width: 120px;
  background: ${({ theme }) => theme.color.lineStrong};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 600;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.ink};
  margin: 0;
`;

export default SectionHeading;
