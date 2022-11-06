<template>
  <div class="ats-card-list">
    <art-card-vue
      v-for="item in artListData"
      :key="item.id"
      :img-src="item.imgSrc"
      :title="item.title"
      :price="item.price"
      @open-detail-about="onArtsDetail(item.id)"
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
import { mapGetters } from "vuex";
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
    onArtsDetail(itemId) {
      this.$router.push({
        name: "art",
        params: { id: itemId },
      });
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
