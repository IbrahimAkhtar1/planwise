// Handle menu toggle
function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
      i.className += " responsive";
  } else {
      i.className = "nav-menu";
  }
}

// Handle course enrollment
document.getElementById('enrollForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var enrolledList = document.getElementById('enrolledList');
  enrolledList.innerHTML = '';  // Clear the previous list

  // Get selected courses
  var selectedCourses = document.querySelectorAll('input[name="course"]:checked');
  if (selectedCourses.length > 0) {
      selectedCourses.forEach(function(course) {
          var li = document.createElement('li');
          li.textContent = course.value;
          enrolledList.appendChild(li);
      });
      alert('You have successfully enrolled in the selected courses!');
  } else {
      alert('Please select at least one course to enroll.');
  }
});

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
  // Remove logged-in user from localStorage
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';  // Redirect to login page
});

// Load logged-in user's name on dashboard load
document.addEventListener("DOMContentLoaded", function() {
  var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) {
      alert("You are not logged in. Redirecting to login page.");
      window.location.href = 'index.html'; // Redirect to login if no user is logged in
  } else {
      document.querySelector('header h1').textContent = `Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}`;
  }
});
