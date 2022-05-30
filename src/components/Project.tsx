import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

import { H4, P } from "../styles/StyledComponents";
import { FC } from "react";

const Project: FC<{
  name: string;
  description: string;
  image: string;
  isLive: boolean;
  liveLink: string;
}> = ({ name, description, image, isLive, liveLink }) => {
  return (
    <Wrapper>
      <Img src={image} />
      {isLive ? (
        <TitleLink href={liveLink} target="_blank">
          <H4>{name}</H4>
          <FaExternalLinkAlt />
        </TitleLink>
      ) : (
        <H4>{name}</H4>
      )}
      <P>{description}</P>
      <LearnMoreLink>
        <p>Learn more</p>
      </LearnMoreLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 512px;
  border-radius: 8px;

  align-self: center;
`;

const TitleLink = styled.a`
  align-self: flex-start;

  text-decoration: none;
  color: inherit;

  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    color: var(--color-red);
    cursor: pointer;
  }
`;

const LearnMoreLink = styled.a`
  padding: 16px;
  background-color: var(--color-light);
  border-radius: 16px;
  align-self: flex-start;

  &:hover {
    background-color: var(--color-aqua);
    color: var(--color-dark);
    cursor: pointer;
  }
`;

export default Project;
