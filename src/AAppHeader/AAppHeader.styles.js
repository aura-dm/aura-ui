import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 30px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    justify-content: space-between;
    padding: 50px;
  }
`;

export const MenuIcon = styled.div`
  display: flex;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Logo = styled.div`
  left: 50%;
  margin: 0;
  position: absolute;
  transform: translateX(-50%);

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    left: auto;
    position: relative;
    transform: none;
  }
`;

export const MenuLarge = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MenuSmall = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5px);
  display: none;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuSmallHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  width: 100%;
`;

export const MenuSmallContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 0 0 40px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.span`
  align-items: center;
  display: flex;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 0 40px;
  }
`;

export const MenuLink = styled('span', { activeClass: String })`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 0 20px;
  padding: 0;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 10px 0 0 0;
  }

  &.${props => props.activeClass} {
    p {
      color: ${props => props.theme.appHeader.menuItem._active.color};
    }

    &::after {
      background-color: ${props =>
        props.theme.appHeader.menuItem._active.color};
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      margin: 5px 0 0;
      position: absolute;
      width: 70%;
    }
  }
`;
