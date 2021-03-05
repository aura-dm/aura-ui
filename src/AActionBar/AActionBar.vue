<template>
  <wrapper>
    <controls-left>
      <slot name="controls-left" />
    </controls-left>
    <controls-right>
      <slot name="controls-right" />
    </controls-right>
  </wrapper>
</template>

<script>
import { ControlsLeft, ControlsRight, Wrapper } from './AActionBar.styles';

export default {
  name: 'a-action-bar',
  components: {
    ControlsLeft,
    ControlsRight,
    Wrapper,
  },
};
</script>
