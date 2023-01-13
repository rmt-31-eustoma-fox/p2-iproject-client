import { defineStore } from "pinia";
import axios from "axios";
// const Swal = require("sweetalert2");
// const baseUrl = "http://localhost:3000";
const baseUrl = "https://today-app-production.up.railway.app";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    dataAllTodo: [],
    totalTodo: "",
    dataTodoList: "",
    datalocation: "",
    dataCategory: "",
    dataIp: "",
    gempaterbaru: "",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async geolocation(data) {
      console.log(data);
      try {
        const location = await axios.get("https://api.ipgeolocation.io/ipgeo", {
          params: {
            apiKey: "50dc20dc04d74e048b1600a751933f57",
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.datalocation = location.data;
        // console.log(location.data);
      } catch (error) {
        console.log(error);
      }
    },
    async handleLogin(data) {
      try {
        const userLogin = await axios.post(baseUrl + "/login", {
          email: data.email,
          password: data.password,
        });
        localStorage.access_token = userLogin.data.access_token;
        localStorage.username = userLogin.data.fullname;
        localStorage.image = userLogin.data.imageUrl;
        this.router.push("/");
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't Logout!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("success logout.", "success");
          localStorage.clear();
          this.router.push("/login");
        }
      });
    },
    async register(data) {
      try {
        const regUser = await axios.post(baseUrl + "/register", {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
          imageUrl: data.imageUrl,
        });

        this.router.push("/login");
        if (regUser) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success register, please login ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    async getAlltodo() {
      try {
        const dataTodo = await axios.get(baseUrl + "/today", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.dataAllTodo = dataTodo.data.data;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async todoId(data) {
      // console.log(data);
      try {
        const dataTodo = await axios.get(baseUrl + `/today/todo/${data}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log(dataTodo.data.data);
        this.dataTodoList = dataTodo.data.data;
        this.router.push(`/todo/${data}`);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async getallCategory() {
      try {
        const getallCategory = await axios.get(baseUrl + "/today/category", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log();
        this.dataCategory = getallCategory.data.data;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async createTodo(data) {
      try {
        const createTodo = await axios.post(
          baseUrl + "/today/todo",
          {
            nameTodo: data.nameTodo,
            dateEnd: data.dateEnd,
            CategoryId: data.CategoryId,
            level: data.level,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.getallCategory();
        this.router.push("/");
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async insertList(data, id) {
      try {
        const dataList = await axios.post(
          baseUrl + `/today/todo/${id}/todolist`,
          {
            nameList: data.nameList,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.todoId(id);
        // console.log(dataList);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async handleCredentialResponse(response) {
      // console.log(response);
      try {
        const googlesign = await axios.post(
          baseUrl + "/sign",
          {},
          {
            headers: {
              "google-oauth-token": response.credential,
            },
          }
        );
        console.log(googlesign);
        localStorage.access_token = googlesign.data.access_token;
        localStorage.username = googlesign.data.username;
        localStorage.image = googlesign.data.image;
        // this.isLogin = "true";
        this.router.push("/");
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async getIp() {
      try {
        const myIp = await axios.get("https://api.ipify.org?format=json");
        // console.log(myIp.data.ip);
        this.dataIp = myIp.data.ip;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async getcomplete(idTodo, idList) {
      try {
        const complete = axios({
          url: baseUrl + `/today/todo/${idTodo}/todolist/${idList}`,
          data: {},
          headers: {
            access_token: localStorage.access_token,
          },
          method: "patch",
        });
        console.log(complete);
        this.todoId(idTodo);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async getDelete(idTodo, idList) {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          axios({
            url: baseUrl + `/today/todo/${idTodo}/todolist/${idList}`,
            data: {},
            headers: {
              access_token: localStorage.access_token,
            },
            method: "delete",
          })
            .then((_) => {
              this.todoId(idTodo);
            })
            .catch((error) => {
              Swal.fire(error.response.data.message);
            });
        }
      });
    },
    async deleteTodo(id) {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          axios
            .delete(baseUrl + `/today/todo/${id}`, {
              headers: {
                access_token: localStorage.access_token,
              },
            })
            .then((_) => {
              this.getAlltodo();
            })
            .then((error) => {
              Swal.fire(error.response.data.message);
            });
        }
      });
    },
    async addCatgeory(data) {
      try {
        const addCatgeory = axios.post(
          baseUrl + "/today/category",
          {
            nameCategory: data.nameCategory,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.getallCategory();
        console.log(addCatgeory);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async destroyCategory(id) {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          axios
            .delete(baseUrl + `/today/category/${id}`, {
              headers: {
                access_token: localStorage.access_token,
              },
            })
            .then((_) => {
              this.getallCategory();
            })
            .catch((error) => {
              Swal.fire(error.response.data.message);
            });
        }
      });
    },
    async getGempa() {
      try {
        const dataGempa = await axios.get(baseUrl + "/today/gempa", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.gempaterbaru = dataGempa.data.data.Infogempa;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
