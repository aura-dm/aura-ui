import ATextField from './';

export default { title: 'Text Field' };

export const textField = () => ({
  components: { ATextField },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onInput(value) {
      this.value = value;
    },
  },
  template: `
    <a-text-field :value="value" @input="onInput" />
  `,
});

export const withLabel = () => ({
  components: { ATextField },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onInput(value) {
      this.value = value;
    },
  },
  template: `
    <a-text-field label="My Text Field" :value="value" @input="onInput" />
  `,
});

export const asTextarea = () => ({
  components: { ATextField },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onInput(value) {
      this.value = value;
    },
  },
  template: `
    <a-text-field :isMultiLine="true" label="My Text Area" :value="value" @input="onInput" />
  `,
});

export const withErrors = () => ({
  components: { ATextField },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onInput(value) {
      this.value = value;
    },
  },
  template: `
    <a-text-field
      errors="This field is required"
      label="My Text Area"
      :value="value"
      @input="onInput"
    />
  `,
});
