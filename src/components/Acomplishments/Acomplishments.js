import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { AcoplishmentsData } from "../../constants/constants";

const Acomplishments = () => (
  <Section id="acomplishment">
    <SectionTitle> Professional Achievements</SectionTitle>
    <Boxes>
      {AcoplishmentsData.map((box, index) => (
        <Box key={index}>
          <BoxNum>{box.title}</BoxNum>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
