import styled from 'vue-styled-components';
import ATypography from '../ATypography';

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

export const ToastText = styled(ATypography)`
  color: ${props => props.theme.toast.text.color};
  margin: 0;
`;

export const ToastTitle = styled(ATypography)`
  color: ${props => props.theme.toast.title.color};
  margin: 0 0 5px;
`;
