emailjs.init("BGC06wD52wpCoiGBv");

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    emailjs.sendForm('service_pvy61mr', 'template_0g5hiaf', this)
        .then(function(response) {
            document.getElementById('formMessage').innerHTML = "<p class='text-success'>Your message has been sent successfully!</p>";
            document.getElementById('contactForm').reset();
        }, function(error) {
            document.getElementById('formMessage').innerHTML = "<p class='text-danger'>There was an error sending your message. Please try again later.</p>";
        });
});
