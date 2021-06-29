import AButton from './';

export default { title: 'Button' };

export const defaultButton = () => ({
  components: { AButton },
  template: `
  <div>
    <a-button
      @click="handleClick"
      style="margin: 0 10px 0 0;"
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
        style="margin: 0 10px 0 0;"
      >
        Disabled
      </a-button>
      <a-button
        @click="handleClick"
        :is-disabled="true"
        :is-primary="true"
      >
        Disabled Primary
      </a-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const fullWidthButton = () => ({
  components: { AButton },
  template: `
    <div style="width: 300px">
      <a-button
        @click="handleClick"
        style="margin: 0 0 10px; width: 100%;"
      >
        Default
      </a-button>
      <a-button
        @click="handleClick"
        :is-primary="true"
        style="width: 100%;"
      >
        Default Primary
      </a-button>
    </div>
  `,
  methods: {
    handleClick: () => alert('Clicked'),
  },
});

export const buttonAsDiv = () => ({
  components: { AButton },
  template: `
    <div>
      <a-button
        @click="handleClick"
        component="div"
        style="margin: 0 10px 0 0;"
      >
        Default
      </a-button>
      <a-button
        @click="handleClick"
        component="div"
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
