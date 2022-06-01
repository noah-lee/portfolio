import styled from "styled-components";

import Project from "./Project";
import { Section, H3, P } from "../styles/StyledComponents";
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
        "Find similar music with BPM and key filters using Similify. Built to help musicians and DJs find inspiration and reference tracks. Full-stack client-server web application built with React, Node.js and Express, and powered by Spotify API.",
      image: similify,
      isLive: true,
      liveLink: "https://similify.netlify.app/",
    },
    {
      name: "🪙 cryptocurrency trading bot",
      description:
        "Automated cryptocurrency trading bot leveraging RESTful and Web Socket API connection to exchanges (NDAX, FTX). Optimized to reduce API requests and avoid exceeding API rate limits. Built with Node.js.",
      image: cryptobot,
      isLive: false,
      liveLink: "",
    },
    {
      name: "🎹 synthle",
      description:
        "Learning sound design does not need to be complicated. Synthle is a fully featured web synthesizer that is free and beginner friendly. Curious about the controls? Hover over and get a quick tooltip! Built with React and Web Audio API.",
      image: synthle,
      isLive: true,
      liveLink: "https://synthle.netlify.app/",
    },
    {
      name: "💬 openai chatbot",
      description:
        "Want to know what it feels like to chat with a friendly AI? This chatbot is configured to simulate a conversation with a friend. Curie, daVinci, Babbage and Ada are waiting for you to start a conversation! Built with React and OpenAI API.",
      image: openaichatbot,
      isLive: true,
      liveLink: "https://openai-chatbot.netlify.app/",
    },
  ];

  return (
    <Section>
      <H3>what i've made</H3>
      <Text>
        Working on personal passion projects has been my favorite way to learn.
        I take inspiration from my own struggles and build applications to
        simplify. Whether it's shortening a time-consuming task or helping teach
        a difficult tool, I want to provide value to as many as possible.
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
