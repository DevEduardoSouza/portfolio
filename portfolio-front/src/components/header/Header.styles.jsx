import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.darkBG};

  width: 23%;
  min-width: 300px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Fade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const Profile = styled.div`
  padding: ${(props) => props.theme.spacing.large};

  width: 100%;
`;

export const ContainerImg = styled.div`
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: ${(props) => props.theme.border.large};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.border.borderRadiusRound};
    object-fit: cover;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  padding: ${(props) => props.theme.spacing.borderRadiusRound};
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Item = styled.li`
  border-radius: ${(props) => props.theme.border.borderRadiusSmall};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    &:hover {
      background: transparent;
    }
  }

  a {
    display: block;
    font-size: 1rem;
    font-weight: bold;
    padding: ${(props) => props.theme.spacing.medium};

    &:active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.small};

  position: absolute;
  left: 0;
  bottom: 0;

  a {
    padding: ${(props) => props.theme.spacing.medium};
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
