import { ThemeProvider } from 'vue-styled-components';

import defaultThemeStyled from '../src/themes/defaultStyled';
import defaultTheme from '../src/themes/default';
import '../src/themes/global.styles';

import AThemeProvider from '../src/AThemeProvider';

export const decorators = [
  story => ({
    components: { AThemeProvider, story, ThemeProvider },
    computed: {
      theme() {
        return defaultTheme;
      },
      themeStyled() {
        return defaultThemeStyled;
      },
    },
    template: `
      <a-theme-provider :theme="theme">
        <theme-provider :theme="themeStyled">
          <div style="
            box-sizing: border-box;
            height: 100%;
            padding: 20px;
            position: absolute;
            width: 100%;
          ">
            <story />
          </div>
        </theme-provider>
      </a-theme-provider>
    `,
  }),
];
