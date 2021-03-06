import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 50px;
  width: 100%;
`;

export const Control = styled.div`
  display: flex;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  margin: 0 10px 0 0;
`;

export const Logo = styled.div`
  margin: 0;
`;
