<template>
  <div class="Addbox">
    <div class="inputlabel">
      <label>
        <p>Шлях до зображення</p>
        <input type="text" v-model="imgSrc" />
      </label>
    </div>
    <div class="inputlabel">
      <label>
        <p>Назва товару</p>
        <input type="text" v-model="title" />
      </label>
    </div>
    <div class="inputlabel">
      <label>
        <p>Ціна товару</p>
        <input type="number" v-model.number="price" />
      </label>
    </div>
    <button class="btnAdd" @click="onChange">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddArtCard",

  data() {
    return {
      imgSrc: null,
      title: null,
      price: 0,
      sales: false,
    };
  },

  computed: {
    ...mapGetters(["getProductById"]),
    receivedProductId() {
      return this.$route.params.id;
    },
    isEditMode() {
      return this.receivedProductId;
    },
    buttonTitle() {
      return this.receivedProductId ? "Save" : "Add";
    },
  },

  methods: {
    ...mapActions(["addNewProduct", "updateProduct"]),

    onChange() {
      if (this.isEditMode)
        this.updateProduct({
          id: this.receivedProductId,
          imgSrc: this.imgSrc,
          title: this.title,
          price: this.price,
        });
      else
        this.addNewProduct({
          imgSrc: this.imgSrc,
          title: this.title,
          price: this.price,
        });
      this.$router.push({
        name: "art",
      });
    },
    onAddNewProduct() {
      this.addNewProduct({
        imgSrc: this.imgSrc,
        title: this.title,
        price: this.price,
      });
    },
  },

  mounted() {
    if (this.isEditMode) {
      const product = this.getProductById(this.receivedProductId);
      if (product) {
        this.imgSrc = product.imgSrc;
        this.title = product.title;
        this.price = product.price;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.Addbox {
  position: relative;
  top: 35px;
}
.inputlabel {
  margin: 12px;
}
.btnAdd {
  margin-top: 15px;
  border: none;
  border: 3px solid #64a5da;
  border-radius: 10px;
  padding: 9px;
  width: 100px;
  background-color: #64a5da;
  color: #92f8ff;
  font-size: 18px;
}
p {
  font-size: 20px;
  color: #d8bfd8;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
input {
  position: relative;
  display: block;
  padding: 12px 15px;
  width: 30%;
  left: 35%;
  border-radius: 10px;
  margin-top: 20px;
  border: 1.5px solid rgb(109, 87, 121);
  outline: none;
  background: #19052c;
  color: white;
}
</style>
