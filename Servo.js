let isPasswordVisible = false;

        function showPasswordInput() {
            const passwordInput = document.getElementById("passwordInput");
            const errorMessage = document.getElementById("errorMessage");
            if (!isPasswordVisible) {
                passwordInput.style.display = "inline"; // Show the password input
                passwordInput.focus(); // Focus on the input field
                errorMessage.style.display = "none"; // Hide error message if it's visible
                isPasswordVisible = true; // Update the flag
            } else {
                toggleServo(); // If password is already visible, call toggleServo
            }
        }

        function toggleServo() {
            const password = document.getElementById("passwordInput").value; // Get password from input
            console.log("Button clicked!"); // Debugging line
            fetch(`/toggleServo?password=${encodeURIComponent(password)}`)
                .then(response => {
                    if (response.status === 401) {
                        console.error('Unauthorized access!'); // Log unauthorized access
                        document.getElementById("errorMessage").style.display = "block"; // Show error message
                    } else {
                        return response.text();
                    }
                })
                .then(data => {
                    if (data) {
                        console.log(data); // Log the response
                        document.getElementById("toggleButton").innerHTML = data; // Change button text
                        document.getElementById("errorMessage").style.display = "none"; // Hide error message
                    }
                })
                .catch(error => console.error('Error:', error)); // Catch any errors
        }
