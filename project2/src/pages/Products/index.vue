<template>
  <div>
    <div class="productstitle">
      <h1>Products</h1>
    </div>
    <art-card
      v-if="receivedArtId"
      :img-src="currentArt.imgSrc"
      :title="currentArt.title"
      :price="currentArt.price"
    />
    <art-card-list v-else :art-list-data="listData" />
    <v-favorite-cart v-if="FAV_CART.length" />
  </div>
  <div>
    <a href="#" class="arrowUp">
      <i class="fa-solid fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import ArtCardList from "@/components/components/ArtCardList.vue";
import ArtCard from "@/components/components/ArtCard.vue";
import vFavoriteCartVue from "@/components/components/v-FavoriteCart.vue";
import { mapGetters } from "vuex";
export default {
  name: "MyProducts",

  components: {
    ArtCardList,
    ArtCard,
    vFavoriteCartVue,
  },

  computed: {
    receivedArtId() {
      return this.$route.params.id;
    },
    currentArt() {
      return this.receivedProductId
        ? this.listData.find((item) => item.id == this.receivedProductId)
        : {};
    },
    ...mapGetters(["FAV_CART"]),
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            "https://faino.store/image/cachewebp/catalog/product/UKRAINE/0011/HD/01/01/200-500x625.webp",
          title: "Sketch",
          price: 400,
        },
        {
          id: 2,
          imgSrc:
            "https://golka.com.ua/image/cache/webp/catalog/articles/b-308-brosh-ukrainskoe-serdtse-tela-artis-nabor-dlya-vishivki-biserom-1-700x700.webp",
          title: "Line Art",
          price: 500,
        },
        {
          id: 3,
          imgSrc:
            "https://images.prom.ua/3831046652_w200_h200_znachok-kruglyj-metallicheskij.jpg",
          title: "Full Art",
          price: 1000,
        },
        {
          id: 4,
          imgSrc:
            "https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg",
          title: "Portrait",
          price: 500,
        },
        {
          id: 5,
          imgSrc:
            "https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg",
          title: "Half-length Portrait",
          price: 850,
        },
        {
          id: 6,
          imgSrc:
            "https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg",
          title: "Full-body Portrait",
          price: 900,
        },
        {
          id: 7,
          imgSrc:
            "https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg",
          title: "Футболка",
          price: 350,
        },
        {
          id: 7,
          imgSrc:
            "https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg",
          title: "Стікер-пак",
          price: 500,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.productstitle {
  margin-top: 35px;
  color: #1a0e20e7;
}
</style>
