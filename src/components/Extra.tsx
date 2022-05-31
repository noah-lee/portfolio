import styled from "styled-components";

import { H3, P } from "../styles/StyledComponents";

const Extra = () => {
  const musicGridTemplate = `"left left center center right right"
  "left left center center right right"`;

  return (
    <Wrapper>
      <H3>when i'm not coding</H3>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis
          egestas integer eget.
        </Text>
        <Grid
          style={{
            gridTemplate: musicGridTemplate,
          }}
        >
          <Box style={{ backgroundColor: "red" }} area="left" />
          <Box style={{ backgroundColor: "blue" }} area="center" />
          <Box style={{ backgroundColor: "yellow" }} area="right" />
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px 0;
`;

const Container = styled.div`
  margin-top: 32px;
  height: 256px;

  display: flex;
  align-items: center;
  gap: 32px;
`;

const Text = styled(P)`
  flex: 30%;
`;

const Grid = styled.div`
  flex: 70%;
  height: 100%;

  display: grid;
  gap: 32px;
`;

const Box = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
`;

export default Extra;
