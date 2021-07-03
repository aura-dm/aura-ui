<template>
  <modal-body :style="{ maxWidth }">
    <modal-body-header>
      <a-typography component="h2" variant="h4" style="margin: 0;">
        {{ title }}
      </a-typography>
      <close-button>
        <a-icon-button @click="$emit('close', id)" variant="plain">
          <a-close-icon height="26px" width="26px" />
        </a-icon-button>
      </close-button>
    </modal-body-header>
    <modal-body-content>
      <slot name="content"></slot>
    </modal-body-content>
    <modal-body-footer>
      <modal-body-footer-buttons>
        <slot name="footer"></slot>
      </modal-body-footer-buttons>
    </modal-body-footer>
  </modal-body>
</template>

<script>
import AIconButton from '../AIconButton/AIconButton.vue';
import ATypography from '../ATypography/ATypography.vue';
import ACloseIcon from '../icons/ACloseIcon';
import {
  ModalBody,
  ModalBodyHeader,
  CloseButton,
  ModalBodyContent,
  ModalBodyFooter,
  ModalBodyFooterButtons,
} from './AModalBody.styles';

export default {
  name: 'a-modal-body',
  components: {
    ACloseIcon,
    AIconButton,
    ATypography,
    ModalBody,
    ModalBodyHeader,
    CloseButton,
    ModalBodyContent,
    ModalBodyFooter,
    ModalBodyFooterButtons,
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
