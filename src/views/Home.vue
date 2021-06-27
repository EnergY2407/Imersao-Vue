<template>
  <div class="home">
    <div class="home-title">LOJA DE HARDWARE 2.0</div>
    <div>
      <img
        class="home-banner"
        src="https://media.istockphoto.com/vectors/computer-hardware-word-concepts-banner-vector-id1172788328"
      />
    </div>
    <div class="top-title">
      <strong> Produtos em destaque </strong>
    </div>

    <div class="main-products">
      <div class="hot">
        <strong> Produtos em promoção </strong>

        <div class="top">
          <card title="Hardware 1" body="Desc hardware 1" />
          <card title="Hardware 2" body="Desc hardware 2" />
        </div>

        <div class="bottom">
          <card title="Hardware 1" body="Desc hardware 1" />
          <card title="Hardware 2" body="Desc hardware 2" />
        </div>

      </div>
      <div class="center-home"></div>
      <div class="relevant">
        <strong> Produtos relevantes </strong>

        <div class="relevant-left">
          <card title="Hardware 3" body="Desc hardware 3" />
          <card title="Hardware 4" body="Desc hardware 4" />
        </div>

        <div class="relevant-right">
          <card title="Hardware 1" body="Desc hardware 1" />
          <card title="Hardware 2" body="Desc hardware 2" />
        </div>
      </div>
    </div>

    <div class="category"><strong>Compre por categoria:</strong></div>

    <div>**Categorias vão aqui**</div>
  </div>

  <!-- <div ><footer class="footer-home">Feito por hugo arrumar footer dps</footer></div> -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  components: {
    Card,
  },

  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.top {
  display: flex;
  padding: 20px;
  width: fit-content;
}

.home-banner {
  border-radius: 3000px;
  max-width: 30%;
}

.home-title {
  font-size: 30px;
  margin-bottom: 30px;
  color: black;
}

.main-products {
  display: flex;
  margin-top: 1rem;
  width: fit-content;
  margin-left: 400px;
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
.footer-home {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: pink;
  color: black;
  text-align: center;
}
</style>
