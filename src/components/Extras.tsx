import React from 'react';

import Extra from './Extra';

import { Section, H2 } from '../styles/Styles';
import extras from '../data/extras';

const Extras: React.FC = () => {
  return (
    <Section>
      <H2>{"when i'm not coding"}</H2>
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
