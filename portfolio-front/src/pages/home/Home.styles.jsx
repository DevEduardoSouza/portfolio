import styled from "styled-components";

export const Section = styled.section`
  margin: ${(props) => props.margin || "0"};
`;

export const Skills = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  margin: 1rem 0;

  svg {
    font-size: 3rem;
    cursor: pointer;
    padding: 0%.5rem;
    transition: ${(props) => props.theme.transitions.duration};

    &:hover {
      background-color: #494949;
      border-radius: 0.2rem;
    }
  }
`;
