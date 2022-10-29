<template>
    <div>
      <h1>Products</h1>
      <product-card
        v-if="receivedProductId"
        :img-src="currentProduct.imgSrc"
        :title="currentProduct.title"
        :price="currentProduct.price"
        :sales="currentProduct.sales"
      />
      <product-list v-else :product-list-data="listData" />
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList'
  import ProductCard from '@/components/ProductList/ProductCard'
  export default {
    name: 'MyProducts',
  
    components: {
      ProductList,
      ProductCard,
    },
  
    computed: {
      receivedProductId() {
        return this.$route.params.id
      },
      currentProduct() {
        return this.receivedProductId
          ? this.listData.find((item) => item.id == this.receivedProductId)
          : {}
      },
    },
  
    data() {
      return {
        listData: [
          {
            id: 1,
            imgSrc:
              'https://faino.store/image/cachewebp/catalog/product/UKRAINE/0011/HD/01/01/200-500x625.webp',
            title: 'Футболка',
            price: 350,
            sales: true,
          },
          {
            id: 2,
            imgSrc:
              'https://golka.com.ua/image/cache/webp/catalog/articles/b-308-brosh-ukrainskoe-serdtse-tela-artis-nabor-dlya-vishivki-biserom-1-700x700.webp',
            title: 'Брошка',
            price: 65,
            sales: false,
          },
          {
            id: 3,
            imgSrc:
              'https://images.prom.ua/3831046652_w200_h200_znachok-kruglyj-metallicheskij.jpg',
            title: 'Значок круглий металевий',
            price: 150,
            sales: true,
          },
          {
            id: 4,
            imgSrc:
              'https://images.prom.ua/2409900782_w640_h640_silikonovyj-braslet-ukraina.jpg',
            title: 'Силіконовий браслет Україна',
            price: 45,
            sales: false,
          },
        ],
      }
    },
  }
  </script>
  
  <style lang="scss" scoped></style>
  