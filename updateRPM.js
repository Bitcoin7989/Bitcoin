  setInterval(function() {
                fetch('/rpm').then(response=>response.text()).then(data=>{
                    document.getElementById('rpm').innerText = '' + data;
                }
                );
            }, 1000);

 function updateSensorData() {
                fetch('/sensorData').then(response => response.text()).then(data => {
                let params = new URLSearchParams(data);
                     document.getElementById('temperature').textContent = params.get('temperature') + ' °C';
                     document.getElementById('humidity').textContent = params.get('humidity') + ' %';
                }
                );
    } setInterval(updateSensorData, 60000);
