import styled from 'vue-styled-components';
import ATypography from '../ATypography';

export const WrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TextInput = styled(ATypography)`
  background-color: ${props => props.theme.textField.input.bgColor};
  border: none;
  border-bottom: ${props => props.theme.textField.input.borderBottom};
  border-radius: ${props => props.theme.textField.input.borderRadius};
  color: ${props => props.theme.textField.input.color};
  display: flex;
  margin: 0;
  max-height: ${props => props.theme.textField.input.maxHeight};
  padding: 6px 12px;
  position: relative;
  resize: none;

  &:focus {
    background-color: ${props => props.theme.textField.input._focus.bgColor};
    border-bottom: ${props => props.theme.textField.input._focus.borderBottom};
    box-shadow: ${props => props.theme.textField.input._focus.boxShadow};
    color: ${props => props.theme.textField.input._focus.color};
    outline: none;
  }
`;

export const TextLabel = styled(ATypography)`
  color: ${props => props.theme.textField.label.color};
  margin: 0 0 3px;

  .is-focused & {
    color: ${props => props.theme.textField.label._focus.color};
  }
`;

export const TextErrors = styled(ATypography)`
  color: ${props => props.theme.textField.errors.color};
  margin: 5px 0 0;
`;
