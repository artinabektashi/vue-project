<template>
    <div class="add-to-cart">
      <button class="btn btn-primary custom-btn" @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import $ from "jquery";
  
  export default {
    name: "add-to-cart",
    props: {
      name: String,
      price: String,
      image: String,
      pId: String,
    },
    data() {
      return {
        item: {
          productName: this.name,
          productImage: this.image,
          productPrice: this.price,
          product_id: this.pId,
          productQuantity: 1,
        },
      };
    },
    methods: {
      addToCart() {
        $("#miniCart").modal("show");
        this.$store.commit("addToCart", this.item);
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-btn{
    background-color: #987b6c !important;
    border-color: #987b6c !important;
    color: #fff !important;
  }
  .custom-btn:hover{
    background-color: #d3c0b4 !important;
    border-color: #d3c0b4 !important;
    color: white !important;
  }
    </style>
  