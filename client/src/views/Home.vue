<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },

  created() {
    this.fetchAgents();
  },

  computed: {
    ...mapState(useCounterStore, ["agents", "filterAgents"]),
    ...mapWritableState(useCounterStore, ["filter"]),
  },

  methods: {
    ...mapActions(useCounterStore, ["fetchAgents"]),
  },
};
</script>

<template>
  <!-- Header-->
  <header class="bg-secondary-emphasis">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-black aaa" style="height: 50vh">
        <h1 class="display-2 fw-bolder">Val Fave</h1>
        <p class="lead fw-normal text-black-50 mb-0">
          Find valorant agent that suits you!
        </p>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#dc3545"
        fill-opacity="1"
        d="M0,288L0,256L36.9,256L36.9,32L73.8,32L73.8,0L110.8,0L110.8,96L147.7,96L147.7,192L184.6,192L184.6,224L221.5,224L221.5,192L258.5,192L258.5,0L295.4,0L295.4,256L332.3,256L332.3,288L369.2,288L369.2,0L406.2,0L406.2,288L443.1,288L443.1,192L480,192L480,288L516.9,288L516.9,128L553.8,128L553.8,224L590.8,224L590.8,32L627.7,32L627.7,128L664.6,128L664.6,192L701.5,192L701.5,32L738.5,32L738.5,192L775.4,192L775.4,32L812.3,32L812.3,96L849.2,96L849.2,320L886.2,320L886.2,0L923.1,0L923.1,160L960,160L960,192L996.9,192L996.9,64L1033.8,64L1033.8,224L1070.8,224L1070.8,96L1107.7,96L1107.7,96L1144.6,96L1144.6,128L1181.5,128L1181.5,192L1218.5,192L1218.5,224L1255.4,224L1255.4,224L1292.3,224L1292.3,224L1329.2,224L1329.2,160L1366.2,160L1366.2,0L1403.1,0L1403.1,64L1440,64L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
      ></path>
    </svg>
  </header>

  <!-- Section-->
  <section class="py-5 bg-danger">
    <!-- Search -->
    <div class="container px-4 px-lg-5 mt-5">
      <form action="">
        <select v-model="filter" class="btn btn-dark w-100" name="" id="">
          <!-- <option value="" selected disabled>Role</option> -->
          <option value="0">All</option>
          <option value="Initiator">Initiator</option>
          <option value="Duelist">Duelist</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
        </select>
        <!-- <input class="btn btn-light" type="submit" value="Search" /> -->
      </form>
    </div>
    <!-- End search -->

    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <!-- p1 -->
        <Card v-for="(item, i) in filterAgents" :key="i" :item="item" />
        <!-- End p1 -->
      </div>
    </div>
  </section>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#dc3545"
      fill-opacity="1"
      d="M0,192L0,224L36.9,224L36.9,224L73.8,224L73.8,288L110.8,288L110.8,192L147.7,192L147.7,64L184.6,64L184.6,256L221.5,256L221.5,256L258.5,256L258.5,224L295.4,224L295.4,96L332.3,96L332.3,256L369.2,256L369.2,32L406.2,32L406.2,160L443.1,160L443.1,96L480,96L480,224L516.9,224L516.9,160L553.8,160L553.8,96L590.8,96L590.8,32L627.7,32L627.7,288L664.6,288L664.6,256L701.5,256L701.5,128L738.5,128L738.5,160L775.4,160L775.4,128L812.3,128L812.3,256L849.2,256L849.2,128L886.2,128L886.2,288L923.1,288L923.1,288L960,288L960,32L996.9,32L996.9,32L1033.8,32L1033.8,64L1070.8,64L1070.8,288L1107.7,288L1107.7,160L1144.6,160L1144.6,192L1181.5,192L1181.5,32L1218.5,32L1218.5,320L1255.4,320L1255.4,0L1292.3,0L1292.3,0L1329.2,0L1329.2,64L1366.2,64L1366.2,0L1403.1,0L1403.1,192L1440,192L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
    ></path>
  </svg>
  <!-- Footer-->
  <footer class="py-4">
    <div class="container">
      <p class="m-0 text-center text-black bold">
        Copyright &copy; Val Fave 2022
      </p>
    </div>
  </footer>
</template>
