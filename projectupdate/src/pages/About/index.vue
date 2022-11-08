<template>
  <div>
    <master-pagemain>
      <template> </template>

      <body>
        <section class="gallery">
          <h1 class="title">GALLERY</h1>
          <div class="gallery-list">
            <a href="@/assets/stomaceart.png" class="imagegalleryitem">
              <div class="galerryitemanimat">Подивитися</div>
              <img
                src="@/assets/stomaceart.png"
                alt="alt"
                class="imagegallery"
              />
            </a>
            <a href="@/assets/TShortmerch.jpg" class="imagegalleryitem">
              <div class="galerryitemanimat">Подивитися</div>
              <img src="@/assets/TShortmerch.jpg" alt="alt" />
            </a>
            <a href="@/assets/HalfLength.png" class="imagegalleryitem">
              <div class="galerryitemanimat">Подивитися</div>
              <img
                src="@/assets/HalfLength.png"
                alt="alt"
                class="imagegallery"
              />
            </a>
            <a href="@/assets/Fullbodyart.png" class="imagegalleryitem">
              <div class="galerryitemanimat">Подивитися</div>
              <img
                src="@/assets/Fullbodyart.png"
                alt="alt"
                class="imagegallery"
              />
            </a>
          </div>
        </section>
      </body>

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
