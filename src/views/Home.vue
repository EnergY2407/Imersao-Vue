<template>
  <div class="home">
    <div class="home-title"><strong>LOJA DE HARDWARE 2.0</strong></div>

      <div class="hot">
        <strong>
          Produtos em destaque:
          </strong>
        </div>
    <div style="display: flex; flex-wrap: wrap;">
<card title="Hardware 1" body="Desc hardware 1"/>
<card title="Hardware 2" body="Desc hardware 2"/>
<card title="Hardware 3" body="Desc hardware 3"/>
<card title="Hardware 4" body="Desc hardware 4"/>
<card title="Hardware 5" body="Desc hardware 5"/>
<card title="Hardware 6" body="Desc hardware 6"/>
<card title="Hardware 7" body="Desc hardware 7"/>
<card title="Hardware 8" body="Desc hardware 8"/>
  </div>
  <div class="category"><strong>Compre por categoria:</strong></div>
  </div>
  <div></div>
  <div ><footer class="footer-home">Feito por hugo arrumar footer dps</footer></div>
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

    });

    return {
      ...toRefs(state),
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
.footer-home{
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: pink;
  color: black;
  text-align: center
}
</style>
