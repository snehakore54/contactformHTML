let contactFormId = document.getElementById('contactForm')
let successMessageId = document.getElementById('successMessage')



contactFormId.addEventListener('submit', function(event) {
    event.preventDefault();
    successMessageId.style.display = 'block';
    contactFormId.reset();
  });
  