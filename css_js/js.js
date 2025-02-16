const map = L.map('map').setView([39.46683709592049, -0.3851169783946248], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([39.46683709592049, -0.3851169783946248]).addTo(map);
marker.bindPopup('¡Estamos aquí!').openPopup();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 13);
            marker.setLatLng([latitude, longitude]);
            marker.bindPopup('¡Estás aquí!').openPopup();
        },
        () => {
            console.warn('Permiso de geolocalización denegado. Mostrando la ubicación por defecto.');
        }
    );
} else {
    console.error('El navegador no tiene la función de geolocalización.');
}
