import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.actionBar.bgColor};
  border-bottom: ${props => props.theme.actionBar.borderBottom};
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 0 0 20px;
`;

export const ControlsLeft = styled.div`
  display: flex;

  & > * {
    margin: 0 20px 0 0;
  }
`;

export const ControlsRight = styled.div`
  display: flex;

  & > * {
    margin: 0 0 0 20px;
  }
`;
