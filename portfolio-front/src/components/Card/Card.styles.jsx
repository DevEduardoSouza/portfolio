import styled from "styled-components";

export const StyledCard = styled.a`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-block: 2rem;
  gap: ${(props) => props.theme.spacing.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 90%;
  }

  img {
    width: 220px;
    aspect-ratio: 25/12;
    object-fit: cover;
    border-radius: ${(props) => props.theme.border.borderRadiusSmall};
    object-position: top center;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      aspect-ratio: 25/14;
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
`;
