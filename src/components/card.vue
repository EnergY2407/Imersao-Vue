<template>
  <div class="card">

    <div class="card-title">
      {{ title }}
    </div>
    <div>{{ body }}
      <div class="card-buttons">
      <button class="button-more" @click="modalOpen = true">Mais</button>
      <button class="button-buy">Comprar</button>
      </div>
  <modal :open="modalOpen" @on-close="modalOpen = false">
    mais informações
    aqui vai pegar info do state
    e colocar aqui
    </modal>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';
import Modal from './Modal.vue';

export default defineComponent({
  components: { Modal },
  props: {
    title: { type: String, default: '' },
    body: { type: String, default: '' },
  },

  // composition API
  setup(props, { emit }) {
    const modalOpen = ref(false);

    const state = reactive({
      a: 0,
      b: 0,
      c: 0,
    });

    const clickHandler = () => {
      state.a++;
    };
    // const clickGlobalHandler = () => {
    // emit('plus-plus', 1);

    return {
      ...toRefs(state),
      clickHandler,
      modalOpen,
    };
  },
});
</script>
<style scoped>
.card {
  border: inset;
  border-color: blueviolet;
  margin: 5px;
  padding: 5px;
  width: 200px;
  border-radius: 10px;
  height: 200px;
  background: #f2f2f2;
  color: black;
}

.card-title {
  border-bottom: 1px solid black;
}
.card-buttons{
  margin: 3px;
}
.button-buy{
  margin-left: 10px;
}

</style>
