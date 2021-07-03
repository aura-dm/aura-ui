<template>
  <a-modal-overlay transitionName="dialog">
    <dialog-wrapper>
      <dialog-content :style="{ maxWidth }">
        <a-modal-body
          @close="$emit('close', id)"
          :id="id"
          :maxWidth="maxWidth"
          :title="title"
        >
          <slot name="content" slot="content"></slot>
          <slot name="footer" slot="footer"></slot>
        </a-modal-body>
      </dialog-content>
    </dialog-wrapper>
  </a-modal-overlay>
</template>

<script>
import AModalBody from '../AModalBody/AModalBody.vue';
import AModalOverlay from '../AModalOverlay/AModalOverlay.vue';
import { DialogContent, DialogWrapper } from './ADialog.styles';

export default {
  name: 'a-dialog',
  components: {
    AModalBody,
    AModalOverlay,
    DialogContent,
    DialogWrapper,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    maxWidth: {
      default: '500px',
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
