<template>
  <div class="ats-card-list">
    <art-card-vue
      v-for="item in artListData"
      :key="item.id"
      :id="item.id"
      :img-src="item.imgSrc"
      :title="item.title"
      :price="item.price"
      @delete-item="onDelete(item.id)"
    />
    <v-favorite-cart-vue
      v-if="ART_PRODUCTS.length"
      :fav_cart_data="ART_PRODUCTS"
    />
  </div>
</template>

<script>
import ArtCardVue from "./ArtCard.vue";
import vFavoriteCartVue from "@/components/components/v-FavoriteCart.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ArtCardList",
  components: {
    ArtCardVue,
    vFavoriteCartVue,
  },
  props: {
    artListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["deleteItem"]),
    onDelete(itemId) {
      this.deleteItem(itemId);
    },
  },
  computed: {
    ...mapGetters(["ART_PRODUCTS", "artList"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexstylecard.scss";
</style>
