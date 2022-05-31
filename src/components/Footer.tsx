import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { P } from "../styles/StyledComponents";

const Footer = () => {
  return (
    <Wrapper>
      <FooterLink target="_blank" href="https://github.com/noah-lee">
        <FaGithub />
        <P>GitHub</P>
      </FooterLink>
      <FooterLink target="_blank" href="https://www.linkedin.com/in/noahlee1/">
        <FaLinkedin />
        <P>LinkedIn</P>
      </FooterLink>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 96px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: var(--color-aqua);
    cursor: pointer;
  }
`;

export default Footer;
