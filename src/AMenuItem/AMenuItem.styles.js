import styled from 'vue-styled-components';
import ATypography from '../ATypography';

export const ComponentWrapper = styled('div', { activeClass: String })`
  background-color: ${props => props.theme.menuItem.bgColor};
  border: none;
  border-bottom: ${props => props.theme.menuItem.borderBottom};
  border-left: ${props => props.theme.menuItem.borderLeft};
  color: ${props => props.theme.menuItem.color};
  cursor: pointer;
  flex-direction: column;
  display: flex;
  height: 50px;
  justify-content: space-between;
  min-height: 50px;
  padding: 0 10px 0 26px;
  text-decoration: none;
  width: 100%;

  &.is-sub-menu-title {
    border-bottom: none;

    &:not(last-child) {
      border-bottom: none;
    }
  }

  &.is-sub-menu-item {
    padding: 0 10px 0 46px;

    &:not(last-child) {
      border-bottom: none;
    }
  }

  &:hover {
    color: ${props => props.theme.menuItem._hover.color};
  }

  &.${props => props.activeClass} {
    border-left: ${props => props.theme.menuItem._active.borderLeft};
    color: ${props => props.theme.menuItem._active.color};
  }
`;

export const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

export const MainText = styled(ATypography)`
  color: inherit;
`;

export const ContentLeft = styled.div`
  align-items: center;
  display: flex;
  margin: 0 10px 0 0;
`;
