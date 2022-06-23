import similify from '../assets/projects/similify.png';
import cryptobot from '../assets/projects/cryptobot.png';
import synthle from '../assets/projects/synthle.png';
import openaichatbot from '../assets/projects/openaichatbot.png';

interface Project {
  name: string;
  description: string;
  image: string;
  isLive: boolean;
  liveLink: string;
}

const projects: Project[] = [
  {
    name: '🎵 similify',
    description:
      'Find similar music with BPM and key filters using Similify. Built to help musicians and DJs find inspiration and reference tracks. Full-stack client-server web application built with React, Node.js and Express, and powered by Spotify API.',
    image: similify,
    isLive: true,
    liveLink: 'https://similify.netlify.app/',
  },
  {
    name: '🪙 cryptocurrency trading bot',
    description:
      'Automated cryptocurrency trading bot leveraging RESTful and Web Socket API connection to exchanges (NDAX, FTX). Optimized to reduce API requests and avoid exceeding API rate limits. Built with Node.js.',
    image: cryptobot,
    isLive: false,
    liveLink: '',
  },
  {
    name: '🎹 synthle',
    description:
      "Learning sound design doesn't need to be complicated. Synthle is a fully featured web synthesizer that is free and beginner friendly. Curious about what anything does? Hover over and get a quick tooltip! Built with React and Web Audio API.",
    image: synthle,
    isLive: true,
    liveLink: 'https://synthle.netlify.app/',
  },
  {
    name: '💬 openai chatbot',
    description:
      'Want to know what it feels like to chat with a friendly AI? This chatbot is configured to simulate a conversation with a friend. Curie, daVinci, Babbage and Ada are waiting for you to start a conversation! Built with React and OpenAI API.',
    image: openaichatbot,
    isLive: true,
    liveLink: 'https://openai-chatbot.netlify.app/',
  },
];

export default projects;
