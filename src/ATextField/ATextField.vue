<template>
  <wrapper-element :class="{ 'is-focused': isFocused }" :disabled="isDisabled">
    <text-label v-if="label" component="label" for="id" variant="h6">
      {{ label }}
    </text-label>
    <text-input
      v-bind="$props"
      :component="isMultiLine ? 'textarea' : 'input'"
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      :variant="isLarge ? 'h4' : 'h5'"
      @blur.native="onBlur"
      @focus.native="onFocus"
      @input.native="$emit('input', $event.target.value)"
    />
    <text-errors v-if="errors">{{ errors }}</text-errors>
  </wrapper-element>
</template>

<script>
import _uniqueId from 'lodash/uniqueId';

import {
  TextErrors,
  TextInput,
  TextLabel,
  WrapperElement,
} from './ATextField.styles';

export default {
  name: 'a-text-field',
  components: {
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
    isLarge: {
      default() {
        return false;
      },
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
