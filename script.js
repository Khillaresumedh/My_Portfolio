// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
// Select the Download CV button
var downloadCvBtn = document.getElementById('download-cv-btn');

// Add click event listener to the button
downloadCvBtn.addEventListener('click', function() {
    // Replace "path/to/your/cv.pdf" with the actual file path or URL of your CV file
    var cvUrl = "/assets/Sumedh_Khillare_Resume.pdf";

    // Create a temporary anchor element
    var downloadLink = document.createElement("a");

    // Set the href attribute to the CV file URL
    downloadLink.href = cvUrl;

    // Set the download attribute to force download
    downloadLink.download = "Sumedh_Khillare_Resume.pdf";

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document body
    document.body.removeChild(downloadLink);
});

// Select the Contact Me button
var contactBtn = document.getElementById('contact-btn');

// Add click event listener to the button
contactBtn.addEventListener('click', function() {
    // Get the Contact Me section element
    var contactSection = document.getElementById('contact');

    // Scroll to the Contact Me section
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// JavaScript code to handle click events on project boxes
document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.box');
  
  projects.forEach(project => {
    project.addEventListener('click', function() {
      const projectId = this.id; // Get the ID of the clicked project
      const sectionId = projectId.replace('project', ''); // Extract the section ID
      
      // Scroll smoothly to the corresponding section
      document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});



  // Function to send email using EmailJS
function sendEmail(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send("service_qg3l8cl", "template_6er765w", {
    from_name: name,
    from_email: email,
    message: message,
  })
  .then(function(response) {
    console.log("Email sent successfully:", response);
    // Optionally, display a success message or redirect to a thank you page
    alert("Your message has been sent successfully!");
    // Clear form fields after successful submission
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
  })
  .catch(function(error) {
    console.error("Error sending email:", error);
    // Optionally, display an error message to the user
    alert("Oops! Something went wrong. Please try again later.");
  });
}

// Add event listener to the form submission button
document.getElementById('contact-form').addEventListener('submit', sendEmail);


