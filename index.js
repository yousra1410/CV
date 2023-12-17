document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.querySelector(".contact__form-el--name");
    const prenomInput = document.querySelector(".contact__form-el--lastename");
    const emailInput = document.querySelector(".contact__form-el--email");
    const messageInput = document.querySelector(".contact__form-el--message");
    const nonError = document.getElementById("nonError");
    const prenomError = document.getElementById("prenomError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const envoieError = document.getElementById("envoieError");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Réinitialiser les messages d'erreur
      nonError.textContent = "";
      prenomError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      envoieError.textContent = "";
  
      // Valider les champs
      let isValid = true;
  
      if (nameInput.value.trim() === "") {
        nonError.textContent = "Veuillez entrer votre nom";
        isValid = false;
      }
  
      if (prenomInput.value.trim() === "") {
        prenomError.textContent = "Veuillez entrer votre prénom";
        isValid = false;
      }
  
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Veuillez entrer votre email";
        isValid = false;
      }
  
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Veuillez entrer votre message";
        isValid = false;
      }
  
      // Soumettre le formulaire si tous les champs sont valides
      if (isValid) {
        console.log("Envoi du formulaire...");
        contactForm.reset();
        alert("Le formulaire a été envoyé avec succès !");
      } else {
        envoieError.textContent = "Veuillez corriger les erreurs avant d'envoyer le formulaire.";
      }
    });
  });