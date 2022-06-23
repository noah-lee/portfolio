import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
} from 'react-icons/si';

import { ImDatabase } from 'react-icons/im';

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript color="#e4b423" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#0074c2" />,
  },
  {
    name: 'React',
    icon: <SiReact color="#5ccfee" />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs color="#7cc327" />,
  },
  {
    name: 'Express',
    icon: <SiExpress />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb color="#66a344" />,
  },
  {
    name: 'SQL',
    icon: <ImDatabase color="var(--color-white)" />,
  },
  {
    name: 'Git',
    icon: <SiGit color="#e44d30" />,
  },
];

export default skills;
