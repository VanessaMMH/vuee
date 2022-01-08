<template>
  <div class="mf-phones">
    <h2>MICROFRONT-PHONES ...</h2>
    <div class="content">
      <div v-for="item in telefonos" :key="item.id">
        <div class="telefono center">
          <img :src="item.url" :alt="item.nombre" height="200"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const telefonos: any = ref([]);

    telefonos.value.push({
      id: 1,
      nombre: "Modelo 1",
      url: "https://i.ibb.co/WDHNFMM/phone-1.jpg",
    });
    telefonos.value.push({
      id: 2,
      nombre: "Modelo 2",
      url: "https://i.ibb.co/w7qNm4x/phone-2.jpg",
    });
    telefonos.value.push({
      id: 3,
      nombre: "Modelo 3",
      url: "https://i.ibb.co/87ydCvW/phone-3.jpg",
    });
    telefonos.value.push({
      id: 4,
      nombre: "Modelo 4",
      url: "https://i.ibb.co/gyHQ1LB/phone-4.jpg",
    });
    return {
      telefonos,
    };
  },
});
</script>


<style lang="scss" scoped>
.mf-phones {
  font-weight: bold;
  //color: #fff;
  //background-color: #ff5733;
  h2 {
    margin-left: 20px;
  }
  .content {
    overflow-y: auto;
    margin: 20px;
    text-align: justify;
    text-justify: inter-word;
    height: 400px;

    .telefono {
      margin-top: 20px;
      //border: 1px solid blue;
    }
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
  }
}
</style>