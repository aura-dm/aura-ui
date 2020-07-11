import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  &.sm {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  &.md {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.lg,
  &.xl {
    column-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 30px;
  }
`;
