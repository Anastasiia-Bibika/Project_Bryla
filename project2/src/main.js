import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./vuex/store";
// new Vue({
//   render(h) {
//     (h) => h(App), store;
//   },
// });
createApp(App).use(router).mount("#app");
