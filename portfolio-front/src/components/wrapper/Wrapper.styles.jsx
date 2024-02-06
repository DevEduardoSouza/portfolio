import styled from "styled-components";

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: ${(props) => props.theme.breakpoints.sm};
  margin: auto;
  padding: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.breakpoints.md};
    width: 95%;
    margin: auto;
    padding: 0;
  }
`;
