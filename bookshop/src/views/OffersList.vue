<template>
  <div>
    <Navbar />

    <div class="container">
      <div
        class="row"
        id="spans"
        style="
          margin-bottom: 50px;
          margin-top: -100px;
          background-color: #eddece;
        "
      >
       

        <div style="margin-top: 50px">
          <!-- <button class="btn btn-info mb-2" style="float: right" disabled>
            Pay securely
          </button> -->
          <h5 style="text-align: center; color: grey">
           Find your favorite genre!
          </h5>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossorigin="anonymous"
      />

      <div class="row">
        <!-- <h3 style="text-align: center; margin-bottom: 30px">
          Deals of the Day, Shop & much more
        </h3> -->
        <div class="col-xl-3 col-lg-6" v-for="field in fields" :key="field.id">
          <div class="card l-bg-blue-dark">
            <div class="card-statistic-3 p-4">
              <!--Qitu-->
              <span class="discount">Up to 30% off</span>
              <DropzoneOffers
                :vueshopId="field._id"
                :initialFiles="field.files"
                style="padding-right: 50px"
              />

              <div class="list-group list-group-flush">
                <h5 class="card-priceS" style="text-align: right; color: grey">
                  {{ field.price | currency }}
                </h5>
              </div>

              <div class="card-body">
                <router-link
                  class="btn btn-outline-danger custom-btn"
                  style="width: 110px; margin-left: -15px"
                  :to="{ name: 'offersDetails', params: { id: field._id } }"
                >
                  See Details
                </router-link>
                <a
                  class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
                  data-bs-toggle="modal"
                  data-bs-target="#miniCart"
                >
                  <i class="fas fa-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <mini-cart></mini-cart>
  </div>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import axios from "axios";
import DropzoneOffers from "../components/form/DropzoneOffers.vue";
import MiniCart from "../components/MiniCart.vue";
import Footer from "./Footer.vue";
export default {
  props: {
    vueshop: Object,
  },
  components: {
    DropzoneOffers,
    MiniCart,
    Footer,
  },
  created() {
    axios
      .get(`http://localhost:4000/vueshop/list`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async fetchVueshop() {
      this.vueshopList = await apiRequest.getVueShopList();
    },

    async deleteDoc(id) {
      try {
        await apiRequest.deleteMethod(id);
        window.location.reload();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  computed: {
    src() {
      const filename = this.vueshop.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
};
</script>

<style>
.l-bg-blue-dark {
background: linear-gradient(to right, #c6a9a3, #eddece) !important;
color: #fff;
margin-bottom: 15px;
}
.btn-outline-info {
  color: #a1806f !important;
  border-color: #F7C59F !important;
}

.btn-outline-info:hover {
  background-color: #a38879 !important;
  color: white !important;
}

.custom-btn {
  background-color: #987b6c !important;
  border-color: #a38879 !important;
  color: #fff !important;
}

.custom-btn:hover {
  background-color: #a38879 !important;
  color: white !important;
}
.discount {
  position: absolute;
  top: 25px;
  left: 25px;
  color: #ffffff;
  background-color: #987b6c;
  padding: 2px 8px;
  text-transform: uppercase;
  font-size: 0.85rem;
}
</style>
