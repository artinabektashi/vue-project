<template>
    <div class="hero">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-5">
            <div class="hero-content">
              <h1 class="hero-title">E-Library</h1>
              <p>
                Offers features such as bookmarks, notes, and highlighting for better organization and study.
              </p>
              <p>Access to a vast collection of books, journals, and other resources at your fingertips.</p>
              <p>Convenient 24/7 access from anywhere with an internet connection.</p>
              <div class="hero-btn mt-5">
                <button class="btn custom-btn btn-info mr-4" disabled>
                  Explore
                </button>
                <button
                  class="btn custom-btn btn-outline-warning"
                  style="margin-left: 10px"
                  @click="goToOffers()"
                >
                  Best Offers
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="graphic">
              <img src="https://cdn01.pinkoi.com/product/TCxAtGnW/1/640x530.jpg" alt="" style="max-width: 50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Hero",
    props: {
      msg: String,
    },
    methods: {
      goToOffers() {
        this.$router.push("offersList");
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .hero {
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
  </style>
  