function validateForm() {
    var email = document.getElementById("email").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return false;
    }
    return true;
  }
  
