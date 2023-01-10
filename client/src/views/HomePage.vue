<template>
  <section>
    <div class="header">
      <h1>Welcome, username <br>
      Let's play with War of Battleship <br> and <br>
      let the war begin
      </h1>
    </div>
    <div class="btn-container">
      <a href=""><button>Singleplayer</button></a>
      <a href=""><button>Multiplayer</button></a>
    </div>
  </section>
</template>

<style scoped>
section{
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

.header{
  margin-top: 200px
}

.btn-container{
  margin-top: 50px;
}

section .header h1{
  animation: fade-inout 7s linear forwards;
  background: linear-gradient(to right, rgb(255, 130, 35), rgb(195, 26, 0));
  font-size: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-container a button{
  color: white;
  font-size: 15px;
  background: rgb(195, 26, 0);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 7px 50px;
  border-radius: 20px;
  margin: 10px;
  transition: 0.3;
  transition-property: background;
}

.btn-container a button:not(:last-child){
  margin-right: 30px;
}

.btn-container a button:hover{
  background: #ffffff;
  color: rgb(240, 32, 0);
}
</style>