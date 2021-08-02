<template>
  <div class="home">
    <div class="home-title">LOJA DE HARDWARE 2.0</div>
    <div>
      <img
        class="home-banner"
        src="https://media.istockphoto.com/vectors/computer-hardware-word-concepts-banner-vector-id1172788328"
      />
    </div>
    <div>
      <img
        class="a"
        src="https://image.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-52379.jpg"
      />
    </div>
    <div class="top-title">
      <strong> Produtos em destaque </strong>
    </div>

    <div class="main-products">
      <div class="hot">
        <strong> Produtos em promoção </strong>

        <div class="top">
          <div v-for="p in list" :key="p.id">
            <card :title="p.title" :body="p.price" />
          </div>
        </div>

        <div class="bottom">
           <div v-for="p in list" :key="p.id">
            <card :title="p.title" :body="p.price" />
          </div>
        </div>
      </div>
      <div class="center-home"></div>
      <div class="relevant">
        <strong> Produtos relevantes </strong>

        <div class="relevant-left">
          <div v-for="p in list" :key="p.id">
            <card :title="p.title" :body="p.desc" />

          </div>
        </div>

        <div class="relevant-right">
          <div v-for="p in list" :key="p.id">
            <card :title="p.title" :body="p.desc" />

          </div>
        </div>
      </div>
    </div>
    <div>
      <img
        class="a"
        src="https://image.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-52379.jpg"
      />
    </div>
    <div class="r"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import Card from '@/components/card.vue';

import useCardProducts from '@/modules/store';

export default defineComponent({
  components: {
    Card,
  },

  setup() {
    const cardProducts = useCardProducts();
    const list = computed(() => cardProducts.state.products);
    return {
      list,
    };
  },
});
</script>
<style scoped>
.r{
  background: #b3c4e0;
  height: 400px;
}

.top {
  display: flex;
  padding: 20px;
  width: fit-content;
}

.home-banner {
  border-radius: 3000px;
  max-width: 30%;
}
.a {
  margin-top: 25px;
  height: 10px;
  width: 60%;
  border-radius: 4px;
}
.home-title {

  font-size: 30px;
  margin-bottom: 30px;
  color: black;
}

.main-products {
    border: 4px solid blue  ;
  display: flex;

  margin-top: 1rem;
padding: 15px;
}
.top-title {
  font-size: 30px;
  color: blueviolet;
  padding: 15px;
}
.relevant {
  flex: 50%;
  padding: 10px;
}

.relevant-left {
  display: flex;
  padding: 20px;
  width: fit-content;
}

.relevant-right {
  display: flex;
  padding: 20px;
  width: fit-content;
}
.center-home {
  width: 50px;
}
.bottom {
  display: flex;
  padding: 20px;
  width: fit-content;
}
.home {
  box-sizing: border-box;
  background-color: #b3c4e0;
}
.hot {
  flex: 50%;
  padding: 10px;
}

.category {
  padding: 10px;
  font-size: 20px;
  color: #df5286;
}
</style>
