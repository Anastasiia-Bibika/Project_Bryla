<template>
  <div
    class="card-container"
    @mousedown="$emit('mouse-down-container')"
    @click="$emit('open-product-detail')"
  >
    <div class="card-header">
      <span v-show="sales" class="card-sales">Акція</span>
      <button @click.stop="$emit('on-add-to-cart', price)" @mousedown.stop="">
        +
      </button>
    </div>
    <div class="card-image">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div class="card-price">
      {{ priceToShow }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    imgSrc: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
    },
    title: {
      type: String,
      default: "No title",
    },
    price: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    priceToShow() {
      return `${this.price} грн.`;
    },
  },

  methods: {
    onAddToCart() {
      this.$emit("on-add-to-cart");
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  width: 250px;
  height: 400px;
  border: 2px solid rgba(210, 219, 218, 0.842);
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
}
.card-header {
  text-align: right;
}

.card-sales {
  background-color: rgb(231, 26, 26);
  border: 4px;
  border-color: rgb(122, 25, 25);
  color: white;
  margin-left: 10px;
  border-radius: 8px;
  padding: 8px;
  margin-right: 20px;
}
.card-image {
  padding: 30px;
}
.card-image img {
  width: 100%;
  border-radius: 5px;
}
</style>
