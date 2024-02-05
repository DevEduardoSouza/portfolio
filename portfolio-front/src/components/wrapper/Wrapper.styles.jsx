import styled from "styled-components";

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: ${(props) => props.theme.breakpoints.lg};
  width: 90%;
  margin: 0 auto;
`;
