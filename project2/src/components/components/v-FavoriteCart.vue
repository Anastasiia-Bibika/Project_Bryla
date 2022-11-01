<template>
  <div class="v-FavotiteCart">
    <i class="fa-solid fa-pen-nib"></i>
    <vFavotiteCartItemVue />
  </div>
</template>

<script>
import vFavotiteCartItemVue from "./v-FavotiteCartItem.vue";
export default {
  name: "v-FavotiteCart",
  components: {
    vFavotiteCartItemVue,
  },
};
</script>

<style lang="scss" scoped></style>
