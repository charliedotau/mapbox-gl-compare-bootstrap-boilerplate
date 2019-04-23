// Map via Mapbox GL

$(document).ready(init);

function init(jQuery) {
  CurrentYear();
  initMap();

  /*
  // user clicks some button
  $('#someButton').on('click', function () {
      // do something here
  });

  */
}

function CurrentYear() {
  var thisYear = new Date().getFullYear()
  $("#currentYear").text(thisYear);
}

var mapCoordinates = [42.885441,-78.878464];
var mapZoom = 11;

// mapbox token (not mine)!
var mapAccessToken = "pk.eyJ1IjoiY2hhcmxpZWRvdGF1IiwiYSI6ImNpazlpdzh0ZTA5d3Z2Y200emhqbml1OGEifQ.uoA6t5rO18m0BgNGPXsm5A";

var map = null;
var geocoder = null;

function initMap() {
  map = MapGL();
}

function MapGL() {
  mapboxgl.accessToken = mapAccessToken;

  var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [0,0],
    zoom: 0
  });
   
  var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [0,0],
    zoom: 0
  });

  var map = new mapboxgl.Compare(beforeMap, afterMap, {
  // Set this to enable comparing two maps by mouse movement:
  // mousemove: true
  });
  
  // event handlers
 // newMap.on("load", mapLoaded);
 //   return newMap;
//}

  function mapLoaded() {
    // do stuff here
  
  }
}