import styled from "styled-components";
import { H2 } from "../styles/StyledComponents";

import { ReactComponent as Icon } from "../assets/icon.svg";
import device from "../utils/breakpoints";

const AboutMe = () => {
  const ICON_SIZE = 256;

  return (
    <Wrapper>
      <SectionTitle>about me</SectionTitle>
      <Container>
        <Icon
          fill="var(--color-white)"
          stroke="var(--color-white)"
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis
          egestas integer eget. Turpis nunc eget lorem dolor sed viverra ipsum
          nunc. Mollis nunc sed id semper. Sem nulla pharetra diam sit.
          Adipiscing bibendum est ultricies integer quis auctor elit sed
          vulputate. Magna etiam tempor orci eu lobortis elementum nibh. Egestas
          dui id ornare arcu odio ut sem nulla. Id porta nibh venenatis cras sed
          felis eget velit aliquet. Tincidunt augue interdum velit euismod in
          pellentesque massa placerat. Urna nec tincidunt praesent semper
          feugiat nibh. Bibendum at varius vel pharetra vel turpis nunc. Risus
          pretium quam vulputate dignissim suspendisse in est ante in. Enim
          tortor at auctor urna nunc id.
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 64px;
`;

const SectionTitle = styled(H2)``;

const Container = styled.div`
  margin-top: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 0.5;
  }

  @media only screen and ${device.mobile} {
    flex-direction: column;
    gap: 64px;
    > * {
      flex: 1;
    }
  }
`;

const Text = styled.p`
  line-height: 1.5rem;
  padding: 32px;
  border-radius: 24px;
  background-color: var(--color-light);
`;

export default AboutMe;
