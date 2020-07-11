import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.toast.bgColor};
  border: ${props => props.theme.toast.border};
  box-shadow: ${props => props.theme.toast.boxShadow};
  display: flex;
  padding: 15px 15px 15px 20px;
  width: 340px;

  &.error {
    fill: ${props => props.theme.toast.errorColor};
  }

  &.info {
    fill: ${props => props.theme.toast.infoColor};
  }

  &.success {
    fill: ${props => props.theme.toast.successColor};
  }

  .icon {
    margin: 0 20px 0 0;
  }
`;

export const ToastContent = styled.div`
  border-left: ${props => props.theme.toast.content.borderLeft};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 10px 0 20px;
`;

export const ToastText = styled.p`
  color: ${props => props.theme.toast.text.color};
  font-family: ${props => props.theme.toast.text.fontFamily};
  font-size: ${props => props.theme.toast.text.fontSize};
  font-weight: ${props => props.theme.toast.text.fontWeight};
  line-height: ${props => props.theme.toast.text.lineHeight};
  margin: 0;
`;

export const ToastTitle = styled.h3`
  color: ${props => props.theme.toast.title.color};
  font-family: ${props => props.theme.toast.title.fontFamily};
  font-size: ${props => props.theme.toast.title.fontSize};
  font-weight: ${props => props.theme.toast.title.fontWeight};
  line-height: ${props => props.theme.toast.title.lineHeight};
  margin: 0 0 2px;
`;
