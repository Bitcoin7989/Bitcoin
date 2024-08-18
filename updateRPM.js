async function updateRPM() {
    try {
        const response = await fetch('/rpm');
        if (response.ok) {
            const data = await response.text();
            document.getElementById('rpm').innerText = 'Current RPM: ' + data;
        } else {
            console.error('Failed to fetch RPM. Status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching RPM:', error);
    }
}

// Update RPM every second
setInterval(updateRPM, 1000);

// Initial call to populate the RPM value immediately
updateRPM();
