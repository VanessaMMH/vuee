<template>
  <div class="mf-header">
    <div class="description"><h1><span>HEADER </span> <span> {{title ? '(SHOW '+title+')' : ''}}</span></h1> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "mf-header",
  setup() {

    const title = ref(null);
    (window as any).subscribe('menu-select', (msg: any) => {
      title.value = msg.description;
    });

    return {
      title
    }
  },
})
</script>

<style lang="scss" scoped>
  .mf-header {
    color: #fff;
    .description {
      text-align: center;
    }
  }
</style>
