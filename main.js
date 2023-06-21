const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const picElement = document.querySelectorAll('.first_group');
const picAnimate = document.querySelectorAll('.picann');
picElement.forEach((el) => observer.observe(el));
picAnimate.forEach((el) => observer.observe(el));



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cname = document.getElementById('cname').value;
    var message = document.getElementById('message').value;
    
    // Create the email body
    var body = 'Name: ' + name + '\n' +
               'Email: ' + email + '\n' +
               'Company Name: ' + cname + '\n' +
               'Message: ' + message;
    
    // Send email using EmailJS
    emailjs.send("service_37x7mrk", "template_zdjz90e", {
      to_email: 'callmeoluchi@gmail.com',
      from_name: 'Ann',
      from_email: 'uluann1@gmail.com',
      message: body
    })
    .then(function(response) {
      console.log("SUCCESS", response.status, response.text);
      alert('Email sent successfully!');
      // Optionally, you can clear the form inputs after successful submission
      document.getElementById('myForm').reset();
    }, function(error) {
      console.log("FAILED", error);
      alert('Failed to send email. Please try again later.');
    });
  });
  
