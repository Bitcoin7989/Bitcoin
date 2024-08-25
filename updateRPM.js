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
    fetch('/ppm').then(response => response.text()).then(data => {
        document.getElementById('ppm').innerText = data;
        const ppm = parseFloat(data);
        if (ppm > ppmThreshold) {
            document.getElementById('ppmStatus').innerText = 'Concentration above threshold! Take action.';
            document.getElementById('ppmStatus').style.color = 'red';
        } else {
            document.getElementById('ppmStatus').innerText = 'Concentration below threshold.';
            document.getElementById('ppmStatus').style.color = 'green';
        }
    });
}
setInterval(updatePPM, 5000);
