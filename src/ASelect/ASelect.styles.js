import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectMenu = styled.div`
  background-color: ${props => props.theme.select.menu.bgColor};
  border: ${props => props.theme.select.menu.border};
  box-shadow: ${props => props.theme.select.menu.boxShadow};
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 240px;
  position: absolute;
  z-index: 10;

  .is-left & {
    left: 0;
  }

  .is-right & {
    right: 0;
  }
`;

export const SelectMenuItem = styled.button`
  background-color: ${props => props.theme.select.menuItem.bgColor};
  border: none;
  border-bottom: ${props => props.theme.select.menuItem.borderBottom};
  color: ${props => props.theme.select.menuItem.color};
  cursor: pointer;
  font-family: ${props => props.theme.select.menuItem.fontFamily};
  font-size: ${props => props.theme.select.menuItem.fontSize};
  font-weight: ${props => props.theme.select.menuItem.fontWeight};
  line-height: ${props => props.theme.select.menuItem.lineHeight};
  overflow: hidden;
  padding: 15px 17px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.select.menuItem._hover.color};
  }

  &:last-child {
    border-bottom: none;
  }
`;
