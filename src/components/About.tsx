import styled from "styled-components";
import { Section, H3, P } from "../styles/StyledComponents";

import { ReactComponent as Icon } from "../assets/icon.svg";
import device from "../utils/breakpoints";

const About = () => {
  const ICON_SIZE = 256;
  const ICON_COLOR = "var(--color-white)";

  return (
    <Section>
      <H3>a little bit about myself</H3>
      <Container>
        <Icon
          fill={ICON_COLOR}
          stroke={ICON_COLOR}
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
        <AboutText>
          {/* <P>
            My journey into software and web development has been an arduous
            one. As a teenager, I had played around with Arduinos and even took
            a few coding classes, but it was never more than a hobby. I studied{" "}
            <Aqua>mechanical engineering</Aqua> at McGill University and since,
            I have worked 6+ years as an <Aqua>acoustic engineer</Aqua>.
          </P>
          <P>
            This changed in 2021 when I started building an application to
            automate a tedious task. I spent most of my evenings learning and
            coding. I would even daydream about my project. Finally, with the
            encouragement of my developer friends, I decided to become a{" "}
            <Aqua>career changer</Aqua>.
          </P> */}
          {/* <P>
            To begin my journey, I completed a{" "}
            <Aqua>full-stack web development bootcamp</Aqua> from Concordia
            University. The program gave me the tools needed to better
            materialize my ideas. I have since deployed a number of personal
            projects I can be proud of and picked up new skills and technologies
            along the way.
          </P> */}
          <P>
            My journey into software and web development has been an arduous
            one. I completed my <Aqua>mechanical engineering</Aqua> degree in
            2015 at McGill University and since, I have worked 6+ years as an{" "}
            <Aqua>acoustic engineer</Aqua>.
          </P>
          <P>
            In 2021, I started learning programming casually in order to
            automate a tedious task. This rapidly grew into a desire to learn
            more. Finally, with the encouragement of my friends, I decided to
            make a <Aqua>career change</Aqua>.
          </P>
          <P>
            To begin my journey, I completed a{" "}
            <Aqua>full-stack web development bootcamp</Aqua> from Concordia
            University. I have since deployed a number of personal projects I
            can be proud of and picked up new skills and technologies along the
            way.
          </P>
          {/* <P>
            Whether it's at school, work, or in my personal life, the most
            valuable lesson I've learned is to trust my{" "}
            <Aqua>curiosity and passion for learning</Aqua>.
          </P> */}
          <P>
            I am now ready to take the next big step and am{" "}
            <Red>seeking a full time opportunity</Red> as a developer. If you
            are searching for a{" "}
            <Aqua>self-motivated, curious and passionate</Aqua> developer to
            join your team, look no further!
          </P>
        </AboutText>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  margin-top: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 0.5;
  }

  @media ${device.laptop} {
    flex-direction: column;
    gap: 64px;
    > * {
      flex: 1;
    }
  }
`;

const AboutText = styled.div`
  padding: 32px;
  border-radius: 24px;
  color: var(--color-white);
  background-color: var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Aqua = styled.span`
  font-weight: bold;
  color: var(--color-aqua);
`;

const Red = styled.span`
  font-weight: bold;
  color: var(--color-red);
`;

export default About;
