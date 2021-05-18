<template>
  <div class="home">
    <div class="home-title"><strong>LOJA DE HARDWARE 2.0</strong></div>
    <div style="display: flex; flex-wrap: wrap">
<card title="Hardware 1" body="Desc hardware 1"/>
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
import { defineComponent } from 'vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  components: {
    Card,
  },
});
</script>
<style scoped>
.home-title{
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
