<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

const getCSS = tokens => {
  let variables = [];

  Object.keys(tokens).forEach(key => {
    const component = tokens[key];
    console.log(component);

    Object.keys(component).forEach(key => {
      variables.push(`${key}: ${component[key]};`);
    });
  });

  return `:root{${variables.join('')}}`;
};

export default {
  name: 'a-theme-provider',
  components: {},
  data() {
    return {
      currentThemeId: undefined,
    };
  },
  props: {
    theme: {
      required: true,
      type: Object,
    },
  },
  methods: {
    updateTheme() {
      if (this.currentThemeId) {
        document.querySelector(`#${this.currentThemeId}`).remove();
      }

      const tokens = this.theme.tokens;
      const newStyle = document.createElement('style');
      this.currentThemeId = uuidv4();
      newStyle.setAttribute('id', this.currentThemeId);
      newStyle.appendChild(document.createTextNode(getCSS(tokens)));

      document.querySelector('head').appendChild(newStyle);
    },
  },
  beforeMount() {
    console.log('beforeMount', this.theme);

    this.updateTheme();
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.theme);

    this.updateTheme();
  },
  updated() {
    console.log('updated', this.theme);

    this.updateTheme();
  },
};
</script>
