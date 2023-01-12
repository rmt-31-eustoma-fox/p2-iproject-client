<script>
export default {
    props : ['item']
}
</script>

<template>
    <div class="col my-2 ">
        <div class="card" style="width: 18rem">
            <img :src="item.urlToImage" alt="">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.content}}</p>
            <a v-bind:href="item.url" class="btn btn-primary m-1" 
              >read more</a
            >
          </div>
        </div>
      </div>
</template>