<template>
  <div>
    <Navbar />
    <section class="container" style="margin-top: 90px">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <span class="discount">Up to 30% off</span>
            <DropzoneOffers
              style="width: 475px; height: 400px"
              :vueshopId="this.$route.params.id"
              :initialFiles="vueshop.files"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="margin-left: 40px; font-size: 23px">
                {{ this.vueshop.title }}
              </h5>

              <p
                class="card-text"
                style="margin-left: 40px; margin-top: 40px; color: grey"
              >
                {{ this.vueshop.description }}
              </p>
              <p class="card-text" style="margin-left: 40px">
                Category: {{ this.vueshop.category }}
              </p>

              <h5
                class="card-priceS"
                style="text-align: right; color: grey; margin-top: 120px"
              >
                {{ this.vueshop.price | currency }}
              </h5>
              <div style="margin-top: -35px; margin-left: 40px">
                <!-- <a
                  class="btn btn-warning border-0 mx-2 my-2 my-sm-0"
                  style="width: 230px; height: 45px; padding: 10px"
                  data-bs-toggle="modal"
                  data-bs-target="#miniCart"
              >
                  Order now <i class="fas fa-cart-plus"></i>
              </a> -->
              <router-link class="checkout-btn" tag="button" to="/checkout">
              <add-to-cart
                :p-id="vueshop.title"
                :price="vueshop.price"
                :name="vueshop.title"
              >
              </add-to-cart>
            </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import DropzoneOffers from "@/components/form/DropzoneOffers.vue";
export default {
  components: {
    DropzoneOffers,
  },
  created() {
    this.fetchVueshop();
  },

  data() {
    return {
      vueshop: null,
    };
  },
  methods: {
    async fetchVueshop() {
      this.vueshop = await apiRequest.getVueshop(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.discount {
  position: absolute;
  top: 0px;
  left: 0px;
  color: #ffffff;
  background-color: #987b6c;
  padding: 2px 8px;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.checkout-btn {
  display: inline-block;
  margin-top: 10px;
  background-color: #987b6c ;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
.checkout-btn:hover {
background-color: #d3c0b4;
  border-color: #d3c0b4;
  color: white;
}
</style>
