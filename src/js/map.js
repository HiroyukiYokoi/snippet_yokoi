var map;
function initMap() {
  var myLatLng = {lat: 35.6625958, lng: 1139.7028485};

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng
  });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
  });
}
