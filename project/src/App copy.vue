<template>
  <div>
    <product-list :product-list-data="listData" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";

export default {
  name: "App",

  components: {
    ProductList,
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            "https://content1.rozetka.com.ua/goods/images/preview/231359985.png",
          title: "Смарт-годинник Amazfit GTR 3 Pro Brown Leather",
          price: 2000,
          sales: true,
        },
        {
          id: 2,
          imgSrc:
            "https://content1.rozetka.com.ua/goods/images/preview/231359985.png",
          title: "Смарт-годинник Amazfit GTR 3 Pro Brown Leather",
          price: 5999,
          sales: false,
        },
        {
          id: 3,
          imgSrc:
            "https://content1.rozetka.com.ua/goods/images/preview/231359985.png",
          title: "Смарт-годинник Amazfit GTR 3 Pro Brown Leather",
          price: 1000,
          sales: true,
        },
        {
          id: 4,
          imgSrc:
            "https://content1.rozetka.com.ua/goods/images/preview/231359985.png",
          title: "Смарт-годинник Amazfit GTR 3 Pro Brown Leather",
          price: 1000,
          sales: false,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d8bfd8;
}
</style>
