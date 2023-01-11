<script>
  export default {
    props: ["title"],
  };
</script>

<template>
  <div class="p-3 border border-0 rounded bg-white row my-3">
    <h5 class="h5">{{ title }}</h5>
    <table class="table">
      <thead>
        <tr>
          <th class="p-2" scope="col">TEAM</th>
          <th class="p-2 text-center" scope="col">W</th>
          <th class="p-2 text-center" scope="col">L</th>
          <th class="p-2 text-center" scope="col">LAST 10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-2" scope="row">
            1
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"
              style="height: 24px; padding: 0 10px"
            />
            Team Name
          </td>
          <td class="p-2 text-center" scope="row">42</td>
          <td class="p-2 text-center" scope="row">54</td>
          <td class="p-2 text-center" scope="row">4-6</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
