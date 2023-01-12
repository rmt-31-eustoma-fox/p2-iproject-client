import {
  defineStore
} from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'https://iproject-production.up.railway.app'

import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider
} from "firebase/auth";
const provider = new TwitterAuthProvider();
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    email: '',
    userRole: '',
    products: [],
    carts: []
  }),
  getters: {

  },
  actions: {
    checkAccess() {
      if (localStorage.access_token) {
        this.isLogin = true
        this.email = localStorage.email;
        this.userRole = localStorage.role
      } else {
        this.isLogin = false
      }
    },

    async register(email, password) {
      try {
        // console.log(email, password);
        await axios({
          url: BASE_URL + '/register',
          method: 'POST',
          data: {
            email,
            password
          }
        })
        this.router.push('/login')
        Swal.fire({
          icon: "success",
          title: "Success register, check your email"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    async login(email, password) {
      try {
        // console.log(email, password);
        const {
          data
        } = await axios({
          url: BASE_URL + '/login',
          method: 'POST',
          data: {
            email,
            password
          }
        })

        localStorage.access_token = data.access_token
        this.router.push('/')
        this.checkAccess()
        Swal.fire({
          icon: "success",
          title: "thankyou for visiting"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    async fetchProduct() {
      try {
        const {
          data
        } = await axios({
          url: BASE_URL + '/products',
          method: 'GET',
        })
        this.products = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    async addToCart(ProductId, quantity) {
      // console.log({
      //   id,
      //   quantity
      // });

      try {
        const {
          data
        } = await axios({
          url: BASE_URL + '/carts',
          method: 'POST',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            ProductId,
            quantity
          }
        })
        this.carts = data
        this.router.push('/carts')
        Swal.fire({
          icon: "success",
          title: "Check your cart details"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    async fetchCarts() {
      try {
        const {
          data
        } = await axios({
          url: BASE_URL + '/carts',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        // console.log(data);
        this.carts = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: "you haven't product to buy",
        });
      }
    },

    async deleteCartStore(id) {
      // console.log(id, 'car');
      try {
        await axios({
          url: BASE_URL + `/carts/${id}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.fetchCarts()
        Swal.fire({
          icon: "success",
          title: "Succes delete a cart"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }

    },

    async checkOut() {
      console.log('kepanggil');
      try {
        const {
          data
        } = await axios({
          url: BASE_URL + '/carts',
          method: 'PUT',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.fetchCarts()
        this.carts = []
        // console.log(data.midtransToken.redirect_url);
        // Swal.fire({
        //   title: '<i>Go TO Payment</u>',
        //   type: 'info',
        //   html: 'Click it <br>' +
        //     ` ======<a href="${data.midtransToken.redirect_url}">links</a>====== `
        //   // showCloseButton: true,
        //   // showCancelButton: true,
        //   // confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        //   // cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
        // })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    // async async successPayment(id) {
    //   try {
    //     const {
    //       data
    //     } = await axios({
    //       url: this.baseUrl + "transactions/" + id,
    //       method: "patch",
    //       headers: {
    //         access_token: localStorage.access_token,
    //       },
    //     })
    //     this.fetchTransaction()
    //   } catch (error) {
    //     Swal.fire({
    //       icon: "error",
    //       title: error.response.data.message
    //     })
    //   }
    // },

    async makePayment() {
      try {
        const {
          data
        } = await axios({
          url: BASE_URL + "/carts/payment/",
          method: 'get',
          headers: {
            access_token: localStorage.access_token,
          },
        })
        const cb = this.checkOut
        const cb1 = this.fetchCarts
        window.snap.pay(data.midtransToken.token, {
          onSuccess: function (result) {
            Swal.fire({
              icon: "success",
              title: "Payment Success"
            })
            cb()
            cb1()
          },
          onError: function (result) {
            Swal.fire({
              icon: "error",
              title: "Payment Failed"
            })
          },
          onClose: function () {
            Swal.fire({
              icon: "error",
              title: "You did not finish payment yet"
            })
          }
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: error.response.data.message,
        });
      }
    },

    callback(response) {
      // console.log(response.credential);
      axios({
          method: "POST",
          url: BASE_URL + "/sign-in",
          headers: {
            "google-auth-token": response.credential,
          },
        })
        .then(({
          data
        }) => {
          Swal.fire({
            title: "Good job!",
            text: "You are logged in now!",
            icon: "success",
            button: "OK!",
          });
          // console.log(data);
          localStorage.access_token = data.access_token;
          localStorage.email = data.email;
          localStorage.role = data.role;
          this.router.push("/");
          this.checkAccess();
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "error",
            text: err.response.data.message,
          });
        })
    }
  },
})