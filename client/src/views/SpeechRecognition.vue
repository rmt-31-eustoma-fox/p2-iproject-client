<template>
  <body class="container pt-5 bg-dark">
    <h2 class="mt-4 text-light">Transcript</h2>
    <div
      class="p-3"
      style="border: 1px solid gray; height: 300px; border-radius: 8px"
    >
      <span id="final" class="text-light"></span>
      <span id="interim" class="text-secondary"></span>
    </div>
    <div class="mt-4">
      <button @click="speechRecog" class="btn btn-success" id="start">Start</button>
      <button class="btn btn-danger" id="stop">Stop</button>
      <p id="status" class="lead mt-3 text-light" style="display: none">
        Listenting ...
      </p>
    </div>
  </body>
</template>

<script>
export default {
  methods: {
    speechRecog() {
      if ("webkitSpeechRecognition" in window) {
        let speechRecognition = new webkitSpeechRecognition();
        let final_transcript = "";
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.onstart = () => {
          document.querySelector("#status").style.display = "block";
        };
        speechRecognition.onerror = () => {
          document.querySelector("#status").style.display = "none";
        };
        speechRecognition.onend = () => {
          document.querySelector("#status").style.display = "none";
        };

        speechRecognition.onresult = (event) => {
          let interim_transcript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }

          document.querySelector("#final").innerHTML = final_transcript;
          document.querySelector("#interim").innerHTML = interim_transcript;
        };

        document.querySelector("#start").onclick = () => {
          speechRecognition.start();
        };
        document.querySelector("#stop").onclick = () => {
          speechRecognition.stop();
        };
      } else {
        console.log("Speech Recognition Not Available");
      }
    },
  },
};
</script>
