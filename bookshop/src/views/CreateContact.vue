<template>
  <div style="height: 100%">
    <form
      @submit.prevent="createContact"
      class="contactform contact_form"
      id="contact_form"
    >
      <Navbar />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossorigin="anonymous"
      />
      <section class="section gray-bg" id="contactus" style="height: 900px">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>Get In Touch</h2>
                <p>
                  For all enquiries, please email us using the form below and
                  our support team will answer all your questions.
                </p>
              </div>
            </div>
          </div>
          <div class="row flex-row-reverse">
            <div class="col-md-7 col-lg-8 m-15px-tb">
              <div class="contact-form">
                <div
                  class="returnmessage valid-feedback p-15px-b"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div class="empty_notice invalid-feedback p-15px-b">
                  <span>Please Fill Required Fields</span>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{ 'form-group--error': $v.form.name.$error }"
                    >
                      <input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        class="form-control"
                        v-model.trim="$v.form.name.$model"
                      />
                      <div class="text-danger" v-if="!$v.form.name.required">
                        Name is required
                      </div>
                      <div class="text-danger" v-if="!$v.form.name.minLength">
                        Name must have at least
                        {{ $v.form.name.$params.minLength.min }} letters.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="form-group"
                      :class="{ 'form-group--error': $v.form.email.$error }"
                    >
                      <input
                        id="email"
                        type="text"
                        placeholder="Email Address"
                        class="form-control"
                        v-model.trim="$v.form.email.$model"
                      />

                      <div class="text-danger" v-if="!$v.form.email.required">
                        Email is required
                      </div>
                      <div class="text-danger" v-if="!$v.form.email.minLength">
                        Email must have at least
                        {{ $v.form.email.$params.minLength.min }} letters.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div
                      class="form-group"
                      :class="{ 'form-group--error': $v.form.phone.$error }"
                    >
                      <input
                        id="subject"
                        type="text"
                        placeholder="Phone number"
                        class="form-control"
                        v-model.trim="$v.form.phone.$model"
                      />
                      <div class="text-danger" v-if="!$v.form.phone.required">
                        Phone number is required!
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div
                      class="form-group"
                      :class="{ 'form-group--error': $v.form.message.$error }"
                    >
                      <textarea
                        id="message"
                        placeholder="Message"
                        class="form-control"
                        rows="3"
                        v-model.trim="$v.form.message.$model"
                      ></textarea>
                      <div class="text-danger" v-if="!$v.form.message.required">
                        Message is required
                      </div>
                      <div
                        class="text-danger"
                        v-if="!$v.form.message.minLength"
                      >
                        Message must have at least
                        {{ $v.form.message.$params.minLength.min }} letters.
                      </div>
                      <div
                        class="text-danger"
                        v-if="!$v.form.message.maxLength"
                      >
                        Message must have at most
                        {{ $v.form.message.$params.maxLength.max }} letters.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="send">
                      <!-- <button class="px-btn theme" type="submit">
                        Contact
                      </button> -->
                      <button
                        class="px-btn theme"
                        type="submit"
                        :disabled="submitStatus === 'PENDING'"
                      >
                        Submit
                      </button>
                      <p class="typo__p" v-if="submitStatus === 'OK'">
                        Thanks for your submission!
                      </p>
                      <p class="typo__p" v-if="submitStatus === 'ERROR'">
                        Please fill the form correctly.
                      </p>
                      <p class="typo__p" v-if="submitStatus === 'PENDING'">
                        Sending...
                      </p>
                      <!-- <a id="send_message" class="px-btn theme" href="#"
                        ><span>Contact Us</span> <i class="arrow"></i
                      ></a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-5 col-lg-4 m-15px-tb"
              style="background-color: #f5f5f5"
            >
              <div class="contact-name">
                <h5>Mail</h5>
                <p>e-library@support.com</p>
              </div>
              <div class="contact-name">
                <h5>Visit My Studio</h5>
                <p>
                  Prishtina, Kosovo <br />
               
                </p>
              </div>
              <div class="contact-name">
                <h5>Phone</h5>
                <p>+383 49 234 423</p>
              </div>
              <div class="social-share nav">
                <a class="dribbble" href="#">
                  <i class="fab fa-dribbble"></i>
                </a>
                <a class="behance" href="#">
                  <i class="fab fa-behance"></i>
                </a>
                <a class="linkedin" href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>

    <mini-cart></mini-cart>
  </div>
</template>

<script>
import apiRequest from "../utility/apiRequest/";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  components: {},
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        minLength: minLength(10),
      },
      message: {
        required,
        minLength: minLength(15),
        maxLength: maxLength(100),
      },
      phone: {
        required,
      },
    },
  },
  data() {
    return {
      submitStatus: null,

      form: {
        message: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    async createContact() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = "ERROR";
          return;
        } else {
          const newContact = await apiRequest.createContact({ ...this.form });
          this.$router.push({
            name: "createContact",
            params: { id: newContact._id },
          });
          // do your submit logic here
          this.submitStatus = "PENDING";
          setTimeout(() => {
            this.submitStatus = "OK";
          }, 500);
        }

        alert("Contacted");
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>

<style>
body {
  color: #6f8ba4;
  margin-top: 20px;
}
.section {
  padding: 100px 0;
  position: relative;
}

.gray-bg {
  background-color: #f5f5f5;
}
/* Contact Us
---------------------*/
.contact-name {
  margin-bottom: 30px;
}
.contact-name h5 {
  font-size: 22px;
  color: #20247b;
  margin-bottom: 5px;
  font-weight: 600;
}
.contact-name p {
  font-size: 18px;
  margin: 0;
}

.social-share a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  text-align: center;
  margin-right: 10px;
}
.social-share .dribbble {
  box-shadow: 0 8px 30px -4px rgba(234, 76, 137, 0.5);
  background-color: #ea4c89;
}
.social-share .behance {
  box-shadow: 0 8px 30px -4px rgba(0, 103, 255, 0.5);
  background-color: #0067ff;
}
.social-share .linkedin {
  box-shadow: 0 8px 30px -4px rgba(1, 119, 172, 0.5);
  background-color: #0177ac;
}

.contact-form .form-control {
  border: none;
  border-bottom: 1px solid #20247b;
  background: transparent;
  border-radius: 0;
  padding-left: 0;
  box-shadow: none !important;
}
.contact-form .form-control:focus {
  border-bottom: 1px solid #fc5356;
}
.contact-form .form-control.invalid {
  border-bottom: 1px solid #ff0000;
}
.contact-form .send {
  margin-top: 20px;
}
@media (max-width: 767px) {
  .contact-form .send {
    margin-bottom: 20px;
  }
}

.section-title h2 {
  font-weight: 700;
  color: #20247b;
  font-size: 45px;
  margin: 0 0 15px;
  border-left: 5px solid #fc5356;
  padding-left: 15px;
}
.section-title {
  padding-bottom: 45px;
}
.contact-form .send {
  margin-top: 20px;
}
.px-btn {
  padding: 0 50px 0 20px;
  line-height: 60px;
  position: relative;
  display: inline-block;
  color: #20247b;
  background: none;
  border: none;
}
.px-btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 30px;
  background: transparent;
  border: 1px solid rgba(252, 83, 86, 0.6);
  border-right: 1px solid transparent;
  -moz-transition: ease all 0.35s;
  -o-transition: ease all 0.35s;
  -webkit-transition: ease all 0.35s;
  transition: ease all 0.35s;
  width: 60px;
  height: 60px;
}
.px-btn .arrow {
  width: 13px;
  height: 2px;
  background: currentColor;
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 25px;
}
.px-btn .arrow:after {
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-top: 2px solid currentColor;
  content: "";
  position: absolute;
  top: -3px;
  right: 0;
  display: inline-block;
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
