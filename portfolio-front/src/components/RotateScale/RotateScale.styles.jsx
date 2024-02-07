import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";

const RotateScale = ({ color, duration, size }) => {
  const Spinner = styled.div`
    width: 100%;
    svg {
      display: block;
      margin: auto;

      color: ${(props) => color || props.theme.colors.primary};
      font-size: 2rem;
      animation: lds-dual-ring ${duration || "1.2s"} linear infinite;

      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  `;

  return (
    <Spinner size={size} duration={duration}>
      <ImSpinner2 />
    </Spinner>
  );
};

export default RotateScale;
