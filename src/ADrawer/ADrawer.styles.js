import styled from 'vue-styled-components';

export const Drawer = styled.div`
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  .drawer-enter-active &,
  .drawer-leave-active & {
    transition: transform 500ms ease;
  }

  .drawer-enter &,
  .drawer-leave-to & {
    transform: translateX(100%);
  }
`;
