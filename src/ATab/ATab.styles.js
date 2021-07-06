import styled from 'vue-styled-components';
import ATypography from '../ATypography';

export const Wrapper = styled('span', { activeClass: String })`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 20px 0 0;
  padding: 0 0 8px;
  position: relative;

  p {
    color: ${props => props.theme.tab.color};
  }

  &.${props => props.activeClass} {
    p {
      color: ${props => props.theme.tab._active.color};
    }

    &::after {
      background-color: ${props => props.theme.tab._active.color};
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      width: 70%;
    }
  }
`;

export const TabLabel = styled(ATypography, { activeClass: String })`
  color: ${props => props.theme.tab.color};
  margin: 0;

  .${props => props.activeClass} & {
    color: ${props => props.theme.tab._active.color};
  }
`;
