import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Text>
        <White>Hello</White> 👋
      </Text>
      <Text>
        {"I'm "}
        <Red>Noah</Red>
      </Text>
      <Text>
        a <Aqua>Web Developer</Aqua>
      </Text>
      <Text>
        from <White>Canada</White>
      </Text>
      <LinkContainer>
        <svg height={48} width={120}>
          <line
            x1={0}
            x2={120}
            y1={24}
            y2={24}
            style={{ stroke: 'var(--color-light)', strokeWidth: '4px' }}
          />
        </svg>
        <Link target="_blank" href="https://github.com/noah-lee">
          <FaGithub size={32} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/noahlee1/">
          <FaLinkedin size={32} />
        </Link>
      </LinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 96px);

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: bold;
  color: var(--color-light);
`;

const White = styled.span`
  color: var(--color-white);
`;

const Aqua = styled.span`
  color: var(--color-aqua);
`;

const Red = styled.span`
  color: var(--color-red);
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Link = styled.a`
  color: inherit;

  &:hover {
    color: var(--color-red);
  }
`;

export default Hero;
