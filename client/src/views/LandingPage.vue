<template>
  <section class="body-style">
    <div id="main">
      <div id="box1">
        
      </div>
      <div id="box2">
        <div id="text">
          DASH <br>CHAT 
        </div>
      </div>
      <div id="box3">
        <div id="container">
          <div id="logo">
              <img src="logo" />
          </div>
          <div id="menu">
            <ul>
              <router-link to="/about" class="router">ABOUT</router-link>
              <router-link to="/login" class="router">LOGIN</router-link>
              <router-link to="/register" class="router">REGISTER</router-link>
              <router-link to="/contact" class="router">CONTACT</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.body-style{
  margin: 0px;
  background: #1e242a;
}
#main{
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  
}
#box1{
  width: 530px;
  height: 625px;
  background-image: url("../assets/1.png");
  position: absolute;
  bottom: -100%;
  left: 30%;
  animation: anim 2s forwards, anim2 3s forwards 3s;
}

#box1:after{
  content: '';
  position: absolute;
  width: 530px;
  height: 625px;
  background-image: url("../assets/2.png");
  left: 0px;
  z-index: -1;
}

@keyframes anim2{
  from{
    left:30%;
    width: 530px;
  }
  to{
    width: 0px;
    left: 50%;
  }
}

#box2{
  width: auto;
  height: auto;
  font-family: 'Bahnschrift Condensed';
  color: white;
  font-size: 10em;
  font-weight: 500;
  line-height: 130px;
  position: absolute;
  top: 250px;
  left: 100px;
  overflow: hidden;
}

#text{
  position: relative;
  letter-spacing: -100%;
  animation: anim 2s forwards, anim3 3s forwards 3s;
}

@keyframes anim{
  from{
    bottom: -100%;
  }
  to{
    bottom: 0%;
  }
}

@keyframes anim3{
  from{
    left: -100%;
  }
  to{
    left: 0%;
  }
}


#box3{
  overflow: hidden;
}

#container{
  width: 100%;
  position: absolute;
  top: -100%;
  animation: anim4 2s forwards 2.5s;
}

#logo{
  float: left;
  margin-left: 100px;
  margin-top: 20px;
}

#logo img{
  width: 50px;
}

#menu{
  font-family: 'Bahnschrift Condensed';
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  margin-right: 150px;
  margin-top: 20px;
  float: right;
}

#menu ul{
  list-style: none;
}

#menu ul a.router{
  color:white;
  text-decoration: none;
  display: inline-block;
  margin-left: 100px;
}

@keyframes anim4{
  from{
    top: -100%;
  }
  to{
    top: 0%;
  }
}
</style>
