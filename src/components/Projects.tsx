import styled from "styled-components";

import Project from "./Project";
import { H3, P } from "../styles/StyledComponents";
import device from "../utils/breakpoints";
import similify from "../assets/similify.png";
import cryptobot from "../assets/cryptobot.png";
import synthle from "../assets/synthle.png";
import openaichatbot from "../assets/openaichatbot.png";

const Projects = () => {
  const projects = [
    {
      name: "🎵 similify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget.",
      image: similify,
      isLive: true,
      liveLink: "https://similify.netlify.app/",
    },
    {
      name: "🪙 cryptocurrency trading bot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget.",
      image: cryptobot,
      isLive: false,
      liveLink: "",
    },
    {
      name: "🎹 synthle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget.",
      image: synthle,
      isLive: true,
      liveLink: "https://synthle.netlify.app/",
    },
    {
      name: "💬 openai chatbot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget.",
      image: openaichatbot,
      isLive: true,
      liveLink: "https://openai-chatbot.netlify.app/",
    },
  ];

  return (
    <Wrapper>
      <H3>projects</H3>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas
        integer eget.
      </Text>
      <Container>
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            isLive={project.isLive}
            liveLink={project.liveLink}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px 0;
`;

const Text = styled(P)`
  margin-top: 32px;
`;

const Container = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fit, 512px);
  justify-content: space-between;
  gap: 64px;

  @media only screen and ${device.desktop} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default Projects;
