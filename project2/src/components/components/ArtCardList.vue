<template>
  <div class="ats-card-list">
    <art-card-vue
      v-for="item in artListData"
      :key="item.id"
      :img-src="item.imgSrc"
      :title="item.title"
      :price="item.price"
      @open-detail-about="onArtDetail(item.id)"
    />
    <v-favorite-cart />
  </div>
</template>

<script>
import ArtCardVue from "./ArtCard.vue";
import VFavoriteCart from "./v-FavoriteCart.vue";
export default {
  name: "ArtCardList",
  components: {
    ArtCardVue,
    VFavoriteCart,
  },
  props: {
    artListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //...mapActions(["GET_ART_PRODUCTS_FROM_API"]),
    onArtsDetail(itemId) {
      this.$router.push({
        name: "art",
        params: { id: itemId },
      });
    },
  },
  //mounted() {
  //  this.GET_ART_PRODUCTS_FROM_API();
  //},
  computed: {
    //...mapGetters(["FAV_CART"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexstylecard.scss";
</style>
