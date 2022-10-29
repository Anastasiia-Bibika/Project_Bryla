<template>
  <div>
    <master-pagemain>
      <template v-slot:header> Admin </template>

      <h1>ABOUT</h1>

      <template v-slot:footer> Place </template>
    </master-pagemain>
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

<style lang="scss" scoped></style>
