<template>
  <Wrapper>
    <Loader :style="{ width: diameter }">
      <SvgImage
        :style="{ height: diameter, width: diameter }"
        viewBox="25 25 50 50"
      >
        <CirclePath
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke-width="3"
          stroke-miterlimit="10"
        />
      </SvgImage>
    </Loader>
  </Wrapper>
</template>

<script>
import { SvgImage, Loader, CirclePath, Wrapper } from './ALoading.styles';

export default {
  name: 'a-loading',
  components: {
    CirclePath,
    Loader,
    SvgImage,
    Wrapper,
  },
  props: {
    diameter: {
      type: String,
      default: '40px',
    },
  },
};
</script>
