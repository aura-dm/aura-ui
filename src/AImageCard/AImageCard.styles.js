import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  text-decoration: none;
  
  &.can-hover:hover {
    cursor: pointer;
    
    .image {
      outline: ${props => props.theme.imageCard.image._focus.outline};
    }
    
    .title {
      color: ${props => props.theme.imageCard.title._focus.color};
    }
  }
  
  &.can-hover:focus {
    .image {
      outline: ${props => props.theme.imageCard.image._hover.outline};
    }
    
    .title {
      color: ${props => props.theme.imageCard.title._hover.color};
    }
  }
`;

export const CardImage = styled.div`
  margin: 0 0 10px;
  outline: ${props => props.theme.imageCard.image.outline};
`;

export const CardTitle = styled.h3`
  color: ${props => props.theme.imageCard.title.color};
  font-family: ${props => props.theme.imageCard.title.fontFamily};
  font-size: ${props => props.theme.imageCard.title.fontSize};
  font-weight: ${props => props.theme.imageCard.title.fontWeight};
  margin: 0;
`;
