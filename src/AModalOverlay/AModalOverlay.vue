<template>
  <modal-overlay>
    <slot />
    <overlay :transition-name="transitionName" />
  </modal-overlay>
</template>

<script>
import { ModalOverlay, Overlay } from './AModalOverlay.styles';

export default {
  name: 'a-modal-overlay',
  components: {
    ModalOverlay,
    Overlay,
  },
  props: {
    transitionName: {
      default() {
        return 'overlay';
      },
      type: String,
    },
  },
};
</script>
