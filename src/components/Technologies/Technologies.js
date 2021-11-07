import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import {SiAmazonaws} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I am a full stack developer having experience in react and node
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with<br/>React js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience with<br/>Node js and database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAmazonaws size="3rem"/>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Experience with<br/>AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
