import { createStore } from "vuex";

const store = createStore({
  state: {
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
        id: 8,
        imgSrc:
          "https://i.pinimg.com/564x/fa/66/a6/fa66a6a3d16d8807155fe4c97d94b4c4.jpg",
        title: "Стікер-пак",
        price: 500,
      },
    ],
    favcart: [
      {
        id: 8,
        imgSrc:
          "https://i.pinimg.com/564x/fa/66/a6/fa66a6a3d16d8807155fe4c97d94b4c4.jpg",
        title: "Стікер-пак",
        price: 500,
      },
    ],
  },
  mutations: {
    ADD_TO_FAV(state, id) {
      for (let i = 0; i < state.listData.length; i++) {
        if (id == state.listData[i].id) {
          console.log(id);
          state.favcart.push(state.listData[i]);
          break;
        }
      }
    },
    deleteFromFAV(state, userId) {
      for (let i = 0; i < state.favcart.length; i++) {
        if (userId == state.favcart[i].id) {
          state.favcart.splice(i, 1);
        }
      }
    },
  },
  actions: {
    ADD_TO_FAV({ commit }, id) {
      commit("ADD_TO_FAV", id);
    },
    deleteFromFAV({ commit }, id) {
      commit("deleteFromFAV", id);
    },
  },
  getters: {
    artList(state) {
      return state.listData;
    },
    ART_PRODUCTS(state) {
      return state.favcart;
    },
  },
});
export default store;
