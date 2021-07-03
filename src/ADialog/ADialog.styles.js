import styled from 'vue-styled-components';

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
