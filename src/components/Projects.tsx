import styled from "styled-components";

import { H3, H4, P } from "../styles/StyledComponents";
import device from "../utils/breakpoints";

const Projects = () => {
  return (
    <Wrapper>
      <H3>projects</H3>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas
        integer eget.
      </Text>
      <Container>
        <Project>
          <H4>Similify</H4>
        </Project>
        <Project>Hi</Project>
        <Project>Hi</Project>
        <Project>Hi</Project>
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

const Project = styled.div`
  background-color: var(--color-light);
  height: 480px;
  /* padding: 16px; */
`;

export default Projects;
