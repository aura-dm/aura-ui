<template>
  <div class="wrapper" :class="{ 'can-hover': enableHover }">
    <div class="card-image">
      <a-picture :height="imageHeight" :src="imageUrl" />
    </div>
    <h3 class="card-title" v-if="title">{{ title }}</h3>
  </div>
</template>

<script>
import APicture from '../APicture';

export const TYPES = {
  FILL: 'fill',
  FIT: 'fit',
};

export default {
  name: 'a-image-card',
  components: {
    APicture,
  },
  props: {
    enableHover: {
      default: false,
      type: Boolean,
    },
    imageHeight: {
      default: '200px',
      type: String,
    },
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  outline: none;
  text-decoration: none;

  &.can-hover:hover {
    cursor: pointer;

    .card-image {
      outline: var(--image-card-image__focus-outline);
    }

    .card-title {
      color: var(--image-card-title__focus-color);
    }
  }

  &.can-hover:focus {
    .card-image {
      outline: var(--image-card-image__hover-outline);
    }

    .card-title {
      color: var(--image-card-title__hover-color);
    }
  }
}

.card-image {
  margin: 0 0 10px;
  outline: var(--image-card-image-outline);
}

.card-title {
  color: var(--image-card-title-color);
  font-family: var(--image-card-title-font-family);
  font-size: var(--image-card-title-font-size);
  font-weight: var(--image-card-title-font-weight);
  margin: 0;
}
</style>
