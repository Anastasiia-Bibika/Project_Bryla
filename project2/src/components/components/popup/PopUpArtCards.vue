<template>
  <div class="pop-up-wrapper" ref="pop-up-wrapper1">
    <div class="pop-up-artbox">
      <div class="pop-up-header">
        <span>{{ popUpTitle }}</span>
        <div class="cancelbtn">
          <span><i class="fa-solid fa-xmark" @click="closePopup"></i></span>
        </div>
      </div>
      <div class="pop-up-content">
        <slot></slot>
      </div>
      <div class="pop-up-footer">
        <button class="Btn-close" @click="closePopup">Close</button>
        <div class="favorite_btn">
          <button>
            <i class="fa-solid fa-pen-nib" @click="rightBtnAction">{{
              rightButtonTitle
            }}</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpArtCards",
  props: {
    popUpTitle: {
      type: String,
      default: "...",
    },
    rightButtonTitle: {
      type: String,
      default: "Ok",
    },
  },
  methods: {
    rightBtnAction() {
      this.$emit("righBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["pop-up-wrapper1"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/indexpopupstyle.scss";
</style>
