import { ThemeProvider } from 'vue-styled-components';

import defaultTheme from '../src/themes/default';
import '../src/themes/global.styles';

export const decorators = [
  story => ({
    components: { story, ThemeProvider },
    computed: {
      theme() {
        return defaultTheme;
      },
    },
    template: `
      <theme-provider :theme="theme">
        <story />
      </theme-provider>
    `,
  }),
];
