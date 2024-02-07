import styled from "styled-components";

const StyledSection = styled.section`
  margin: ${(props) => props.margin || "0"};
`;

const Section = ({ children, margin }) => {
  return <StyledSection margin={margin}>{children}</StyledSection>;
};

export default Section;