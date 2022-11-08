<template>
  <div>
    <div class="productstitle">
      <h1>Products</h1>
    </div>
    <art-card
      v-if="receivedArtId"
      :id="currentArt.id"
      :img-src="currentArt.imgSrc"
      :title="currentArt.title"
      :price="currentArt.price"
    />
    <art-card-list v-else :art-list-data="artList" />
    <div>
      <v-favorite-cart-vue
        v-if="ART_PRODUCTS.length"
        :fav_cart_data="ART_PRODUCTS"
      />
      <a href="#" class="arrowUp">
        <i class="fa-solid fa-chevron-up"></i>
      </a>
    </div>
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
      return this.receivedArtId
        ? this.listData.find((item) => item.id == this.receivedArtId)
        : {};
    },
    ...mapGetters(["ART_PRODUCTS", "artList"]),
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            "https://i.pinimg.com/736x/e6/66/70/e666703baf7e2081d383825232e18b70.jpg",
          title: "Sketch",
          price: 400,
        },
        {
          id: 2,
          imgSrc:
            "https://i.pinimg.com/564x/73/3b/48/733b4880ea562c7839f22ea75eec5b19.jpg",
          title: "Line Art",
          price: 500,
        },
        {
          id: 3,
          imgSrc:
            "https://i.pinimg.com/564x/fe/57/f3/fe57f33a5a7713bc26a44b43e3b2515c.jpg",
          title: "Full Art",
          price: 1000,
        },
        {
          id: 4,
          imgSrc:
            "https://i.pinimg.com/564x/69/c6/52/69c65294ee01b997b187fd104873fd71--digital-portrait-digital-art.jpg",
          title: "Portrait",
          price: 500,
        },
        {
          id: 5,
          imgSrc:
            "https://i.pinimg.com/564x/41/9c/1f/419c1fcf3f8b73a418adeeb96fdd9569.jpg",
          title: "Half-length Portrait",
          price: 850,
        },
        {
          id: 6,
          imgSrc:
            "https://i.pinimg.com/564x/fa/4e/cd/fa4ecdf92c1556883699e5f08c83fb06.jpg",
          title: "Full-body Portrait",
          price: 900,
        },
        {
          id: 7,
          imgSrc:
            "https://i.pinimg.com/564x/2e/ed/96/2eed965853970c555ad21c6229079f93.jpg",
          title: "Прінти футболок",
          price: 350,
        },
        {
          id: 7,
          imgSrc:
            "https://i.pinimg.com/564x/fa/66/a6/fa66a6a3d16d8807155fe4c97d94b4c4.jpg",
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
