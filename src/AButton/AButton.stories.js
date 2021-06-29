import AButton from './';

export default { title: 'Button' };

export const defaultButton = () => ({
  components: { AButton },
  template: `
  <div>
    <a-button
      @click="handleClick"
      style="margin: 0 0 10px"
    >
      Default
    </a-button>
    <a-button
      @click="handleClick"
      :is-primary="true"
    >
      Default Primary
    </a-button>
  </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const disabledButton = () => ({
  components: { AButton },
  template: `
    <div>
      <a-button
        @click="handleClick"
        :is-disabled="true"
        style="margin: 0 0 10px"
        variant="outlined"
      >
        Disabled
      </a-button>
      <a-button
        @click="handleClick"
        :is-disabled="true"
        :is-primary="true"
        variant="outlined"
      >
      Disabled Primary
      </a-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});
