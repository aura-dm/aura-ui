import styled from 'vue-styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${props => props.theme.iconButton.backgroundColor};
  border: 1px solid ${props => props.theme.iconButton.borderColor};
  border-radius: 20px;
  cursor: pointer;
  color: ${props => props.theme.iconButton.color};
  flex-shrink: 0;
  fill: ${props => props.theme.iconButton.color};
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  outline: transparent solid 2px;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-in-out;
  width: 40px;

  &:disabled {
    opacity: 0.65;
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.iconButton._focus.outlineColor};
    color: ${props => props.theme.iconButton._focus.color};
    fill: ${props => props.theme.iconButton._focus.color};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.iconButton._focus.outlineColor};
    color: ${props => props.theme.iconButton._hover.color};
    fill: ${props => props.theme.iconButton._hover.color};
  }

  &.is-primary {
    background-color: ${props =>
      props.theme.iconButton._primary.backgroundColor};
    border: 1px solid ${props => props.theme.iconButton._primary.borderColor};
    color: ${props => props.theme.iconButton._primary.color};
    fill: ${props => props.theme.iconButton._primary.color};

    &:hover {
      box-shadow: 0 0 0 2px
        ${props => props.theme.iconButton._primary._hover.outlineColor};
      color: ${props => props.theme.iconButton._primary._hover.color};
      fill: ${props => props.theme.iconButton._primary._hover.color};
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${props => props.theme.iconButton._primary._focus.outlineColor};
      color: ${props => props.theme.iconButton._primary._focus.color};
      fill: ${props => props.theme.iconButton._primary._focus.color};
    }
  }
`;
