<template>
  <wrapper-element :class="{ 'is-focused': isFocused }" :disabled="isDisabled">
    <text-label v-if="label" for="id">{{ label }}</text-label>
    <text-input
      v-if="!isMultiLine"
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      @blur="onBlur"
      @focus="onFocus"
      @input="$emit('input', $event)"
    />
    <text-area
      v-if="isMultiLine"
      v-bind="$props"
      :id="id"
      :name="name"
      :value="value"
      @blur="onBlur"
      @focus="onFocus"
      @input="$emit('input', $event)"
    />
    <text-errors v-if="errors">{{ errors }}</text-errors>
  </wrapper-element>
</template>

<script>
import _uniqueId from 'lodash/uniqueId';

import {
  TextArea,
  TextErrors,
  TextInput,
  TextLabel,
  WrapperElement,
} from './ATextField.styles';

export default {
  name: 'a-text-field',
  components: {
    TextArea,
    TextErrors,
    TextInput,
    TextLabel,
    WrapperElement,
  },
  data() {
    return {
      isFocused: false,
    };
  },
  methods: {
    onBlur($event) {
      this.isFocused = false;
      this.$emit('blur', $event);
    },
    onFocus($event) {
      this.isFocused = true;
      this.$emit('focus', $event);
    },
  },
  props: {
    errors: {
      type: String,
    },
    id: {
      type: String,
      default: _uniqueId(),
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
    isMultiLine: {
      default: false,
      type: Boolean,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    value: {
      default: '',
      type: String,
    },
  },
};
</script>
