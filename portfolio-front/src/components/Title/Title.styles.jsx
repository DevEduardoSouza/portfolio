import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) =>
    props.fontSize || props.theme.typography.heading.fontSize};
  font-weight: ${(props) =>
    props.fontWeight || props.theme.typography.heading.fontWeight};
`;

export const Subtitle = styled.h2`
  font-size: ${(props) =>
    props.fontSize || props.theme.typography.heading.fontSize};
`;
