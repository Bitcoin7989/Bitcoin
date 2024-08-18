  setInterval(function() {
                fetch('/rpm').then(response=>response.text()).then(data=>{
                    document.getElementById('rpm').innerText = 'Current RPM: ' + data;
                }
                );
            }, 1000);
