import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Subtitle } from "../Title/Title.styles";
import { Link } from "react-router-dom";
import { Paragraph } from "../Paragraph/Paragraph.styles";

const Card2 = ({ icon, title, link, backgroundColor, description }) => {
  const CardContainer = styled.div`
    flex: 1;
    min-width: 210px;
    height: 250px;
    border: 1px solid #d6d6d6;

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      display: block;
      margin-top: 1rem;
      text-decoration: underline;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      /* background-color: rebeccapurple; */
    }
  `;

  const BgIcon = styled.div`
    width: 100%;
    background-color: ${backgroundColor};
    border-radius: 0.5rem 0.5rem 0 0;
    min-height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CardContent = styled.div`
    padding: 1rem;
  `;

  return (
    <CardContainer>
      <BgIcon>
        <Icon icon={icon} />
      </BgIcon>

      <CardContent>
        <Subtitle fontSize="1rem">{title}</Subtitle>
        <Paragraph>{description}</Paragraph>
        <Link to={link} target="_blank">
          {`link para meu ${title}`}
        </Link>
      </CardContent>
    </CardContainer>
  );
};

export default Card2;
