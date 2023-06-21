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
    var message = document.getElementById('cname').value;
    var message = document.getElementById('message').value;
   
    
    // Create the email body
    var body = 'Name: ' + name + '\n' +
               'Email: ' + email + '\n' +
               'Email: ' + cname + '\n' +
               'Message: ' + message;
    
    // Send email using a service like EmailJS
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'uluann1@gmail.com',
      Password: 'Luchioffice',
      To: 'callmeoluchi@gmail.com',
      From: 'uluann1@gmail.com',
      Subject: 'Form Submission',
      Body: body
    }).then(function(message) {
      alert('Email sent successfully!');
      // Optionally, you can clear the form inputs after successful submission
      document.getElementById('myForm').reset();
    });
  });
  
