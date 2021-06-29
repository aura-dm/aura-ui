import styled from 'vue-styled-components';
import ATypography from '../ATypography';

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
  }

  &.can-hover:focus {
    .image {
      outline: ${props => props.theme.imageCard.image._hover.outline};
    }
  }
`;

export const CardImage = styled.div`
  margin: 0 0 15px;
  outline: ${props => props.theme.imageCard.image.outline};
`;

export const CardTitle = styled(ATypography)`
  color: ${props => props.theme.imageCard.color};
  margin: 0;
`;

export const CardSubTitle = styled(ATypography).attrs({
  component: 'h3',
  variant: 'h5',
})`
  color: ${props => props.theme.imageCard.subTitle.color};
  margin: 5px 0 0;
  text-transform: uppercase;

  .can-hover:hover & {
    color: ${props => props.theme.imageCard.subTitle._hover.color};
  }
`;
