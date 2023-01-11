<script>
import {mapActions} from "pinia"
import {useCounterStore} from "../stores/counter"
export default {
  methods: {
    ...mapActions(useCounterStore, ["subscription"]),
    subscriptionHandler(){
      this.subscription()
    }
  }
}
</script>

<template>
  <body>
  <div class="wrapper">
    <div class="table premium">
      <div class="head_tab"><h2>Subscribe<br>Premium</h2></div>
      <div class="aj_p"><p>Perfect package for personal</p></div>
      <div class="ribbon"><span>BEST VALUE</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <h2>Rp. 12.500</h2>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <div class="btn"><button @click="subscriptionHandler">Subscribe</button></div>
        <li>
          <span class="list-name">Open auto translate feature</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Open speech to text feature</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Member priority</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
      </ul>
    </div>
  </div>

</body>
</template>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: #1e242a;
}
.wrapper{
  max-width: 1090px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wrapper .table{
  background: rgb(137, 137, 137);
  width: calc(33% - 20px);
  padding: 30px 30px;
  position: relative;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  text-align: center;
}
.table .price-section{
  display: flex;
  justify-content: center;
}
.table .price-area{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  padding: 2px;
}

.aj_p{
  text-align: center;
}

p.aj_des {
  color: grey;
  padding-bottom: 30px;
  font-size: 14px;
}

.table.premium {
  margin: -20px;
  margin-left: 350px;
}

.premium_all {
  padding-top: 22px;
}

.price-area .inner-area{
  height: 100%;
  line-height: 117px;
  text-align: center;
  color: #fff;
  position: relative;
  width: 190x;
}

.price-area .inner-area .text{
  font-size: 25px;
  font-weight: 400;
  position: absolute;
  top: -10px;
  left: 5px;
}

.price-area .inner-area .price{
  font-size: 45px;
  font-weight: 500;
  margin-right: 20px;
}

.table .package-name{
  width: 100%;
  height: 2px;
  margin :35px 0;
  position: relative;
}

.table .features li{
  margin-bottom: 15px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}


.table .btn{
  width: 100%;
  display: flex;
  justify-content: center;
}

.table .btn button{
  width: 80%;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.table .btn button:hover{
  border-radius: 5px;
}


.premium ::selection,
.premium .price-area,
.premium .inner-area,
.premium .head_tab h2{
  color:#023285;
}

.premium .btn button{
  background: #023285;
  color: #fff;
  margin-top: -75px;
}

.premium .btn button:hover{
  background: rgb(0, 0, 0);
  color: #fff;
}


@media (max-width:756px){
  .wrapper .table{
    width: 100%;
  }

  .table.premium{
    margin: 40px 0px;
  }
  .table.ultimate{
    margin: 0px;
  }
}

::selection{
  color:#fff;
}

.table .ribbon{
  width: 150px;
  height: 150px;
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
}

.table .ribbon::before,
table .ribbon::after{
  position: absolute;
  content: "";
  z-index: -1;
  display: block;
  border: 7px solid #023285;
  border-top-color: transparent;
  border-left-color: transparent;
}

.table .ribbon::before{
  top: 0px;
  right: 15px;
}

.table .ribbon::after{
  bottom: 15px;
  left: 0px;
}

.table .ribbon span{
  position: absolute;
  top:30px;
  right: 0;
  transform: rotate(-45deg);
  width: 200px;
  background: #023285;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 17px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
}
</style>