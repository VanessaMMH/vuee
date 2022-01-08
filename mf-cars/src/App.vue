<template>
  <div class="mf-cars">
    <h2>MICROFRONT-CARS ...</h2>
    <div class="content">
      <div v-for="item in autos" :key="item.id">
        <div class="auto center">
          <img :src="item.url" :alt="item.nombre" width="250"/>
        </div>
      </div>      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";

export default defineComponent({
  name: "mf-cars",
  setup() {
    const autos: any = ref([]);

    autos.value.push({
      "id": 1,
      "nombre": "Modelo 1",
      "url": "https://i.ibb.co/XVMBwLB/auto-1.jpg"
    });
    autos.value.push({
      "id": 2,
      "nombre": "Modelo 2",
      "url": "https://i.ibb.co/R6HyW9Q/auto-2.jpg"
    });
    autos.value.push({
      "id": 3,
      "nombre": "Modelo 3",
      "url": "https://i.ibb.co/pPtxW5V/auto-3.jpg"
    });
    autos.value.push({
      "id": 4,
      "nombre": "Modelo 4",
      "url": "https://i.ibb.co/QMWXjjC/auto-4.jpg"
    });
    return {
      autos
    }
  }
});
</script>

<style lang="scss" scoped>
.mf-cars {
  font-weight: bold;
  //color: #fff;
  //background-color: #ec33ff;
  h2 {
    margin-left: 20px;
  }

  .content {
    overflow-y: auto;
    //border: 1px solid red;
    margin: 20px;
    text-align: justify;
    text-justify: inter-word;;
    height: 400px;

    .auto {
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
