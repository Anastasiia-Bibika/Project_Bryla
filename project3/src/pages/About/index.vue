<template>
  <div>
    <master-pagemain>
      <template> </template>

      <h1>GALLERY</h1>
      <body></body>

      <template v-slot:footer><p>GALLERY</p></template>
    </master-pagemain>
    <div>
      <a href="#" class="arrowUp">
        <i class="fa-solid fa-chevron-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import MasterPagemain from "@/masterpage/MasterPagemain.vue";

export default {
  name: "MyAbout",
  components: {
    MasterPagemain,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexabout.scss";
</style>
