  setInterval(function() {
                fetch('/rpm').then(response=>response.text()).then(data=>{
                    document.getElementById('rpm').innerText = '' + data;
                }
                );
            }, 1000);
