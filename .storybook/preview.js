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
        <div style="
          box-sizing: border-box;
          height: 100%;
          left: 0;
          padding: 20px;
          position: absolute;
          top: 0;
          width: 100%;
        ">
          <story />
        </div>
      </theme-provider>
    `,
  }),
];
