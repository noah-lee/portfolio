import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Section, H2, P } from '../styles/Styles';

import { ReactComponent as Icon } from '../assets/icon.svg';
import device from '../utils/breakpoints';

import useInView from '../hooks/use-in-view.hooks';

const About: React.FC = () => {
  const ICON_SIZE = 256;
  const ICON_COLOR = 'var(--color-white)';

  const [titleRef, titleInView] = useInView();

  return (
    <Section>
      <H2 ref={titleRef}>a little bit about myself</H2>
      <Container>
        <Icon
          fill={ICON_COLOR}
          stroke={ICON_COLOR}
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
        <AboutContainer>
          <P>
            My journey into software and web development has been an arduous
            one. I completed my <Aqua>mechanical engineering</Aqua> degree in
            2015 at McGill University and since, I have worked 6+ years as an{' '}
            <Aqua>acoustic engineer</Aqua>.
          </P>
          <P>
            In 2021, I started learning programming casually in order to
            automate a tedious task. This rapidly grew into a desire to learn
            more. Finally, with the encouragement of my friends, I decided to
            make a <Aqua>career change</Aqua>.
          </P>
          <P>
            To begin my journey, I completed a{' '}
            <Aqua>full-stack web development bootcamp</Aqua> from Concordia
            University. I have since deployed a number of personal projects I
            can be proud of and picked up new skills and technologies along the
            way.
          </P>
          <P>
            I am now ready to take the next big step and am{' '}
            <Red>seeking a full time opportunity</Red> as a developer. If you
            are searching for a{' '}
            <Aqua>self-motivated, curious and passionate</Aqua> developer to
            join your team, look no further!
          </P>
        </AboutContainer>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  margin-top: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 0.5;
  }

  @media ${device.laptop} {
    flex-direction: column;
    gap: 64px;
    > * {
      flex: 1;
    }
  }
`;

const AboutContainer = styled.div`
  padding: 32px;
  border-radius: 24px;
  color: var(--color-white);
  background-color: var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Aqua = styled.span`
  font-weight: bold;
  color: var(--color-aqua);
`;

const Red = styled.span`
  font-weight: bold;
  color: var(--color-red);
`;

export default About;
