<template>
  <div class="wrapper">
    <div class="controls-left">
      <slot name="controls-left" />
    </div>
    <div class="controls-right">
      <slot name="controls-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-action-bar',
};
</script>

<style lang="scss" scoped>
.wrapper {
  align-items: center;
  background-color: var(--action-bar-bg-color, #ffffff);
  border-bottom: 1px solid var(--action-bar-border-bottom, #f3f3f3);
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 0 0 20px;
}

.controls-left {
  display: flex;

  & > * {
    margin: 0 20px 0 0;
  }
}

.controls-right {
  display: flex;

  & > * {
    margin: 0 0 0 20px;
  }
}
</style>
