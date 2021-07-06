import styled from 'vue-styled-components';

// base font style is 10px
const variants = {
  h1: {
    fontSize: '4.4rem',
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '3.8rem',
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '3.2rem',
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '2.6rem',
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '2rem',
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '1.6rem',
    lineHeight: 1.2,
  },
  p: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
  },
};

export const Typography = styled('p', { variant: String })`
  color: ${props => props.theme.typography.color};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => variants[props.variant].fontSize};
  font-weight: ${props => props.theme.typography.fontWeight};
  line-height: ${props => variants[props.variant].lineHeight};
  margin: 0 0 1rem;
`;
