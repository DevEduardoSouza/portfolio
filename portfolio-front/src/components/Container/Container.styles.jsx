import styled from "styled-components";

export const Container = styled.div`
  margin-left: 300px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 0px;
  }
`;
