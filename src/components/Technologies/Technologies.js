import React from "react";
import { DiReact, DiDatabase, DiSwift } from "react-icons/di";
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
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide variety of different technologies across
      multiple platforms.
    </SectionText>
    <List>
      <ListItem>
        <DiSwift size="3rem" />
        <ListTitle>Mobile</ListTitle>
        <ListContainer>
          <ListParagraph>
            Swift
            <br />
            Kotlin
            <br />
            Ionic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span>
          <DiDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
        </span>
        <ListContainer>
          <ListParagraph>
            Oracle
            <br />
            Sql Server
            <br />
            MySQL
            <br />
            Hadoop HDFS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span>
          <DiReact size="3rem" />
          <ListTitle>Web</ListTitle>
        </span>
        <ListContainer>
          <ListParagraph>
            React.js
            <br />
            Vue.js
            <br />
            Laravel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
