function initMap() {
  const royal = { lat: 48.874116215503925, lng: 2.3002677499125825 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: royal,
  });
  const marker = new google.maps.Marker({
    position: royal,
    map: map,
  });
}

window.initMap = initMap;


