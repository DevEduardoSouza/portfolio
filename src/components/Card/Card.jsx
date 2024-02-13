import React from "react";
import { StyledCard, CardContent } from "./Card.styles";
import { Paragraph } from "../Paragraph/Paragraph.styles";
import { Subtitle } from "../Title/Title.styles";

export const Card = ({
  title,
  content,
  imageUrl,
  url,
  isOutside,
  positionImg,
}) => {
  return (
    <StyledCard href={url} target={isOutside ? "_blank" : ""}>
      <img src={imageUrl} alt="Teste" style={{ objectPosition: positionImg }} />
      <CardContent>
        <Subtitle fontSize="1.2rem">{title}</Subtitle>
        <Paragraph>{content}</Paragraph>
      </CardContent>
    </StyledCard>
  );
};
