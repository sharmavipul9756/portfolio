import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi there,<br/> Hiiii I'm Vipul Sharma
      </SectionTitle>
      <SectionText>
      🔭 I’m currently working on React-redux
🌱 I’m currently learning Reactjs and Django
💬 Ask me about Node and React
😄 Pronouns: Energetic
⚡ Fun fact: I don't kill spiders because we both build web
      </SectionText>
      <Button onClick={()=> {window.location = 'https://github.com/sharmavipul9756'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;