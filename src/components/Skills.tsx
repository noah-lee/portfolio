import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
} from "react-icons/si";

import { Section, H3, P } from "../styles/StyledComponents";
import device from "../utils/breakpoints";

const Skills = () => {
  return (
    <Section>
      <H3>inside my toolbox</H3>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas
        integer eget.
      </Text>
      <Container>
        <Skill>
          <SiHtml5 color="#e56027" />
          <p>HTML</p>
        </Skill>
        <Skill>
          <SiCss3 color="#279fd5" />
          CSS
        </Skill>
        <Skill>
          <SiJavascript color="#e4b423" />
          JavaScript
        </Skill>
        <Skill>
          <SiTypescript color="#0074c2" />
          TypeScript
        </Skill>
        <Skill>
          <SiReact color="#5ccfee" />
          React
        </Skill>
        <Skill>
          <SiNodedotjs color="#7cc327" />
          Node.js
        </Skill>
        <Skill>
          <SiExpress />
          Express
        </Skill>
        <Skill>
          <SiMongodb color="#66a344" />
          MongDB
        </Skill>
        <Skill>
          <SiGit color="#e44d30" />
          Git
        </Skill>
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
