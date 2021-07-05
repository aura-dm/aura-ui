<template>
  <wrapper
    @click="$emit('click', id, $event)"
    :active-class="activeClass"
    :as="component"
    :class="{
      'is-active': isActive,
    }"
    :to="to"
  >
    <tab-label :active-class="activeClass" component="h4" variant="h4">
      {{ label }}
    </tab-label>
  </wrapper>
</template>

<script>
import { TabLabel, Wrapper } from './ATab.styles';

export default {
  name: 'a-tab',
  components: {
    TabLabel,
    Wrapper,
  },
  props: {
    activeClass: {
      default() {
        return 'is-active';
      },
      type: String,
    },
    component: {
      default() {
        return 'span';
      },
      type: [Object, String],
    },
    isActive: {
      default() {
        return false;
      },
      type: Boolean,
    },
    label: {
      type: String,
    },
    to: {
      type: String,
    },
  },
};
</script>
