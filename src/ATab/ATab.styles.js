import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: ${props => props.theme.tab.borderBottom};
  color: ${props => props.theme.tab.color};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.button.fontFamily};
  font-size: ${props => props.theme.button.fontSize};
  font-weight: ${props => props.theme.button.fontWeight};
  line-height: ${props => props.theme.messagePanel.lineHeight};
  padding: 12px 0;
  text-decoration: none;

  &.is-active {
    border-bottom: ${props => props.theme.tab._active.borderBottom};
    color: ${props => props.theme.tab._active.color};
  }

  &:hover {
    color: ${props => props.theme.tab._hover.color};
  }
`;
