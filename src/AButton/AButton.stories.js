import AButton from './';

export default { component: AButton, title: 'Button' };

export const Default = (args, { argTypes }) => ({
  components: { AButton },
  props: Object.keys(argTypes),
  template: `
    <a-button
      v-bind="$props"
      @click="handleClick"
      style="margin: 0 10px 0 0;"
    >
      Default
    </a-button>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});
