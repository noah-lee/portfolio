import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { H3, P } from '../styles/Styles';
import device from '../utils/breakpoints';

interface Props {
  name: string;
  description: string;
  images: [string, string];
  links: { icon: ReactElement; url: string }[];
  isReverse: boolean;
}

const Extra: React.FC<Props> = ({
  name,
  description,
  images,
  links,
  isReverse,
}) => {
  return (
    <Wrapper isReverse={isReverse} laptop={device.laptop}>
      <TextContainer>
        <H3>{name}</H3>
        <P>{description}</P>
        {!!links.length && (
          <LinkContainer>
            <svg height={48} width={96}>
              <line
                x1={0}
                x2={96}
                y1={24}
                y2={24}
                style={{ stroke: 'var(--color-light)', strokeWidth: '4px' }}
              />
            </svg>
            {links.map((link) => (
              <Link key={link.url} target="_blank" href={link.url}>
                {link.icon}
              </Link>
            ))}
          </LinkContainer>
        )}
      </TextContainer>
      {images.map((image) => (
        <ImgContainer key={image}>
          <Img src={image} />
        </ImgContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isReverse: boolean; laptop: string }>`
  margin-top: 64px;

  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 0.4;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Link = styled.a`
  color: inherit;
  height: 32px;

  &:hover {
    color: var(--color-red);
  }
`;

const ImgContainer = styled.div`
  flex: 0.3;
`;

const Img = styled.img`
  width: 100%;
  max-width: 512px;
  border-radius: 8px;
`;

export default Extra;
