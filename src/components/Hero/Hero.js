import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

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
      <Button
        onClick={() => (window.location = "https://github.com/Moe-alamodi")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
