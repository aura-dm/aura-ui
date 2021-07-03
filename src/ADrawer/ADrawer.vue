<template>
  <a-modal-overlay transitionName="drawer">
    <drawer :style="{ maxWidth }">
      <a-modal-body
        @close="$emit('close', id)"
        height="100%"
        :id="id"
        :maxWidth="maxWidth"
        :title="title"
      />
    </drawer>
  </a-modal-overlay>
</template>

<script>
import AModalBody from '../AModalBody/AModalBody.vue';
import AModalOverlay from '../AModalOverlay/AModalOverlay.vue';
import { Drawer } from './ADrawer.styles';

export default {
  name: 'a-drawer',
  components: {
    AModalBody,
    AModalOverlay,
    Drawer,
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
