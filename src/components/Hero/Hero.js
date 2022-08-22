import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  HeroBtn,
  HeroBtnSpan1,
  HeroBtnSpan2,
  HeroBtnSpan3,
  HeroBtnSpan4,
  LeftSection,
} from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I'm Mohammed
      </SectionTitle>
      <SectionText>
        Self-taught Web Application Developer with proven experience handling
        front end web applications for clients
      </SectionText>
      <HeroBtn
        onClick={() => (window.location = "https://github.com/Moe-alamodi")}
      >
        <HeroBtnSpan1 />
        <HeroBtnSpan2 />
        <HeroBtnSpan3 />
        <HeroBtnSpan4 />
        Learn More
      </HeroBtn>
    </LeftSection>
  </Section>
);

export default Hero;
