import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const PictureImage = styled.img`
  opacity: 0;
  transition: opacity 500ms ease-out;

  &.show {
    opacity: 1;
  }

  &.fill {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &.fit {
    max-height: 100%;
    max-width: 100%;
  }
`;
