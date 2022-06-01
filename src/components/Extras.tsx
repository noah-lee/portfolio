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
        "I am a long time bedroom music producer and guitarist. In 2020, I decided to open an ecommerce store to sell my music and related services. My proudest accomplishments so far have been reaching over 2 million streams working with talented artists and turning my passion into a profitable side business during the pandemic.",
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
      name: "keyboard designer",
      description:
        "Custom mechanical keyboards are where my creativity can take physical form. I design everything from the electric schematic and Printed Circuit Board (PCB) to the physical plate and case. I have worked with local and international manufacturers for small batch production. As a work in progress, I hope to one day start my own keyboard brand.",
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
