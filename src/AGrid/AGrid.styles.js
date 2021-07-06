import styled from 'vue-styled-components';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Grid = styled('div', { columns: Object, gap: Object })`
  display: grid;
  gap: ${props => props.gap.xs || '20px'};
  grid-template-columns: ${props => props.columns.xs || '1fr'};

  &.sm {
    gap: ${props => props.gap.sm || '20px'};
    grid-template-columns: ${props => props.columns.sm || '1fr 1fr'};
  }

  &.md {
    gap: ${props => props.gap.md || '20px'};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: ${props => props.columns.md || '1fr 1fr 1fr'};
  }

  &.lg {
    gap: ${props => props.gap.lg || '20px'};
    grid-template-columns: ${props => props.columns.lg || '1fr 1fr 1fr 1fr'};
  }

  &.xl {
    gap: ${props => props.gap.lg || '20px'};
    grid-template-columns: ${props => props.columns.xl || '1fr 1fr 1fr 1fr'};
  }
`;
