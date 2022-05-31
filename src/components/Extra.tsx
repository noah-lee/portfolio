import { ReactElement } from "react";
import styled from "styled-components";

import { H4, P } from "../styles/StyledComponents";
import device from "../utils/breakpoints";

type ExtraType = {
  name: string;
  description: string;
  images: [string, string];
  links: { icon: ReactElement; url: string }[];
  isReverse: boolean;
};

const test: string = device.laptop;

const Extra = ({ name, description, images, links, isReverse }: ExtraType) => {
  return (
    <Wrapper isReverse={isReverse} laptop={device.laptop}>
      <TextDiv>
        <H4>{name}</H4>
        <P>{description}</P>
        {!!links.length && (
          <Links>
            <svg height={48} width={96}>
              <line
                x1={0}
                x2={96}
                y1={24}
                y2={24}
                style={{ stroke: "var(--color-light)", strokeWidth: "4px" }}
              />
            </svg>
            {links.map((link) => (
              <SocialLink key={link.url} target="_blank" href={link.url}>
                {link.icon}
              </SocialLink>
            ))}
          </Links>
        )}
      </TextDiv>
      {images.map((image) => (
        <ImgDiv key={image}>
          <Img src={image} />
        </ImgDiv>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isReverse: boolean; laptop: string }>`
  margin-top: 64px;

  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  > * {
    flex: calc(1 / 3);
  }

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const SocialLink = styled.a`
  color: inherit;
  height: 32px;

  &:hover {
    color: var(--color-red);
  }
`;

const ImgDiv = styled.div``;

const Img = styled.img`
  width: 100%;
  max-width: 512px;
  border-radius: 8px;
`;

export default Extra;
