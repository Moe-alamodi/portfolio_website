import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { VscTools } from "react-icons/vsc";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have built up a diverse range of skills and technologies in the web
      development industry, which helps me to transfer mock-up designs into live
      web applications.{" "}
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscTools size="3rem" />
        <ListContainer>
          <ListTitle>Toolkits</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, GitHub, Gitlab, NPM, Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
