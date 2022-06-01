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
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 color="#e56027" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 color="#279fd5" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript color="#e4b423" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#0074c2" />,
    },
    {
      name: "React",
      icon: <SiReact color="#5ccfee" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs color="#7cc327" />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#66a344" />,
    },
    {
      name: "Git",
      icon: <SiGit color="#e44d30" />,
    },
  ];

  return (
    <Section>
      <H3>inside my toolbox</H3>
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
