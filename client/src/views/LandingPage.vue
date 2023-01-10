<template>
  <section>
    <div class="header">
      <h1>War of Battleship</h1>
    </div>
    <div class="btn-container">
      <a href=""><button>Login</button></a>
      <a href=""><button>Register</button></a>
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
  background-position: center
}

section .header{
  padding-top: 220px;
  padding-bottom: 100px;
}

@keyframes fade-inout{
  0%{ opacity: 0;}
  50%{ opacity: 0.5;}
  100%{ opacity: 1;}
}

section .header h1{
  animation: fade-inout 7s linear forwards;
  background: linear-gradient(to right, rgb(255, 130, 35), rgb(195, 26, 0));
  font-size: 60px;
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
  padding: 7px 60px;
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

.form-container{
  display: flex;
  border: 2px solid rgb(240, 32, 0);
  width: 600px;
  height: 600px;
  margin-left: 20px;
  margin-bottom: 30px;
  margin-top: 35px;
}

.form-container h1{
  font-size: 40px;
  display: flex;
  justify-content: center;
  padding: 30px 120px;
  color: rgb(240, 32, 0);
}
</style>