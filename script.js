// Login function to handle login and redirect based on user identifier (numeric or alphabetic)
function loginUser() {
    var identifier = document.getElementById('login-identifier').value;
    var password = document.getElementById('login-password').value;

    if (identifier && password) {
        // Retrieve users from localStorage (in a real app, this would come from a server)
        var users = JSON.parse(localStorage.getItem('users')) || [];

        // Find user by identifier (email or first name) and password
        var user = users.find(function(user) {
            return (user.email === identifier || user.firstName === identifier) && user.password === password;
        });

        if (user) {
            alert("Login successful!");

            // Save logged-in user data to localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            // Check if the identifier is numeric (student) or alphabetic (admin)
            if (/^\d+$/.test(identifier)) {
                window.location.href = 'student-dashboard.html';  // Redirect to student dashboard
            } else {
                window.location.href = 'admin-dashboard.html';  // Redirect to admin dashboard
            }
        } else {
            alert("Invalid credentials! Please try again.");
        }
    } else {
        alert("Please fill in both username and password fields.");
    }
}
