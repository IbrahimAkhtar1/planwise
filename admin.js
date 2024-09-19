// Handle menu toggle
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

// Function to show the appropriate section
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('manageStudentsSection').style.display = 'none';
    document.getElementById('uploadDateSheetSection').style.display = 'none';
    document.getElementById('clashesDetectionSection').style.display = 'none';

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}

// Admin functions
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var studentName = document.getElementById('studentName').value;
    if (studentName) {
        var studentList = document.getElementById('studentList');
        var li = document.createElement('li');
        li.textContent = studentName;
        studentList.appendChild(li);
        alert('Student added successfully!');
        document.getElementById('studentName').value = '';  // Clear the input field
    } else {
        alert('Please enter a student name.');
    }
});

// Handle exam date sheet upload
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var dateSheetFile = document.getElementById('dateSheetFile').files[0];
    if (dateSheetFile) {
        var examList = document.getElementById('examList');
        examList.innerHTML = `<li>Uploaded file: ${dateSheetFile.name}</li>`;
        alert('Date sheet uploaded successfully!');
    } else {
        alert('Please select a file to upload.');
    }
});

// Detect clashes (placeholder functionality)
document.getElementById('detectClashesBtn').addEventListener('click', function() {
    var clashList = document.getElementById('clashList');
    clashList.innerHTML = '<li>No clashes detected.</li>';  // Placeholder - actual logic can be added
    alert('Clashes detection completed!');
});

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});

// Load logged-in admin's name on dashboard load
document.addEventListener("DOMContentLoaded", function() {
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || /^[0-9]+$/.test(loggedInUser.firstName)) {
        alert("You are not authorized to access this page. Redirecting to login page.");
        window.location.href = 'index.html'; 
    } else {
        document.querySelector('header h1').textContent = `Welcome, Admin ${loggedInUser.firstName} ${loggedInUser.lastName}`;
        showSection('dashboardSection');  // Default to dashboard section
    }
});
