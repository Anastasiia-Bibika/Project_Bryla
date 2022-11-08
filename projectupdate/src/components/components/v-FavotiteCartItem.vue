<template>
  <div class="v-FavotiteCartItem">
    <div class="v-FavotiteCartItem-info">
      <div class="fav-card-img1">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="fav-card-title1">
        {{ fav_cart_item_data.title }}
      </div>
      <div class="fav-price1">
        {{ fav_cart_item_data.priceToShow }}
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
  proops: {
    fav_cart_item_data: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexstylefav-cart-item.scss";
</style>
