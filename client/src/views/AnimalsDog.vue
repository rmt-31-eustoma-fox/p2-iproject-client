<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapWritableState } from "pinia";
import io from "socket.io-client";
export default {
  data() {
    return {
      text: "",
      messages: [],
      factDog: this.dogMessage? this.dogMessage : ""
    };
  },
  computed: {
    ...mapWritableState(useCounterStore, ["roomsList", "translatedMessage", "dogMessage", "subscribe", "isLoading"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getRoom", "translate", "dogFact"]),
    async dogFactHandler() {
      await this.dogFact()

      const messageDog = {
        id: new Date(),
        text: this.dogMessage,
        user: localStorage.username,
      };
      this.messages.push(messageDog);
    },
    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date(),
        text: this.text,
        user: localStorage.username,
      };
      console.log(this.messages.length);
      if (this.messages.length > 9) {
        console.log(this.messages);
        this.messages.shift();
      }
      this.messages.push(message);
      console.log(this.messages);
      this.socketInstance.emit("message-dog", message);
    },
    async translateHandler() {
      await this.translate(this.text);
      console.log(this.translatedMessage);
      const message = {
        id: new Date(),
        text: this.translatedMessage,
        user: localStorage.username,
      };
      await this.messages.push(message);
      this.translatedMessage = "";
      await this.socketInstance.emit("message", message);
    },
    speechRecog() {
      if ("webkitSpeechRecognition" in window) {
        // Initialize webkitSpeechRecognition
        let speechRecognition = new webkitSpeechRecognition();

        // String for the Final Transcript
        let final_transcript = "";

        // Set the properties for the Speech Recognition object
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;

        // Callback Function for the onStart Event
        speechRecognition.onstart = () => {
          // Show the Status Element
          document.querySelector("#status").style.display = "block";
        };
        speechRecognition.onerror = () => {
          // Hide the Status Element
          document.querySelector("#status").style.display = "none";
        };
        speechRecognition.onend = () => {
          // Hide the Status Element
          document.querySelector("#status").style.display = "none";
        };

        speechRecognition.onresult = (event) => {
          // Create the interim transcript string locally because we don't want it to persist like final transcript
          let interim_transcript = "";

          // Loop through the results from the speech recognition object.
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
            if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }

          // Set the Final transcript and Interim transcript.
          document.querySelector("#final").value = final_transcript;
          document.querySelector(".text-message").value = interim_transcript;
        };

        // Set the onClick property of the start button
        document.querySelector("#start").onclick = () => {
          // Start the Speech Recognition
          speechRecognition.start();
        };
        // Set the onClick property of the stop button
        document.querySelector("#stop").onclick = () => {
          // Stop the Speech Recognition
          speechRecognition.stop();
        };
      } else {
        console.log("Speech Recognition Not Available");
      }
    },
  },
  created() {
    this.getRoom();
    this.subscribe = localStorage.isSubscribed
    this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
  },
  mounted() {
    this.socketInstance = io("http://localhost:3000");
    const room = "Animals-Dog";
    this.socketInstance.on("message: received-dog", (data) => {
      this.messages.push(data);
    });

    this.socketInstance.on("chat message", (data) => {
      const message = {
        id: new Date(),
        text: `${data.username} has joined the ${data.room} room`,
        user: "notification ",
      };
      this.messages.push(message);
    });

    this.socketInstance.emit("join", {
      room: room,
      username: localStorage.username,
    });
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="card">
        <div class="list-container">
          <div
            class="text-message"
            v-for="message in messages"
            :key="message.id"
          >
            <b>{{ message.user }}</b>
            <b>: {{ message.text }}</b>
          </div>
        </div>
      </div>
      <div class="container-input">
          <textarea
            v-model="text"
            class="input-message"
            id="final"
            @keyup.enter="sendMessage"
          ></textarea>
          <div v-if="subscribe" style="width: 400px; margin-top:7px">
            <button
              @click="translateHandler"
              class="btn btn-outline-light btn-lg px-5"
            >
              Translate: id-en
            </button>
            <button @click="speechRecog" class="btn btn-outline-light btn-lg px-5" id="start">
              Start
            </button> <br>
            <button class="btn btn-outline-light btn-lg px-5" id="stop">Stop</button>
            <p id="status" class="lead mt-3 text-light" style="display: none">
              Listening ...
            </p>
          </div>
      </div>
      <div>
        <div>
          <p>{{ this.factDog }}</p>
        </div>
<div class="button-dog">
        <button @click="dogFactHandler" class="btn btn-outline-light btn-lg px-5" id="start">
              Dog-fact
            </button>
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
}

.card {
  width: 1000px;
  height: 1200px;
}

.btn{
  margin: 10px;
}

.button-dog{
  justify-content: flex-start;
  margin-left: 540px;
}

.input-message {
  width: 1000px;
  height: 135px;
  background-color: black;
  margin: 20px;
  
}
.list-containe b {
  padding: 10px;
}

.container-input {
  display: flex;
  flex-wrap: nowrap;
  width: 950px;
}

.text-message {
  margin: 20px;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  background-size: cover;
  background-position: center;
}

div.card {
  background: #000;
}

.input-room {
  background: #000;
  margin-right: 8px;
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
  margin-top: 13px;
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
  max-width: 1000px;
  margin: 40px 0;
  max-height: 1300px;
}

body .container .card {
  position: relative;
  min-width: 300px;
  height: 450px;
  box-shadow: inset 5px 5px 5px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.2);

  border-radius: 15px;
  margin-top: 70px;
  margin: 10px;
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
