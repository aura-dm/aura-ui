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
      :style="{ height }"
      :type="type"
      :value="value"
      :variant="isLarge ? 'h4' : 'h5'"
      ref="input"
      @blur.native="onBlur"
      @focus.native="onFocus"
      @input.native="onInput"
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
      height: this.defaultHeight,
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
    onInput($event) {
      //this.resize();
      this.$emit('input', $event.target.value, $event);
    },
    /* resize() {
      if (this.isMultiLine) {
        const el = this.$refs.input.$el;
        console.log(el);
        this.height = el.scrollHeight + 'px';
      }
    }, */
  },
  mounted() {
    //this.resize();
  },
  props: {
    errors: {
      type: String,
    },
    id: {
      type: String,
      default() {
        return _uniqueId();
      },
    },
    defaultHeight: {
      default() {
        return undefined;
      },
      type: String,
    },
    isDisabled: {
      default() {
        return false;
      },
      type: Boolean,
    },
    isLarge: {
      default() {
        return false;
      },
      type: Boolean,
    },
    isMultiLine: {
      default() {
        return false;
      },
      type: Boolean,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      default() {
        return 'text';
      },
      type: String,
    },
    value: {
      default() {
        return '';
      },
      type: String,
    },
  },
};
</script>
