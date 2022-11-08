import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store/store";
import vuex from "vuex";
// new Vue({
//   render(h) {
//     (h) => h(App), store;
//   },
// });
createApp(App).use(vuex).use(store).use(router).mount("#app");
