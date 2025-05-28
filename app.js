const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('a');
const body = document.body;

// Toggle menu + blur effect
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  body.classList.toggle('blur-active');
});

// Close menu + remove blur on link click
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    body.classList.remove('blur-active');
  });
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while your message is being sent To Madhu Sailesh.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for reaching out to Madhu Sailesh',
        confirmButtonColor: '#3085d6'
      });
      form.reset();
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#d33'
      });
      console.error(error);
    });
});
