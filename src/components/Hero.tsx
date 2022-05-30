import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ReactComponent as Icon } from "../assets/icon.svg";

import { H3 } from "../styles/StyledComponents";

const Hero = () => {
  const me = {
    name: "Noah Lee",
  };

  return (
    <Wrapper>
      {/* <Icon
        fill="var(--color-white)"
        stroke="var(--color-white)"
        height={192}
        width={192}
      /> */}
      <H3>
        <White>Hello</White> 👋
      </H3>
      <H3>
        I'm <Red>Noah</Red>
      </H3>
      <H3>
        a <Aqua>Web🌐 Developer</Aqua>
      </H3>
      <H3>
        from <White>Canada</White> 🍁
      </H3>
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
  padding: 128px 0;

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
