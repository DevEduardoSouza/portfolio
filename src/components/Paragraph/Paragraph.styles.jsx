import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) =>
    props.fontSize || props.theme.typography.paragraph.fontSize};
  line-height: ${(props) => props.theme.typography.paragraph.lineHeight};
  color: ${(props) => props.color || props.theme.colors.fontSecondary};
  padding: 0.5rem 0;
`;
