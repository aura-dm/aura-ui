<template>
  <Wrapper>
    <Modal :style="{ maxWidth }">
      <ModalHeader>
        <ModalTitle>{{ title }}</ModalTitle>
        <ModalCloseButton @click="onClose">
          <a-button @click="onClose">
            <a-close-icon />
          </a-button>
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
    <ModalOverlay @click="onClose" />
  </Wrapper>
</template>

<script>
import AButton from '../AButton';
import ACloseIcon from '../icons/ACloseIcon';
import {
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalFooterButtons,
  ModalOverlay,
  ModalTitle,
  Wrapper,
} from './AModal.styles';

export default {
  name: 'a-modal',
  components: {
    AButton,
    ACloseIcon,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalFooterButtons,
    ModalOverlay,
    ModalTitle,
    Wrapper,
  },
  methods: {
    onClose(evt) {
      this.$emit('dismiss', this.id);
    },
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
