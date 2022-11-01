<template>
  <div class="art-card-box" @click="$emit('open-detail-about')">
    <div class="art-card-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="art-card-title">
      {{ title }}
    </div>
    <div class="art-price">
      {{ priceToShow }}
    </div>
    <div class="favorite">
      <li><i class="fa-solid fa-pen-nib"></i></li>
    </div>
    <ul>
      <li><i class="fa fa-star checked"></i></li>
      <li><i class="fa fa-star checked"></i></li>
      <li><i class="fa fa-star checked"></i></li>
      <li><i class="fa fa-star checked"></i></li>
      <li><i class="fa fa-star checked"></i></li>
    </ul>
    <pop-up-art-cards-vue
      v-if="IsInfoPopupVisible"
      rightButtonTitle="Favorite"
      :popUpTitle="title"
      @closePopup="closeinfoPopup"
    >
      <div class="art-card-box" @click="$emit('open-detail-about')">
        <div class="art-card-img">
          <img :src="imgSrc" alt="" />
        </div>
        <div class="art-card-title">
          {{ title }}
        </div>
        <div class="art-price">
          {{ priceToShow }}
        </div>
        <div class="favorite">
          <li><i class="fa-solid fa-pen-nib"></i></li>
        </div>
        <ul>
          <li><i class="fa fa-star checked"></i></li>
          <li><i class="fa fa-star checked"></i></li>
          <li><i class="fa fa-star checked"></i></li>
          <li><i class="fa fa-star checked"></i></li>
          <li><i class="fa fa-star checked"></i></li>
        </ul>
      </div>
    </pop-up-art-cards-vue>
    <div class="btnshowinf">
      <button class="cardinfo" @click="showPopupInfo">Show Info</button>
    </div>
    <div>
      <button class="btncomm">Made Commission</button>
    </div>
  </div>
</template>

<script>
import PopUpArtCardsVue from "./popup/PopUpArtCards.vue";
export default {
  name: "ArtCard",
  components: {
    PopUpArtCardsVue,
  },
  props: {
    imgSrc: {
      type: String,
      default: "https://e-kolosok.org/wp-content/uploads/2019/07/none.png",
    },
    title: {
      type: String,
      default: "None title",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      IsInfoPopupVisible: false,
    };
  },
  methods: {
    showPopupInfo() {
      this.IsInfoPopupVisible = true;
    },
    closeinfoPopup() {
      this.IsInfoPopupVisible = false;
    },
  },
  computed: {
    priceToShow() {
      return `${this.price} грн.`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexstylecard.scss";
@import "@/assets/style/indexfavorite.scss";
</style>
