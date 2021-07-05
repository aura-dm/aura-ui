import ATypography from '../ATypography';
import ATextField from './';

export default { title: 'Text Field' };

export const Default = () => ({
  components: { ATextField, ATypography },
  data() {
    return {
      state: '',
      value: 'My first value',
    };
  },
  methods: {
    onBlur() {
      this.state = 'Blur';
    },
    onInput() {
      this.state = 'Input';
    },
    onFocus() {
      this.state = 'Focus';
    },
  },
  template: `
    <div>
      <a-text-field v-model="value" @blur="onBlur" @focus="onFocus" @input="onInput" />
      <a-typography>State: {{state}}</a-typography>
    </div>
  `,
});

export const WithLabel = () => ({
  components: { ATextField },
  data() {
    return {
      value: 'My first value',
    };
  },
  template: `
    <a-text-field v-model="value" label="My Text Field" />
  `,
});

export const Large = () => ({
  components: { ATextField },
  data() {
    return {
      value: 'My first value',
    };
  },
  methods: {
    onInput(value) {
      this.value = value;
    },
  },
  template: `
    <a-text-field v-model="value" :is-large="true" />
  `,
});

export const MultiLine = () => ({
  components: { ATextField },
  data() {
    return {
      value:
        'My first value. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio libero, pharetra vel justo nec, tempor hendrerit justo. Suspendisse id tortor vel nulla convallis convallis.',
    };
  },
  template: `
    <a-text-field v-model="value" :isMultiLine="true" label="My Text Area" />
  `,
});

export const WithErrors = () => ({
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
