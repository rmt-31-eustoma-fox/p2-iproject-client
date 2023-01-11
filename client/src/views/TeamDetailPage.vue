<script>
  export default {
    computed: {
      teamName() {
        const name = this.$route.params.teamName
          .split("-")
          .join(" ")
          .toUpperCase();
        return name;
      },
    },
  };
</script>

<template>
  <div class="container my-5">
    <div class="border border-0 rounded p-5 bg-white">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"
            style="width: 150px"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h5 class="h5">Golden State Warriors</h5>
          <h3 class="h3"><strong>GSW</strong></h3>
          <h3 class="h3">
            <strong
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="This top tooltip is themed via CSS variables."
              >#11</strong
            >-TeamID
          </h3>
        </div>
      </div>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              colspan="5"
              class="col-12 text-center bg-danger text-white"
            >
              PERFORMANCE
            </th>
            <th colspan="1" class="col-12 text-center bg-danger text-white">
              <select name="" class="form-control object-fit-none" id="">
                <option value="2022">2022</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center col-2">GAMES <br />55</td>
            <td class="text-center col-2">PPG <br />55</td>
            <td class="text-center col-2">APG <br />55</td>
            <td class="text-center col-2">RPG <br />55</td>
            <td class="text-center col-2">PFPG <br />55</td>
            <td class="text-center col-2">SPG <br />55</td>
          </tr>
        </tbody>
      </table>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              class="col-12 text-center bg-danger text-white"
            >
              LAST 5 GAMES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="d-flex flex-row justify-content-center"
              style="vertical-align: middle"
            >
              <div class="d-flex flex-column">
                <span>42</span>
                <span>42</span>
                <span>42</span>
                <span>42</span>
              </div>
              <h3 class="p-4">GSW</h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"
                style="width: auto; height: 100px"
                class="mx-3"
              />
              <h3 class="p-4">32 - 32</h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"
                style="width: auto; height: 100px"
                class="mx-3"
              />
              <h3 class="p-4">GSW</h3>
              <div class="d-flex flex-column">
                <span>42</span>
                <span>42</span>
                <span>42</span>
                <span>42</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
