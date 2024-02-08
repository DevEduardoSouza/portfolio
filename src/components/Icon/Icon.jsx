import styled from "styled-components";

const Icon = ({ icon, size, color }) => {
  const IconStyle = styled.div`
    i {
      font-size: ${size || "2rem"};
      color: ${color || "#ffff"};
    }
  `;

  return (
    <IconStyle>
      <i title={icon} className={`bi bi-${icon}`}></i>
    </IconStyle>
  );
};

export default Icon;
