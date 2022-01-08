<template>
  <div class="mf-menu">
    <div v-for="item of list" :key="item.id">
      <div class="item" :class="{'item-select': +itemSelect.id == +item.id}" @click="select(item)">
        <div class="description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "mf-menu",
  setup() {

    const router = useRouter();

    const list: any = ref([]);
    const itemSelect = ref({});

    //list.value.push({ id: 1, description: "CLIENTS", path: "/clients" });
    list.value.push({ id: 7, description: "PHONES", path: "/phones" });
    list.value.push({ id: 2, description: "CARS", path: "/cars" });
    list.value.push({ id: 3, description: "TRUCKS", path: "/trucks" });
    list.value.push({ id: 4, description: "BILLS", path: "/bills" });
    list.value.push({ id: 5, description: "REPORTS", path: "/reports" });
    list.value.push({ id: 6, description: "ANIMALS", path: "/animals" });    
    list.value.push({ id: 8, description: "COMPUTERS", path: "/computers" });
    list.value.push({ id: 9, description: "TABLES", path: "/tables" });
    list.value.push({ id: 10, description: "TOOLS", path: "/tools" });
    list.value.push({ id: 11, description: "COLOR", path: "/colors" });
    list.value.push({ id: 12, description: "GAMES", path: "/games" });
    
    const select = (item: any) => {
      itemSelect.value = item;
      (window as any).publish('menu-select', {
        description: item.description,
        path: item.path
      });
      router.push(item.path);
    }

    return {
      list,
      itemSelect,
      select
    };
  },
});
</script>

<style lang="scss" scoped>
.mf-menu {
  overflow: auto;
  .item {
    background-color: #00489a;
    color: #fff;
    margin-top: 2px;
    width: 250px;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    .description {
      margin-top: 5px;
    }
  }

  .item-select {
    background-color: #0094bf;
    font-weight: bold;
    color: #fff;
    margin-top: 2px;
    width: 250px;
    border: 1px solid #0094bf;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    .description {
      margin-top: 5px;
    }
  }
}
</style>