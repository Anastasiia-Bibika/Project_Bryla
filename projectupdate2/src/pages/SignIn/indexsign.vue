<template>
  <div>
    <body>
      <form action="" class="formlogin">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="forminner">
          <h1>Login</h1>
          <div class="contentlogin">
            <input type="text" class="input" placeholder="Your email<3" />
            <input type="password" class="input" placeholder="Password<3" />
            <input type="checkbox" id="passwrem" class="Rem" name="Remember" />
            <label for="passwrem">Remember me?</label>
            <button class="btnlog">Login</button>
          </div>
        </div>
      </form>
    </body>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexforlogin.scss";
</style>
