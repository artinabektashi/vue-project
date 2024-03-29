<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Books Page</h3>

            <p>Add, Edit and Delete Books from the app down below</p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/products.svg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>

      <hr />
      <div class="product-test">
        <h3 class="d-inline-block">Books list</h3>
        <button
          @click="addNew()"
          class="btn btn-success float-right"
          style="float: right"
        >
          Add Product
        </button>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Modify</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  {{ product.name }}
                </td>
                <td>
                  {{ product.price }}
                </td>

                <td>
                  <button
                    class="btn btn-outline-primary"
                    style="width: 100px"
                    @click="editProduct(product)"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-outline-danger"
                    style="width: 100px"
                    @click="deleteProduct(product)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <div class="col-md-4">
                <h4 class="display-6">Books Details</h4>
                <hr />
                <div class="form-group" style="margin-top: 15px">
                  <input
                    type="text"
                    placeholder="Price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>

                <div class="form-group" style="margin-top: 15px">
                  <input
                    type="text"
                    @keyup.188="addTag()"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                  />
                  <div class="d-flex">
                    <p v-for="tag in product.tags" :key="tag">
                      <span class="p-1">{{ tag }}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group" style="margin-top: 15px">
                  <label for="product_image">Books Images</label>
                  <input
                    type="file"
                    @change="uploadImage"
                    class="form-control"
                  />
                </div>

                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    v-for="(image, index) in product.images"
                    :key="(image, index)"
                  >
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px" />
                      <span
                        class="delete-img"
                        @click="deleteImage(image, index)"
                        >X</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'new'"
            >
              Save Changes
            </button>
            <button
              @click="updateProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'edit'"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { db } from "../main";
require("firebase/compat/firestore");
import $ from "jquery";
import Swal from "sweetalert2";
import Toast from "sweetalert2";
import firebase from "firebase/compat/app";

export default {
  name: "Products",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      },
      activeItem: null,
      modal: null,
      tag: null,
    };
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    deleteImage(img, index) {
      let image = firebase.storage().refFromURL(img);

      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function () {
          console.log("image deleted");
        })
        .catch(function (error) {
          console.log("an error occurred", error);
        });
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = firebase.storage().ref("products/" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            console.log(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);

              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },
    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      };
    },

    addNew() {
      this.modal = "new";
      this.reset();
      $("#product").modal("show");
    },

    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
        icon: "success",
        title: "Updated successfully",
      });
      $("#product").modal("hide");
    },

    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      $("#product").modal("show");
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(doc["product.id"]);
          this.$firestore.products.doc(doc.id).delete(this.product.id);

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);

      Toast.fire({
        icon: "success",
        title: "Product Added Successfully",
      });
      $("#product").modal("hide");
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>
