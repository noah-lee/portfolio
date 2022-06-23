import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { H3, P } from '../styles/Styles';

interface Props {
  name: string;
  description: string;
  image: string;
  isLive: boolean;
  liveLink: string;
}

const Project: React.FC<Props> = ({
  name,
  description,
  image,
  isLive,
  liveLink,
}) => {
  return (
    <Wrapper>
      {isLive ? (
        <LiveLink href={liveLink} target="_blank">
          <H3>{name}</H3>
          <FaExternalLinkAlt />
        </LiveLink>
      ) : (
        <H3>{name}</H3>
      )}
      <Img src={image} />
      <P>{description}</P>
      {/* <LearnMoreLink>
        <p>Learn more</p>
      </LearnMoreLink> */}
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

const LiveLink = styled.a`
  align-self: flex-start;

  text-decoration: none;
  color: inherit;

  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    color: var(--color-aqua);
    cursor: pointer;
  }
`;

// const LearnMoreLink = styled.a`
//   padding: 16px;
//   background-color: var(--color-black);
//   border-radius: 16px;
//   align-self: flex-start;

//   &:hover {
//     background-color: var(--color-aqua);
//     color: var(--color-dark);
//     cursor: pointer;
//   }
// `;

export default Project;
