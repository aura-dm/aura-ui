import styled from 'vue-styled-components';

export const TextH1 = styled.h1`
  color: ${props => props.theme.text.color};
  font-family: ${props => props.theme.text.fontFamily};
  font-size: 2.8em;
  font-weight: ${props => props.theme.text.fontWeight};
  line-height: 1.2em;
  margin: 0 0 10px;
`;

export const TextH2 = styled(TextH1)`
  font-size: 2.4em;
  line-height: 1.2em;
`;

export const TextH3 = styled(TextH1)`
  font-size: 2em;
  line-height: 1.2em;
`;

export const TextH4 = styled(TextH1)`
  font-size: 1.8em;
  line-height: 1.2em;
`;

export const TextH5 = styled(TextH1)`
  font-size: 1.4em;
  line-height: 1.2em;
`;

export const TextH6 = styled(TextH1)`
  font-size: 1em;
  line-height: 1.2em;
`;

export const TextP = styled(TextH1)`
  font-size: 1em;
  line-height: 1.2em;
`;
