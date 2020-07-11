import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  position: absolute;
  width: 100%;
`;

export const Message = styled.h3`
  color: ${props => props.theme.messagePanel.color};
  font-family: ${props => props.theme.messagePanel.fontFamily};
  font-size: ${props => props.theme.messagePanel.fontSize};
  font-weight: ${props => props.theme.messagePanel.fontWeight};
  line-height: ${props => props.theme.messagePanel.lineHeight};
  margin: 0 0 10px;
`;
