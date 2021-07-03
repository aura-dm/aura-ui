import styled from 'vue-styled-components';

export const DialogWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const DialogContent = styled.div`
  width: 100%;

  .dialog-enter-active &,
  .dialog-leave-active & {
    transition: opacity 500ms ease, transform 500ms ease;
  }

  .dialog-enter &,
  .dialog-leave-to & {
    opacity: 0;
    transform: translateY(-50px);
  }
`;
