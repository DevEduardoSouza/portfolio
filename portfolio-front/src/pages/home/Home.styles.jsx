import styled from "styled-components";

export const Section = styled.section`
  margin: ${(props) => props.margin || "0"};
`;

export const Skills = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  margin: 1rem 0;

  svg {
    font-size: 2.5rem;
  }
`;
