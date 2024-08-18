        async function updateRPM() {
            try {
                const response = await fetch('/rpm');
                if (response.ok) {
                    const data = await response.text();
                    const rpmElement = document.getElementById('rpm');
                    if (rpmElement) {
                        rpmElement.innerText = 'Current RPM: ' + data;
                    } else {
                        console.error('Element with ID "rpm" not found.');
                    }
                } else {
                    console.error('Failed to fetch RPM. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching RPM:', error);
            }
        }

        // Ensure the DOM is fully loaded before executing the script
        document.addEventListener('DOMContentLoaded', (event) => {
            updateRPM();
        });
