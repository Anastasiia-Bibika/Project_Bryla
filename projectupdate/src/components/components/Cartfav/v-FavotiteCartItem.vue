<template>
  <div class="v-FavotiteCartItem">
    <div class="v-FavotiteCartItem-info">
      <div class="fav-card-img1">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="fav-card-title1">
        {{ title }}
      </div>
      <div class="fav-price1">
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
    <div class="v-FavotiteCartItem-quantity"></div>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-FavotiteCartItem",
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
  computed: {
    priceToShow() {
      return `${this.price} грн.`;
    },
  },
  mounted: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexstylefav-cart-item.scss";
</style>
