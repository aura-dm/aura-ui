<template>
  <wrapper :style="{ height, width }">
    <a-loading v-if="src && imageUrl === ''" />
    <picture-image
      v-else-if="imageUrl"
      :class="fillType"
      :src="imageUrl"
      :style="{ border }"
    />
  </wrapper>
</template>

<script>
import ALoading from '../ALoading';
import { PictureImage, Wrapper } from './APicture.styles';

export const TYPES = {
  FILL: 'fill',
  FIT: 'fit',
};

export default {
  name: 'app-picture',
  components: {
    ALoading,
    PictureImage,
    Wrapper,
  },
  data() {
    return {
      image: undefined,
      imageUrl: '',
    };
  },
  destroyed() {
    if (this.image) {
      this.image.removeEventListener('load', this.onImageLoaded, false);
    }
  },
  methods: {
    onImageLoaded() {
      this.imageUrl = this.image.src;
      this.image.removeEventListener('load', this.onImageLoaded, false);
    },
  },
  mounted() {
    if (this.src) {
      this.image = new Image(this.width, this.height);
      this.image.addEventListener('load', this.onImageLoaded, false);
      this.image.src = this.src;
    }
  },
  props: {
    border: {
      type: String,
    },
    fillType: {
      default: TYPES.FILL,
      type: String,
      validator: value => {
        return [TYPES.FILL, TYPES.FIT].includes(value);
      },
    },
    height: {
      default: '100%',
      type: String,
    },
    src: {
      type: String,
    },
    width: {
      default: '100%',
      type: String,
    },
  },
};
</script>
