<template>
  <div class="home">
    <div class="home-title"><strong>LOJA DE HARDWARE 2.0</strong></div>

      <div class="hot">
        <strong>
          Produtos em destaque:
          </strong>
        </div>
    <div style="display: flex; flex-wrap: wrap;">
<card title="Hardware 1" body="Desc hardware 1" @plus-plus="plusHandler"/>
<card title="Hardware 2" body="Desc hardware 2" @plus-plus="plusHandler"/>
<card title="Hardware 3" body="Desc hardware 3" @plus-plus="plusHandler"/>
<card title="Hardware 4" body="Desc hardware 4" @plus-plus="plusHandler"/>
<card title="Hardware 5" body="Desc hardware 5" @plus-plus="plusHandler"/>
<card title="Hardware 6" body="Desc hardware 6" @plus-plus="plusHandler"/>
<card title="Hardware 7" body="Desc hardware 7" @plus-plus="plusHandler"/>
<card title="Hardware 8" body="Desc hardware 8" @plus-plus="plusHandler"/>
  </div>
  <div class="category"><strong>Compre por categoria:</strong></div>
  </div>
  <div></div>
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
.home {
  width: 100%;
  height: 100%;

}
.home-title{
  font-size: 30px;
  margin-bottom: 30px;
  color: red;
}
.hot{
  color: purple;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
}
.category{
  padding: 10px;
  font-size: 20px;
  color: #df5286;
}

</style>
