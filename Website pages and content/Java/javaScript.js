function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // EmailJS parameters
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

 
}

function resetForm() {
    document.getElementById("contactForm").reset();
}
