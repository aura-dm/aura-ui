<template>
  <modal-overlay>
    <modal-content>
      <slot />
    </modal-content>
    <overlay :transition-name="transitionName" />
  </modal-overlay>
</template>

<script>
import { ModalContent, ModalOverlay, Overlay } from './AModalOverlay.styles';

export default {
  name: 'a-modal-overlay',
  components: {
    ModalContent,
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
