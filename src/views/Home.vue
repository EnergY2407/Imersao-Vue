<template>
  <div class="home">
    <div class="home-title"><strong>LOJA DE HARDWARE 2.0</strong></div>
    <div>
    A: {{a}}
    </div>
    <div style="display: flex; flex-wrap: wrap">
<card title="Hardware 1" body="Desc hardware 1" @plus-plus="plusHandler"/>
<card title="Hardware 2" body="Desc hardware 2"/>
<card title="Hardware 3" body="Desc hardware 3"/>
<card title="Hardware 4" body="Desc hardware 4"/>
<card title="Hardware 5" body="Desc hardware 5"/>
<card title="Hardware 6" body="Desc hardware 6"/>
<card title="Hardware 7" body="Desc hardware 7"/>
<card title="Hardware 8" body="Desc hardware 8"/>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  components: {
    Card,
  },

  setup() {
    const state = reactive({
      a: 0,
    });

    const plusHandler = (value:number) => {
      console.log('plus', value);
      state.a += value;
    };

    return {
      ...toRefs(state),
      plusHandler,
    };
  },
});
</script>
<style scoped>
.home-title{
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
