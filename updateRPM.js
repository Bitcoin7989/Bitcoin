function updateSensorData() {
    
    fetch('/sensorData')
        .then(response => response.text())
        .then(data => {
            const params = new URLSearchParams(data);
            document.getElementById('temperature').textContent = params.get('temperature') + ' °C';
            document.getElementById('humidity').textContent = params.get('humidity') + ' %';
        });
}
setInterval(updateSensorData, 10000);

function updateMQ135Data() {
    fetch('/ppm')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ppm').textContent = data;
            
            // Check PPM value and update status
            const ppmValue = parseFloat(data);
            const statusElement = document.getElementById('ppmStatus');
           
        });
}
setInterval(updateMQ135Data, 2000); // Adjusted to match your data update interval
