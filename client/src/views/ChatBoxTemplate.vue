<template>
<section>
  <div class="message-container">
  <div class="received-message">
    <p id="received-message-text"></p>
  </div>
  <div class="input-container">
    <textarea id="input-message"></textarea>
    <div class="button-container">
      <button id="translate-button">Translate</button>
      <button id="start-listening-button">Start Listening</button>
      <button id="stop-listening-button">Stop Listening</button>
    </div>
  </div>
</div>
</section>
</template>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
}

.received-message {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

#received-message-text {
  font-size: 16px;
  color: #333;
}

.input-container {
  width: 100%;
}

#input-message {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  resize: none;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #1e88e5;
}
</style>
