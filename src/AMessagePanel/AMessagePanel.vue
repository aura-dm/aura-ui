<template>
  <Wrapper>
    <Message>{{ text }}</Message>
    <slot></slot>
  </Wrapper>
</template>

<script>
import { Message, Wrapper } from './AMessagePanel.styles';

export default {
  name: 'a-message-panel',
  components: {
    Message,
    Wrapper,
  },
  props: {
    text: {
      type: String,
    },
  },
};
</script>
