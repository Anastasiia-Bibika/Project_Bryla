<template>
  <div>
    <vFavoriteCartVue :fav_cart_data="list" />
  </div>
</template>

<script>
import vFavoriteCartVue from "@/components/components/Cartfav/v-FavoriteCart.vue";

export default {
  name: "Cartpage",
  components: {
    vFavoriteCartVue,
  },
  data() {
    return {
      list: [
        {
          id: 8,
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

<style lang="scss" scoped></style>
