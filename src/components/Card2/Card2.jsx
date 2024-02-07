import styled from "styled-components";
import Icon from "../Icon/Icon";
import { Subtitle } from "../Title/Title.styles";
import { Link } from "react-router-dom";

const Card2 = ({ icon, title, link }) => {
  const CardContainer = styled.div`
    flex: 1;
    min-width: 204px;
    height: 179px;
    border: 1px solid #d6d6d6;
    background-color: #44444430;
    padding: 1rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      display: block;
      margin-top: 1rem;
      text-decoration: underline;
    }
  `;

  return (
    <CardContainer>
      <Icon icon={icon} />

      <div>
        <Subtitle fontSize="1rem">{title.toUpperCase()}</Subtitle>
        <Link to={link} target="_blank">
          {`link para meu ${title}`}
        </Link>
      </div>
    </CardContainer>
  );
};

export default Card2;
