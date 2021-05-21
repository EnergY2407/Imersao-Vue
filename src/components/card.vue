<template>
  <div class="card">
    <div>{{a}}</div>
    <button @click="clickHandler">++</button>

    <div>{{a}}</div>
    <button @click="clickGlobalHandler">++G</button>
    <div class="card-title">
      {{ title }}
    </div>
    <div>{{ body }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs,
} from 'vue';

export default defineComponent({
  props: {
    title: { type: String, default: '' },
    body: { type: String, default: '' },
  },

  // composition API
  setup(props, { emit }) {
    const state = reactive({
      a: 0,
      b: 0,
      c: 0,
    });

    const clickHandler = () => {
      state.a++;
    };
    const clickGlobalHandler = () => {
      emit('plus-plus', 1);
    };
    return {
      ...toRefs(state),
      clickHandler,
      clickGlobalHandler,
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
  background: purple;
  color: white;
}

.card-title {
  border-bottom: 1px solid black;
}
</style>
