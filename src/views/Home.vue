<template>
<div class="home">
  componente home.vue
<div style="display:flex">
  <div class="card" >
  <div style="border-bottom: 1px solid black">Titulo</div>
  <div>Corpo</div>
  </div>
     <div class="card" >
  <div style="border-bottom: 1px solid black">Titulo</div>
  <div>Corpo</div>
  </div>
     <div class="card" >
  <div style="border-bottom: 1px solid black">Titulo</div>
  <div>Corpo</div>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
});
</script>
<style scoped>
.card{
border:1px solid black;
margin:5px;
padding:5px;
width:200px;
height:200px
}

</style>
