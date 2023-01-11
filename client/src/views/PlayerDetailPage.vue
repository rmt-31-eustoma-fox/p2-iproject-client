<script>
  export default {
    computed: {},
  };
</script>

<template>
  <div class="container my-5">
    <div class="border border-0 rounded p-5 bg-white">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            style="width: 150px"
            class="rounded-pill"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h5 class="h5">Stephen Curry</h5>
          <h3 class="h3"><strong>GSW</strong></h3>
          <h3 class="h3">
            <strong
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="This top tooltip is themed via CSS variables."
              >#11</strong
            >-PlayerID
          </h3>
        </div>
      </div>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              colspan="6"
              class="col-12 text-center bg-danger text-white"
            >
              PROFILE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center col-2">POSITION <br />55</td>
            <td class="text-center col-2">BIRTHDATE <br />55</td>
            <td class="text-center col-2">HEIGHT <br />55</td>
            <td class="text-center col-2">WEIGHT <br />55</td>
            <td class="text-center col-2">LAST ATTENDED <br />55</td>
            <td class="text-center col-2">COUNTRY <br />55</td>
          </tr>
        </tbody>
      </table>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              class="text-center bg-danger text-white"
              colspan="18"
            >
              LAST 5 GAMES
            </th>
          </tr>
          <tr>
            <th class="text-center">POINTS</th>
            <th class="text-center">POS</th>
            <th class="text-center">FGA</th>
            <th class="text-center">FGM</th>
            <th class="text-center">FGP</th>
            <th class="text-center">FTA</th>
            <th class="text-center">FTM</th>
            <th class="text-center">FTP</th>
            <th class="text-center">3PA</th>
            <th class="text-center">3PM</th>
            <th class="text-center">3PP</th>
            <th class="text-center">OREB</th>
            <th class="text-center">DREB</th>
            <th class="text-center">TREB</th>
            <th class="text-center">AST</th>
            <th class="text-center">BLK</th>
            <th class="text-center">PF</th>
            <th class="text-center">+/-</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
            <td class="text-center">23</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
