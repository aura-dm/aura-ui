import styled from 'vue-styled-components';

export const WrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TextInput = styled.input`
  background-color: ${props => props.theme.textField.input.bgColor};
  border: ${props => props.theme.textField.input.border};
  border-radius: ${props => props.theme.textField.input.borderRadius};
  color: ${props => props.theme.textField.input.color};
  display: flex;
  font-family: ${props => props.theme.textField.input.fontFamily};
  font-size: ${props => props.theme.textField.input.fontSize};
  font-weight: ${props => props.theme.textField.input.fontWeight};
  line-height: ${props => props.theme.textField.input.lineHeight};
  padding: 7px 10px;
  position: relative;
  resize: none;

  &:focus {
    background-color: ${props => props.theme.textField.input._focus.bgColor};
    border: ${props => props.theme.textField.input._focus.border};
    box-shadow: ${props => props.theme.textField.input._focus.boxShadow};
    color: ${props => props.theme.textField.input._focus.color};
    outline: none;
  }
`;

export const TextArea = TextInput.withComponent('textarea');

export const TextLabel = styled.label`
  color: ${props => props.theme.textField.label.color};
  font-family: ${props => props.theme.textField.label.fontFamily};
  font-size: ${props => props.theme.textField.label.fontSize};
  font-weight: ${props => props.theme.textField.label.fontWeight};
  line-height: ${props => props.theme.textField.label.lineHeight};
  margin: 0 0 3px;

  .is-focused & {
    color: ${props => props.theme.textField.label._focus.color};
  }
`;

export const TextErrors = styled.p`
  color: ${props => props.theme.textField.errors.color};
  font-family: ${props => props.theme.textField.errors.fontFamily};
  font-size: ${props => props.theme.textField.errors.fontSize};
  font-weight: ${props => props.theme.textField.errors.fontWeight};
  line-height: ${props => props.theme.textField.errors.lineHeight};
  margin: 5px 0 0;
`;
