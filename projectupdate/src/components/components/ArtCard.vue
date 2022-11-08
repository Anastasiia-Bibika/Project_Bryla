<template>
  <div class="art-card-box">
    <div class="art-card-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="art-card-title">
      {{ title }}
    </div>
    <div class="art-price">
      {{ priceToShow }}
    </div>
    <div class="favorite2">
      <button class="favorite2" v-on:click="ADD_TO_FAV(id)">
        <i class="fa-solid fa-pen-nib"></i>
      </button>
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
      <div class="art-card-box1">
        <div class="favorite1">
          <button class="favorite1" v-on:click="ADD_TO_FAV(id)">
            <i class="fa-solid fa-pen-nib"></i>
          </button>
        </div>
        <div class="art-card-img1">
          <img :src="imgSrc" alt="" />
        </div>
        <div class="art-card-title1">
          {{ title }}
        </div>
        <div class="art-price1">
          {{ priceToShow }}
        </div>

        <ul>
          <li><i class="fa fa-star checked1"></i></li>
          <li><i class="fa fa-star checked1"></i></li>
          <li><i class="fa fa-star checked1"></i></li>
          <li><i class="fa fa-star checked1"></i></li>
          <li><i class="fa fa-star checked1"></i></li>
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
import { mapActions } from "vuex";
export default {
  name: "ArtCard",
  components: {
    PopUpArtCardsVue,
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
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
    ...mapActions(["ADD_TO_FAV"]),
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
@import "@/assets/style/indexpopupstyle.scss";
</style>
