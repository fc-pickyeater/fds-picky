<template lang="pug">
  .recipe(v-if="!isEditMode")
    h1 {{currentRecipe.title}}
    img(:src="currentRecipe.img_recipe")
    p {{currentRecipe.description}}
    h2 재료
    ul.ingredients-list
      li(v-for="ingredient in currentRecipe.ingredients")
        p 
        | {{ingredient.name}} 
        | {{ingredient.ea}}{{ingredient.unit}} 
        | {{ingredient.cal}}cal 
        | {{ingredient.description}}
    h2 조리순서
    ol.steps-list
      li(v-for="(step, index) in currentRecipe.steps")
        div
          p step{{index+1}}
          img(:src="step.img_step")
          p {{step.description}}
          div(v-if="step.is_timer")
            p {{step.timer}}
            p {{countDownTime}}
            button(type="button" @click="playTimer(step.timer)") play
            button(type="button" @click="pauseTimer") pause
  .recipe(v-else)
    .title
      label.title-label(for="title-input") 레시피 이름: 
      input#title-input(type="text" v-model="currentRecipe.title")
    img(:src="currentRecipe.img_recipe")
    .description
      label.description-label(for="description-input") 레시피 설명:
      textarea#description-input(:value="currentRecipe.description")
    h2 재료
    ul.ingredients-list
      li(v-for="(ingredient, index) in currentRecipe.ingredients")
        .ingredient
          label.ingredient-name-label 재료 이름
          input#ingredient-name-input(type="text" v-model="ingredient.name")
          br
          label.ingredient-ea-label 재료 수량
          input#ingredient-ea-input(type="text" v-model="ingredient.ea")
          label.ingredient-unit-label 수량 단위
          input#ingredient-unit-input(type="text" v-model="ingredient.unit")
          br
          label.ingredient-cal-label 칼로리
          input#ingredient-cal-input(type="text" v-model="ingredient.cal")
          label.ingredient-description-label 재료 설명
          textarea#ingredient-description-input(v-model="ingredient.description")
          br
          button(type="button" @click="removeIngredient(index)") remove
      li
        button(type="button" @click="addIngredient") add ingredient
      //- p 
        | {{ingredient.name}} 
        | {{ingredient.ea}}{{ingredient.unit}} 
        | {{ingredient.cal}}cal 
        | {{ingredient.description}}
    h2 조리순서
    ol.steps-list
      li(v-for="(step, index) in currentRecipe.steps")
        div
          p step{{index+1}}
          img(:src="step.img_step")
          p {{step.description}}
          div(v-if="step.is_timer")
            p {{step.timer}}
            p {{countDownTime}}
            button(type="button" @click="playTimer(step.timer)") play
            button(type="button" @click="pauseTimer") pause
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Recipe',
  created() {
    const tempJsonString = JSON.stringify(this.getCurrentRecipe);
    this.currentRecipe = JSON.parse(tempJsonString);
    // this.currentRecipe = Object.assign({}, this.getCurrentRecipe);
    if (this.isEditMode) {
      this.currentRecipe.steps.push(Object.assign({}, this.stepTemplate));
      this.currentRecipe.ingredients.push(Object.assign({}, this.ingredientTemplate));
    }
  },
  data() {
    return {
      currentRecipe: {},
      ingredientTemplate: {
        name: '',
        ea: 0,
        unit: '',
        cal: 0,
        description: '',
      },
      stepTemplate: {
        step: 0,
        description: '',
        is_timer: false,
        timer: 0,
        img_step: '',
      },
      countDownTime: 0,
    };
  },
  computed: {
    isEditMode() {
      return this.$route.path.indexOf('edit') > -1;
    },
    ...mapGetters('recipeData', [
      'getCurrentRecipe',
    ]),
  },
  methods: {
    playTimer(t) {
      this.countDownTime = new Date(t).getTime();
      const timer = setInterval(() => {
        this.countDownTime -= 100;
        if (this.countDownTime <= 0) {
          clearInterval(timer);
        }
      }, 100);
    },
    pauseTimer() {},
    addIngredient() {
      this.currentRecipe.ingredients.push(Object.assign({}, this.ingredientTemplate));
    },
    removeIngredient(index) {
      this.currentRecipe.ingredients.splice(index, 1);
    },
  },
};
</script>

<style lang="sass">
</style>