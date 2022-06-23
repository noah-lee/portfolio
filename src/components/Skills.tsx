import React from 'react';
import styled from 'styled-components';

import { Section, H2, P } from '../styles/Styles';
import skills from '../data/skills';
import device from '../utils/breakpoints';

const Skills: React.FC = () => {
  return (
    <Section>
      <H2>inside my toolbox</H2>
      <Text>
        This is an evergrowing list of tools I have acquired through the
        bootcamp and personal projects.
      </Text>
      <Container>
        {skills.map((skill) => (
          <Skill key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </Skill>
        ))}
      </Container>
    </Section>
  );
};

const Text = styled(P)`
  margin-top: 32px;
`;

const Container = styled.ul`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fit, 192px);
  justify-content: space-between;
  gap: 32px;

  @media ${device.tablet} {
    justify-content: center;
  }
`;

const Skill = styled.li`
  padding: 16px;
  border-radius: 16px;
  background-color: var(--color-black);

  display: flex;
  align-items: center;
  gap: 16px;
`;

export default Skills;
