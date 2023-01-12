<script>
export default {
    mounted() {
        // var map = L.map('map').setView([51.505, -0.09], 13);
        var map = L.map('map').setView([-7.14731, 112.61455], 13);
        var circle = L.circle([-7.14700, 112.61358], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        var popup = L.popup()
            .setLatLng([-7.14700, 112.61358])
            .setContent("Apotek Brotonegoro")
            .openOn(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}
</script>

<template>

    <div id="map" style="height: 100vh;"></div>
</template>