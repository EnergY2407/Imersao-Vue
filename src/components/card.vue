<template>
  <div class="card">

    <div class="card-title">

      {{ CardProducts }}

    </div>
    <div>
      {{ body }}

      <div class="card-buttons">
        <button class="button-more" @click="modalOpen = true">Mais</button>
        <button class="button-buy">Comprar</button>
      </div>
      <modal class="modal-body" :open="modalOpen" @on-close="modalOpen = false">

      </modal>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';
import CardProduct from '@/modules/store';
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

    return {

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
   border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px blueviolet;
    animation: mymove 5s infinite;
}
@keyframes mymove {
  50% {box-shadow: 10px 20px 30px purple;}
}
.card-title {
  border-bottom: 1px solid black;
}
.card-buttons {
  margin: 3px;
}
.button-buy {
  margin-left: 10px;
}

.modal-body {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
