<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="">
      <div
        id="carousel-example-2"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <!--Indicators-->
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carousel-example-2"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li data-bs-target="#carousel-example-2" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel-example-2" data-bs-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="First slide"
                height="590"
              />
              <div class="mask rgba-black-light"></div>
            </div>
            <div class="carousel-caption"></div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1568047571827-8c46fe611345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
                height="590"
              />
              <div class="mask rgba-black-strong"></div>
            </div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1623031345438-387dd3c45e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
                alt="Third slide"
                height="590"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
          </div>
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a
          class="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <Hero />

    <products-list />

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="https://thumbs.dreamstime.com/b/open-book-notes-watercolor-old-books-isolated-background-148934072.jpg" alt="" width="300" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>At our e-library, we believe that knowledge should be accessible to everyone, no matter where they are in the world. Our platform offers a wide range of digital resources, from bestselling novels and academic publications to educational materials and research databases. We are committed to providing an easy-to-use and reliable platform that enables our users to access the information they need to learn, grow, and achieve their goals. Whether you're a student, a professional, or simply an avid reader, our e-library is the perfect place to explore new ideas, expand your horizons, and enrich your life.</p>
          <button
            class="btn custom-btn btn-outline-primary mr-4"
            @click="goToAbout()"
          >
            E-Library's History
          </button>
        </div>
      </div>
    </div>
    <Login></Login>

    <mini-cart></mini-cart>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Footer from "./Footer.vue";

export default {
  name: "home",
  components: {
    Hero,
    Login,
    Footer,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    onSubmit(evt) {
      evt.preventDefault();
    },
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
@media (max-width: 575.98px) {
  .bv-example-row {
    display: block;
    width: 280px;
    height: auto;
    padding: 5px;
  }
}

.product-img {
  border: 1px solid lightgrey;
  padding: 7px;

  background-color: white;
  border-radius: 3%;
}
.titulli {
  color: #c60021;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}
.price {
  color: black;
  font-size: 1.2rem;
}
.euro {
  font-size: 1rem;
  color: gray;
}
.single-new-pro .product-img {
  overflow: hidden;
  margin-bottom: 15px;
}

.single-new-pro .product-img img {
  width: 100%;
  transform: scale(1);
  -webkit-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  -ms-transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  transition: all 0.4s ease-out 0s;
}
.single-product .product-img {
  position: relative;
  overflow: hidden;
}

.text-center {
  text-align: center !important;
}

</style>

