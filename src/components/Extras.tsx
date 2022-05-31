import { ReactElement } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

import Extra from "./Extra";

import { Section, H3 } from "../styles/StyledComponents";
import guitar from "../assets/guitar.png";
import studio from "../assets/studio.png";
import keyboards from "../assets/keyboards.png";
import design from "../assets/design.png";

import { ReactComponent as Beatstars } from "../assets/beatstars.svg";

const Extras = () => {
  const extras: {
    name: string;
    description: string;
    images: [string, string];
    links: { icon: ReactElement; url: string }[];
    isReverse: boolean;
  }[] = [
    {
      name: "music producer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Acturpis egestas integer eget.",
      images: [guitar, studio],
      links: [
        {
          icon: <FaYoutube size={32} />,
          url: "https://www.youtube.com/c/enoahmusic",
        },
        {
          icon: <Beatstars width={32} height={32} />,
          url: "https://www.beatstars.com/enoah",
        },
        {
          icon: <FaInstagram size={32} />,
          url: "https://www.instagram.com/enoahmusic/",
        },
      ],
      isReverse: false,
    },
    {
      name: "keyboad designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Acturpis egestas integer eget.",
      images: [keyboards, design],
      links: [],
      isReverse: true,
    },
  ];

  return (
    <Section>
      <H3>when i'm not coding</H3>
      {extras.map((extra) => (
        <Extra
          key={extra.name}
          name={extra.name}
          description={extra.description}
          images={extra.images}
          links={extra.links}
          isReverse={extra.isReverse}
        />
      ))}
    </Section>
  );
};

export default Extras;
