import styled from 'vue-styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background-color: ${props => props.theme.iconButton.backgroundColor};
  border: 1px solid ${props => props.theme.iconButton.borderColor};
  border-radius: 20px;
  cursor: pointer;
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

  &.is-plain {
    background-color: transparent;
    border: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.iconButton._focus.outlineColor};
    fill: ${props => props.theme.iconButton._focus.color};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.iconButton._focus.outlineColor};
    fill: ${props => props.theme.iconButton._hover.color};
  }

  &.is-primary {
    background-color: ${props =>
      props.theme.iconButton._primary.backgroundColor};
    border: 1px solid ${props => props.theme.iconButton._primary.borderColor};
    fill: ${props => props.theme.iconButton._primary.color};

    &.is-plain {
      background-color: transparent;
      border: none;
      fill: ${props => props.theme.iconButton._primary._plain.color};
    }

    &:hover {
      box-shadow: 0 0 0 2px
        ${props => props.theme.iconButton._primary._hover.outlineColor};
      fill: ${props => props.theme.iconButton._primary._hover.color};

      &.is-plain {
        fill: ${props => props.theme.iconButton._primary._plain.color};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${props => props.theme.iconButton._primary._focus.outlineColor};
      fill: ${props => props.theme.iconButton._primary._focus.color};
    }
  }
`;
