import { reactive, readonly } from 'vue';

interface CardProduct {
  id: number,
  title: string,
  desc: string,
  price: number,
}

const state = reactive({
  products: [
    {
      id: 1,
      title: 'RX 570',
      desc: 'Placa de video fabricada pela AMD',
      price: 1399,
    },
    {
      id: 2,
      title: 'I5 9400F',
      desc: 'Processador fabricado pela INTEL',
      price: 1000,
    },
  ],
});

const mutations = {};

const actions = {};

export default function CardProduct() {
  return readonly({
    state,
    actions,
    mutations,

  });
}
