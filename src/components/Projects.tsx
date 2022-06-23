import React from 'react';
import styled from 'styled-components';

import Project from './Project';
import { Section, H2, P } from '../styles/Styles';
import projects from '../data/projects';
import device from '../utils/breakpoints';

const Projects = () => {
  return (
    <Section>
      <H2>what i&apos;ve made</H2>
      <Text>
        {
          "Working on personal passion projects has been my favorite way to learn. When building applications, I take inspiration from my own struggles. Whether it's shortening a time-consuming task or helping teach a difficult tool, I want to simplify and help others."
        }
      </Text>
      <Container>
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            isLive={project.isLive}
            liveLink={project.liveLink}
          />
        ))}
      </Container>
    </Section>
  );
};

const Text = styled(P)`
  margin-top: 32px;
`;

const Container = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fit, 512px);
  justify-content: space-between;
  gap: 64px;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default Projects;
