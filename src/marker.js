const mapboxgl = require('mapbox-gl')

function buildMarker(long, lat, type) {
const newDiv = document.createElement('div');
newDiv.style.width = "32px";
newDiv.style.height = "39px";
let backgroundimageUrl;
if (type.toLowerCase() === 'activity') {
     backgroundimageUrl = 'http://i.imgur.com/WbMOfMl.png'
} else if (type.toLowerCase() === 'hotel') {
     backgroundimageUrl = 'http://i.imgur.com/D9574Cu.png'
} else if (type.toLowerCase() === 'restaurant') {
     backgroundimageUrl = 'http://i.imgur.com/cqR6pUI.png'
} else {
    throw new Error('Invalid activity')
}
newDiv.style.backgroundImage = `url(${backgroundimageUrl})`;
return new mapboxgl.Marker(newDiv).setLngLat([long, lat]);
}

module.exports = buildMarker;