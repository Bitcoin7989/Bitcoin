function updateSensorData() {
    fetch('/sensorData')
        .then(response => response.text())
        .then(data => {
            const params = new URLSearchParams(data);
            document.getElementById('temperature').textContent = params.get('temperature') + ' °C';
            document.getElementById('humidity').textContent = params.get('humidity') + ' %';
        })
        .catch(error => console.error("Error fetching sensor data:", error));
}
setInterval(updateSensorData, 10000); // Matches ESP8266 update interval

function updateMQ135Data() {
    fetch('/ppm')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ppm').textContent = data;
        })
        .catch(error => console.error("Error fetching PPM data:", error));
}
setInterval(updateMQ135Data, 10000); // Matches ESP8266 update interval

function updateFanStatus() {
    fetch('/fan')
        .then(response => response.text())
        .then(data => {
            document.getElementById("fanStatus").textContent = "Fan: " + data;
        })
        .catch(error => console.error("Error fetching fan status:", error));
}

// Run updates when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateSensorData();
    updateMQ135Data();
    updateFanStatus();
    setInterval(updateFanStatus, 1000); // Update fan status every second
});
