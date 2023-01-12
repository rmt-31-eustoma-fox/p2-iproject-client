<script >
import CardRoom from "../components/CardRoom.vue";
import { useCounterStore } from "../stores/counter";
import { mapActions, mapWritableState } from "pinia";
export default {
  components: {
    CardRoom,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["roomsList", "isLoading", "subscribe"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["addRoom", "getRoom"]),
    addRoomHandler() {
      this.addRoom(this.room);
      this.getRoom();
    },
  },
  created() {
    this.getRoom();
    // this.isSubscribed = localStorage.isSubscribed
    this.subscribe = localStorage.isSubscribed;
    this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
  },
};
</script>

<template>
  <section>
    <div class="container-room">
      <div class="room-header">
        <h1>Choose a room</h1>
      </div>
        <div class="container">
          <div class="row">
          <CardRoom
            v-for="(room, index) in roomsList"
            :key="index"
            :room="room"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: white;
  display: flex;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
}

div.card {
  background: #000;
}

.container-room {
  display: flex;
  flex-direction: column;
}

.input-chat {
  display: flex;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.input-room {
  background: #000;
  margin-right: 8px;
}

.container-chat {
  display: flex;
  border: 3px solid rgb(19, 19, 19);
  width: 260px;
  height: 340px;
  margin-bottom: 30px;
  margin-top: 52px;
  margin-right: 30px;
}
.text-message {
  background-color: black;
  width: 260px;
  height: 70px;
}

.room-header {
  display: flex;
  width: 500px;
  height: 60px;
  margin-bottom: 30px;
  margin-top: 35px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

}

.room-header h1 {
  margin-top: 50px;
  margin-left: 380px;
  width: 400px;
}

.create-room {
  display: flex;
  justify-content: flex-end;
  width: 140vh;
}

.create-room a {
  text-decoration: none;
}


body .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px 0;
}

body .container .card {
  position: relative;
  min-width: 300px;
  height: 370px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

body .container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

body .container .card .box:hover {
  transform: translateY(-40px);
}

body .container .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

body .container .card .box .content {
  padding: 20px;
  text-align: center;
}

body .container .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

body .container .card .box .content h3 {
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

body .container .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

body .container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
body .container .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
</style>
