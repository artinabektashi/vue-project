<template>
  <div class="checkout">
    <Navbar></Navbar>

    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout Page</h4>
          <ul>
            <!--:key="item"-->
            <li
              v-for="item in this.$store.state.cart"
              :key="item.id"
              class="media"
            >
              <img
                :src="item.productImage"
                width="80px"
                class="align-self-center"
              />
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}
                  <span
                    style="float: right"
                    class="float-right"
                    @click="$store.commit('removeFromCart', item)"
                    >X</span
                  >
                </h5>
                <p class="mt-0">{{ item.productPrice | currency }}</p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p>Total Price : {{ this.$store.getters.totalPrice | currency }}</p>

        </div>
      </div>
    </div>
    <mini-cart></mini-cart>
  </div>
</template>

<script></script>
