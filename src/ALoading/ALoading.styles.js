import styled, { keyframes } from 'vue-styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const Loader = styled.div`
  margin: 0 auto;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export const SvgImage = styled.svg`
  animation: ${rotate} 2s linear infinite;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  stroke: #000000;
  top: 0;
  transform-origin: center center;
`;

export const CirclePath = styled.circle`
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke: ${props => props.theme.loading.bgColor};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 3px;
`;
