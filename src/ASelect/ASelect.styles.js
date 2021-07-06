import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  display: inline-block;
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
