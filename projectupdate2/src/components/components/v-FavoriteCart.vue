<template>
  <div class="v-FavotiteCart">
    <i class="fa-solid fa-pen-nib">Cart</i>
    <vFavotiteCartItemVue
      v-for="item in fav_cart_data"
      :key="item.id"
      :fav_cart_item_data="item"
    />
  </div>
</template>

<script>
import vFavotiteCartItemVue from "./v-FavotiteCartItem.vue";
export default {
  name: "v-FavotiteCart",
  components: {
    vFavotiteCartItemVue,
  },
  props: {
    fav_cart_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
