function updateRPMData() {
    fetch('/rpm')
        .then(response => response.text())
        .then(data => {
            document.getElementById('rpm').textContent = data;
        });
}
setInterval(updateRPMData, 5000);

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
            if (ppmValue > ppmThreshold) {
                statusElement.textContent = 'Concentration above threshold!';
                statusElement.style.color = 'red';
            } else {
                statusElement.textContent = 'Concentration below threshold.';
                statusElement.style.color = 'green';
            }
        });
}
setInterval(updateMQ135Data, 5000); // Adjusted to match your data update interval
