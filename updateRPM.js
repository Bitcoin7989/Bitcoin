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

function updatemq135Data() {
    fetch('/ppm')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ppm').innerText = data;
            // Check PPM value and update status
            const ppmValue = parseFloat(data);
            const statusElement = document.getElementById('ppmStatus');
            if (ppmValue >= <?php echo $ppmThreshold; ?>) { // Adjust this part to match your threshold value
                statusElement.innerText = 'Warning: Concentration above threshold!';
            } else {
                statusElement.innerText = 'Concentration below threshold.';
            }
        });
}
setInterval(updatemq135Data, 5000);
