import styled from "styled-components";
import { H3, P } from "../styles/StyledComponents";

import { ReactComponent as Icon } from "../assets/icon.svg";
import device from "../utils/breakpoints";

const AboutMe = () => {
  const ICON_SIZE = 256;
  const ICON_COLOR = "var(--color-white)";

  return (
    <Wrapper>
      <H3>about me</H3>
      <Container>
        <Icon
          fill={ICON_COLOR}
          stroke={ICON_COLOR}
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
          felis eget velit aliquet.
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px 0;
`;

const Container = styled.div`
  margin-top: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 0.5;
  }

  @media only screen and ${device.laptop} {
    flex-direction: column;
    gap: 64px;
    > * {
      flex: 1;
    }
  }
`;

const Text = styled(P)`
  padding: 32px;
  border-radius: 24px;
  background-color: var(--color-light);
`;

export default AboutMe;
