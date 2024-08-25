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

function updatePPM() {
    fetch('/ppm')
        .then(response => response.text())
        .then(data => {
           document.getElementById('ppm').textContent = data;
    });
}
setInterval(updatePPM, 5000);
