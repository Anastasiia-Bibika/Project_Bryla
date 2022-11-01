import { createStore } from "vuex";

const store = createStore({
  state: {
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
    favcart: [],
  },
  getters: {
    ART_PRODUCTS(state) {
      return state.listData;
    },
    FAV_CART(state) {
      return state.favcart;
    },
  },
});
//
//     fav_cart: [],
//   },
//   mutations: {
//     SET_PRODUCTS_TO_STATE: (state, listData) => {
//       state.listData = listData;
//     },
//   },
//   actions: {
//     GET_ART_PRODUCTS_FROM_API({ commit }) {
//       return axios(url, {
//         method: "GET",
//       }).then((listData) => {
//         commit("SET_PRODUCTS_TO_STATE", listData);
//       });
//     },
//   },
//   getters: {
//     ART_PRODUCTS(state) {
//       return state.listData;
//     },
//   },
// });
// export default store;
