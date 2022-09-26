// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [28.446295836032203, -81.55808678177956],
    [28.44357020090814, -81.56105187021332],
    [28.44062211565965, -81.55878401596605],
    [28.43760298295141, -81.55789535285946],
    [28.43324816147982, -81.56155171940958],
    [28.430195609525388, -81.56724454411942],
    [28.4294833347313, -81.57472889011093],
    [28.4317140047092, -81.57891722561568,
    [28.430365233132935, -81.5814538231749],
  ];
  
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  let counter = 0;
  function move() {

  
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }

  