const map = L.map('map').setView([17.385044, 78.486671], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ''
}).addTo(map);

const vehicleIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/484/484167.png', // Replace with a vehicle icon URL
  iconSize: [30, 30]
});

let vehicleMarker = L.marker([17.385044, 78.486671], { icon: vehicleIcon }).addTo(map);
let polyline = L.polyline([], { color: 'blue' }).addTo(map);


async function updateVehiclePosition() {
    try {
      const response = await fetch('http://localhost:3001/api/vehicle-location');
      const data = await response.json();
      
      vehicleMarker.setLatLng([data.latitude, data.longitude]);
      polyline.addLatLng([data.latitude, data.longitude]);
  
      map.panTo([data.latitude, data.longitude]);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  }
  
  setInterval(updateVehiclePosition, 5000);
  