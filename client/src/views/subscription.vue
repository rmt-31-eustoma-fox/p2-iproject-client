<template>
  <body>
  <div class="wrapper">
    <div class="table basic">
      <div class="head_tab"><h2>Single<br> Web Hosting</h2></div>
      <div class="aj_p"><p>Ideal solution for beginners</p></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">₹</span>
            <span class="price">29<span style="font-size:12px">/mo</span></span>

          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <div class="btn"><button>Add to Cart</button></div>
        <p class="aj_des">₹159/mo when you renew</p>
        <li>
          <span class="list-name">1 Website</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">~10000 Visits Monthly</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">30 GB SSD Storage</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">100 GB Bandwidth</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div><h2>See all features <span class="icon cross"><i class="fa fa-angle-down"></i></span></h2></div>
    </div>
    <div class="table premium">
      <div class="head_tab"><h2>Premium <br>Web Hosting</h2></div>
      <div class="aj_p"><p>Perfect package for personal</p></div>
      <div class="ribbon"><span>BEST VALUE</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">₹</span>
            <span class="price">59<span style="font-size:12px">/mo</span></span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <div class="btn"><button>Add to Cart</button></div>
        <p class="aj_des">₹159/mo when you renew</p>
        <li>
          <span class="list-name">50 Website</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">~25000 Visits Monthly </span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">60 GB SSD Storage</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">200 GB Bandwidth</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div class="premium_all"><h2>See all features <span class="icon cross"><i class="fa fa-angle-down"></i></span></h2></div>
    </div>
    <div class="table ultimate">
      <div class="head_tab"><h2>Ultimate <br>Web Hosting</h2></div>
      <div class="aj_p"><p>Perfect package for businesses</p></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">₹</span>
            <span class="price">99<span style="font-size:12px">/mo</span></span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <div class="btn"><button>Add to Cart</button></div>
        <p class="aj_des">₹159/mo when you renew</p>
        <li>
          <span class="list-name">100 Website</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">~75000 Visits Monthly </span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">200 GB SSD Storage</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">500 GB Bandwidth</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
      </ul>
      <div><h2>See all features <span class="icon cross"><i class="fa fa-angle-down"></i></span></h2></div>
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
  background: linear-gradient(0deg, rgba(240,101,36,0.6727065826330532) 0%, rgba(255,100,100,1) 100%);
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
  background: #fff;
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
}

.premium_all {
  padding-top: 22px;
}

.price-area .inner-area{
  height: 100%;
  width: 100%;
  line-height: 117px;
  text-align: center;
  color: #fff;
  position: relative;
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
  margin-left: 16px;
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

.features li .list-name{
  font-size: 17px;
  font-weight: 400;
}

.features li .icon{
  font-size: 15px;
}

.features li .icon.check{
  color: #2db94d;
}

.features li .icon.cross{
  color: #cd3241;
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

.basic ::selection,
.basic .price-area,
.basic .inner-area,
.basic .head_tab h2{
  color:red;
}

.basic .btn button{
  background: red;
  color: #fff;
  margin-top: -75px;
}

.basic .btn button:hover{
  background: rgba(240, 101,36);
  color: #fff;
}

.premium ::selection,
.premium .price-area,
.premium .inner-area,
.premium .head_tab h2{
  color:#ba24f0;
}

.premium .btn button{
  background: #ba24f0;
  color: #fff;
  margin-top: -75px;
}

.premium .btn button:hover{
  background: rgba(240, 101,36);
  color: #fff;
}

.ultimate ::selection,
.ultimate .price-area,
.ultimate .inner-area,
.ultimate .head_tab h2{
  color:#f5b55a;
}

.ultimate .btn button{
  background: #f5b55a;
  color: #fff;
  margin-top: -75px;
}

.ultimate .btn button:hover{
  background: rgba(240, 101,36);
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
  border: 7px solid #ba24f0;
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
  background: #ba24f0;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-size: 17px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
}
</style>