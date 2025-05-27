
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
  const navItems = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      

    });


    //band karne keliye
    navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

 //ye  "sending" alert show karega
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
