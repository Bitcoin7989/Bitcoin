  setInterval(function() {
                fetch('/rpm').then(response=>response.text()).then(data=>{
                    document.getElementById('rpm').innerText = '' + data;
                }
                );
            }, 1000);
  setInterval(function() {
                fetch('/temperature').then(response=>response.text()).then(data=>{
                    document.getElementById('temperature').innerText = '' + data;
                }
                );
            }, 1000);
  setInterval(function() {
                fetch('/humidity').then(response=>response.text()).then(data=>{
                    document.getElementById('humidity').innerText = '' + data;
                }
                );
            }, 1000);
