<template>
<div v-if="open" class="modal" @click="clickHandler">
    <div class="modal-container">
    <div class="modal-close" @click="$emit('on-close')">X</div>
    <slot/>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    open: Boolean,
  },
  emits: ['on-close'],

  setup(props, { emit }) {
    const clickHandler = (e:MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.className === 'modal') {
        console.log('click', el.className);
        emit('on-close');
      }
    };
    return { clickHandler };
  },
});
</script>
<style scoped>
.modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

}
.modal-container{
    width: fit-content;
    max-width: 80%;
    height: 50px;
    border: 1px solid black;
    background: white;
    margin-top: -20px;
}
.modal-close{
    text-align: right;
    cursor: pointer;
}
</style>
