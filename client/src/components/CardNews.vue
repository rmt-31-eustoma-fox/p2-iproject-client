<script>
export default {
    props : ['item']
}
</script>

<template>
    <div class="col my-2 ">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.content}}</p>
            <a  href={{item.url}} class="btn btn-primary m-1" 
              >read more</a
            >
          </div>
        </div>
      </div>
</template>