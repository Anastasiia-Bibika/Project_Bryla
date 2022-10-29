<template>
  <div>
    <div class="head-box">
      <div class="logo"><img src="@/assets/logotype.png" /></div>
      <div class="TWelcome">
        <span class="textW">Welcome!</span>
      </div>
      <div class="boxlink">
        <p>
          <router-link to="/" class="linroute"> Home</router-link>
          <router-link to="/products-list" class="linroute"
            >Products Arts</router-link
          >
          <router-link to="/about" class="linroute">About</router-link>
        </p>
        <div class="register">
          <ul>
            <li>
              <router-link to="/signIn" class="linkreg">Sign In</router-link>
            </li>
            <li>
              <router-link to="/signUp" class="linkreg">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a href="#" class="arrowUp">
          <i class="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </div>
    <router-view></router-view>
    <footer class="footer-box">
      <div class="text-foot">
        <h1>Запитання? Звертайтеся до наших соц. мереж!</h1>
      </div>
      <div class="container-society">
        <ul class="social">
          <div class="facebook">
            <li class="social-item">
              <a
                href="https://www.facebook.com/naisy.shiro"
                class="srcfacebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </li>
          </div>
          <div class="vk">
            <li class="social-item">
              <a href="https://vk.com/xomyak_01" class="srcvk">
                <i class="fa fa-vk"></i>
              </a>
            </li>
          </div>
          <div class="instagram">
            <li class="social-item">
              <a
                href="https://www.instagram.com/0_kinashi_0/"
                class="srcinstagram"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </div>
          <div class="telegram">
            <li class="social-item">
              <a href="https://t.me/nasyaxomkaUWU" class="srctelegram">
                <i class="fa fa-telegram"></i>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

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

<style lang="scss">
@import "./assets/style";
@import "./assets/style/index2.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, #aa4b6b, #6b6b83, #3b8d99);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.TWelcome {
  font-family: American Typewriter, serif;
}
.textW {
  font-size: 30px;
  color: #d8bfd8;
  background: linear-gradient(45dig, white, #d1abd1);
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.linroute {
  font-size: 18px;
  margin: 15px;
  text-decoration: none;
  color: #d8bfd8;
  transition: 0.3s;
  margin-top: 45px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.linroute:hover {
  color: #aa4b6b;

  filter: drop-shadow(0 0 10px #aa4b6b);
}
.boxlink {
  color: #d8bfd8;
}
</style>
