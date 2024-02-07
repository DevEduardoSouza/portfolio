import React from "react";
import { StyledFooter } from "./Footer.styles.jsx";
import { Paragraph } from "../Paragraph/Paragraph.styles.jsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <span>© 2024 Eduardo Souza</span>
      <Paragraph>
        Desenvolvido por Eduardo Souza usando template do Manuel Ernesto ⚡️
      </Paragraph>
    </StyledFooter>
  );
};
