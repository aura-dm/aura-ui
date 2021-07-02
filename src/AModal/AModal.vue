<template>
  <Wrapper>
    <Modal :style="{ maxWidth }">
      <ModalHeader>
        <a-typography component="h2" variant="h5" style="margin: 0;">
          {{ title }}
        </a-typography>
        <ModalCloseButton>
          <a-icon-button @click="() => $emit('close', id)" variant="plain">
            <a-close-icon />
          </a-icon-button>
        </ModalCloseButton>
      </ModalHeader>
      <ModalContent>
        <slot name="content"></slot>
      </ModalContent>
      <ModalFooter>
        <ModalFooterButtons>
          <slot name="footer"></slot>
        </ModalFooterButtons>
      </ModalFooter>
    </Modal>
    <ModalOverlay />
  </Wrapper>
</template>

<script>
import AIconButton from '../AIconButton/AIconButton.vue';
import ATypography from '../ATypography/ATypography.vue';
import ACloseIcon from '../icons/ACloseIcon';
import {
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalFooterButtons,
  ModalOverlay,
  Wrapper,
} from './AModal.styles';

export default {
  name: 'a-modal',
  components: {
    ACloseIcon,
    AIconButton,
    ATypography,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalFooterButtons,
    ModalOverlay,
    Wrapper,
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
