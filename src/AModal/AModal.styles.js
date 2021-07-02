import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  font-family: ${props => props.theme.modal.fontFamily};
  font-size: ${props => props.theme.modal.fontSize};
  font-weight: ${props => props.theme.modal.fontWeight};
  line-height: ${props => props.theme.modal.lineHeight};
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10000;

  &.modal-enter-active,
  &.modal-leave-active {
    transition: opacity 500ms;
  }
  &.modal-enter,
  &.modal-leave-to {
    opacity: 0;
  }
`;

export const Modal = styled.div`
  background-color: ${props => props.theme.modal.modal.bgColor};
  border: ${props => props.theme.modal.modal.border};
  box-shadow: ${props => props.theme.modal.modal.boxShadow};
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  width: 100%;
  z-index: 1;

  .modal-enter-active &,
  .modal-leave-active & {
    transition: transform 500ms ease;
  }
  .modal-enter &,
  .modal-leave-to & {
    transform: translateY(-50px);
  }
`;

export const ModalHeader = styled.header`
  align-items: center;
  background-color: ${props => props.theme.modal.header.bgColor};
  border-bottom: ${props => props.theme.modal.header.borderBottom};
  display: flex;
  flex-shrink: 0;
  height: 60px;
  justify-content: flex-start;
  padding: 0 0 0 20px;
  position: relative;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  right: 10px;
`;

export const ModalTitle = styled.h2`
  color: ${props => props.theme.modal.title.color};
  font-family: ${props => props.theme.modal.title.fontFamily};
  font-size: ${props => props.theme.modal.title.fontSize};
  font-weight: ${props => props.theme.modal.title.fontWeight};
  line-height: ${props => props.theme.modal.title.lineHeight};
  margin: 0;
`;

export const ModalContent = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  min-height: 70px;
  padding: 0 25px;
  position: relative;
`;

export const ModalFooter = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.modal.footer.bgColor};
  border-top: ${props => props.theme.modal.footer.borderTop};
  display: flex;
  flex-shrink: 0;
  height: 60px;
  justify-content: flex-end;
  padding: 0 25px;

  & > * {
    margin: 0 0 0 20px;
  }
`;

export const ModalFooterButtons = styled.div`
  display: flex;
  margin: 0;

  & > * {
    margin: 0 0 0 20px;

    &:first-child {
      margin: 0;
    }
  }
`;

export const ModalOverlay = styled.div`
  background-color: ${props => props.theme.modal.overlay.bgColor};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;
