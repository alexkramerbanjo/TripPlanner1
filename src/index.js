const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGtyYW1lcmJhbmpvIiwiYSI6ImNqb2c3eHM1ejBjOWgzcnBmOWg1YW1hb2IifQ.q8s8FqsXbvt70hI8eoGwSA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerOne = buildMarker(-73, 36.5, 'restaurant');
markerOne.addTo(map);
