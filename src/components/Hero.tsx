import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { H2 } from "../styles/StyledComponents";

const Hero = () => {
  const me = {
    name: "Noah Lee",
  };

  return (
    <Wrapper>
      <H2>
        <White>Hello</White> 👋
      </H2>
      <H2>
        I'm <Red>Noah</Red>
      </H2>
      <H2>
        a <Aqua>Web Developer</Aqua> 🌐
      </H2>
      <H2>
        from <White>Canada</White> 🍁
      </H2>
      <Links>
        <svg height={48} width={120}>
          <line
            x1={0}
            x2={120}
            y1={24}
            y2={24}
            style={{ stroke: "var(--color-light)", strokeWidth: "4px" }}
          />
        </svg>
        <Link target="_blank" href="https://github.com/noah-lee">
          <FaGithub size={32} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/noahlee1/t">
          <FaLinkedin size={32} />
        </Link>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 96px);

  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Links = styled.div`
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
