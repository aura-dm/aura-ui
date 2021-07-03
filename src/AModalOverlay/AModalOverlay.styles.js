import styled from 'vue-styled-components';

export const ModalOverlay = styled('div')`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
`;

export const Overlay = styled('div', { transitionName: String })`
  background-color: ${props => props.theme.modalOverlay.bgColor};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  .${({ transitionName }) => transitionName}-enter-active &,
  .${({ transitionName }) => transitionName}-leave-active & {
    transition: opacity 500ms;
  }

  .${({ transitionName }) => transitionName}-enter &,
  .${({ transitionName }) => transitionName}-leave-to & {
    opacity: 0;
  }
`;
