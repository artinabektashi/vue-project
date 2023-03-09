<template>
  <section class="container">
    <h1 style="margin-bottom: 40px; margin-top: 20px">Edit Data</h1>
    <div v-if="this.vueshop" class="card">
      <div class="card-body">
        <input
          type="text"
          placeholder="title.."
          class="form-control"
          v-model="vueshop.title"
        />
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <input
            placeholder="desciption.."
            type="text"
            class="form-control"
            v-model="vueshop.description"
          />
        </li>
        <li class="list-group-item">
          <input
            type="text"
            placeholder="$.."
            class="form-control"
            v-model="vueshop.price"
          />
        </li>
        <li class="list-group-item">
          <input type="text" class="form-control" v-model="vueshop.category" />
        </li>
      </ul>
      <Dropzone
        :vueshopId="this.$route.params.id"
        :initialFiles="vueshop.files"
      />
    </div>
    <button
      @click="goToList()"
      class="btn btn-danger"
      style="width: 150px; margin-top: 30px; float: right; margin-left: 10px"
    >
      Go back
    </button>
    <button
      class="btn btn-outline-success"
      @click="updateDoc((id = vueshop._id))"
      style="width: 150px; margin-top: 30px; float: right"
    >
      Update
    </button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  components: {
    Dropzone,
  },
  created() {
    this.fetchVueshop();
    axios
      .get(`http://localhost:4000/vueshop/list`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  data() {
    return {
      vueshop: null,
      fields: [],
    };
  },

 
};
</script>

<style scoped></style>
