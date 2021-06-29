import styled from 'vue-styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${props => props.theme.button.backgroundColor};
  border: 1px solid ${props => props.theme.button.borderColor};
  cursor: pointer;
  color: ${props => props.theme.button.color};
  flex-shrink: 0;
  fill: ${props => props.theme.button.color};
  cursor: pointer;
  display: inline-flex;
  font-family: ${props => props.theme.button.fontFamily};
  font-size: ${props => props.theme.button.fontSize};
  font-weight: ${props => props.theme.button.fontWeight};
  justify-content: center;
  line-height: ${props => props.theme.button.lineHeight};
  outline: transparent solid 2px;
  padding: 10px 14px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:disabled {
    opacity: 0.65;
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.button._focus.outlineColor};
    color: ${props => props.theme.button._focus.color};
    fill: ${props => props.theme.button._focus.color};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.button._focus.outlineColor};
    color: ${props => props.theme.button._hover.color};
    fill: ${props => props.theme.button._hover.color};
  }

  &.is-primary {
    background-color: ${props => props.theme.button._primary.backgroundColor};
    border: 1px solid ${props => props.theme.button._primary.borderColor};
    color: ${props => props.theme.button._primary.color};
    fill: ${props => props.theme.button._primary.color};

    &:hover {
      box-shadow: 0 0 0 2px
        ${props => props.theme.button._primary._hover.outlineColor};
      color: ${props => props.theme.button._primary._hover.color};
      fill: ${props => props.theme.button._primary._hover.color};
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${props => props.theme.button._primary._focus.outlineColor};
      color: ${props => props.theme.button._primary._focus.color};
      fill: ${props => props.theme.button._primary._focus.color};
    }
  }
`;
