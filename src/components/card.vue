<template>
  <div class="card">
    <div>{{a}}</div>
    <button @click="clickHandler">++</button>
    <div class="card-title">Titulo
      {{ title }}
    </div>
    <div>{{ body }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, default: '' },
    body: { type: String, default: '' },
  },

  // composition API
  setup() {
    const a = ref(0);

    const clickHandler = (e: MouseEvent) => {
      console.log(a.value);
      a.value += 1;
    };
    return {
      a,
      clickHandler,
    };
  },
});
</script>
<style scoped>
.card {
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  width: 200px;
  height: 200px;
}

.card-title {
  border-bottom: 1px solid black;
}
</style>
