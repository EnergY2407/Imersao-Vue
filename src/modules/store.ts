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
      title: 'PRODUTO 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ',
      price: 1,
    },
    {
      id: 2,
      title: 'PRODUTO 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ',
      price: 2,
    },
    {
      id: 3,
      title: 'PRODUTO 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ',
      price: 3,
    },
    {
      id: 4,
      title: 'PRODUTO 4',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ',
      price: 4,
    },
  ],
});

const mutations = {};

const actions = {};

export default function useCardProducts() {
  return readonly({
    state,
    actions,
    mutations,
  });
}
