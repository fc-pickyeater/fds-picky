// current Recipe's data

export default {
  namespaced: true,
  state: {
    isEditMode: false,
    currentRecipe: {
      title: '돼지불고기',
      img_recipe: 'http://recipe.ezmember.co.kr/cache/recipe/2015/06/09/52226fa7c95ad2845bccbaaed04c3fbf.jpg',
      description: '소고기랑 감자랑 조림',
      ingredients: [
        {
          name: '돼지고기',
          ea: 200,
          unit: 'g',
          cal: 200,
          description: '목살',
        },
        {
          name: '감자',
          ea: 2,
          unit: '개',
          cal: 20,
          description: '주먹정도 크기',
        },
        /* {
          // name: string
          // ea: real number,
          // unit: gram, liter, meter, etc.
          // cal: calory
          // description: string
        } */
      ],
      steps: [
        {
          step: 0,
          description: '돼지고기의 핏물을 뺀다.',
          is_timer: false,
          timer: 0,
          img_step: 'http://recipe.ezmember.co.kr/cache/recipe/2015/10/29/3b24bcad9dae5bcbc7e847673a205d031.jpg',
        },
        {
          step: 1,
          description: '감자를 삶는다',
          is_timer: true,
          timer: 3000,
          img_step: 'http://recipe.ezmember.co.kr/cache/recipe/2015/10/05/66a60d59c1db830d0edb455aad6e476b1_m.jpg',
        },
        /* {
          // orderNum: natural number
          // timer: null or ms
          // description: string
        } */
      ],
    },
  },
  getters: {
    getCurrentRecipe(state) {
      return state.currentRecipe;
    },
  },
  mutations: {
  },
  actions: {
  },
};
