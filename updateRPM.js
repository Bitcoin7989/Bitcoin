 function updateRPM() {
        fetch('/rpm')
            .then(response => response.text())
            .then(rpm => {
                document.getElementById('rpm').innerText = rpm;
            })
            .catch(error => console.error('Error fetching RPM:', error));
    }

    function updateSensorData() {
        fetch('/sensorData')
            .then(response => response.text())
            .then(data => {
                const params = new URLSearchParams(data);
                document.getElementById('temperature').innerText = params.get('temperature');
                document.getElementById('humidity').innerText = params.get('humidity');
            })
            .catch(error => console.error('Error fetching sensor data:', error));
    }

    // Initial update
    updateRPM();
    updateSensorData();

    // Update RPM every 10 seconds
    setInterval(updateRPM, 10000);

    // Update sensor data every minute
    setInterval(updateSensorData, 60000);
