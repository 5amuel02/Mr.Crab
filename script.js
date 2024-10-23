window.onload = function() {
    document.body.classList.add('fade-in');
  };
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.href;

    document.body.classList.remove('fade-in');
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var errorContainer = document.getElementById('errorContainer');
  errorContainer.innerHTML = '';

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();

  var errors = [];

  if (email === '' && name === '') {
      errors.push('Please enter your name and email to continue!');
  } 
  else if (name === '') {
      errors.push('Please enter your name.');
  } 
  else if (email === '') {
      errors.push('Please enter your email.');
  }

  if (errors.length > 0) {
    errors.forEach(function(error) {
      var errorElement = document.createElement('p');
      errorElement.innerText = error;
      errorContainer.appendChild(errorElement);
    });
  } else {
    document.getElementById('contactForm').submit();
  }
});
