let users = [
    { email: "usuario1@example.com", password: "contraseña1" },
    { email: "usuario2@example.com", password: "contraseña2" },
    { email: "usuario3@example.com", password: "contraseña3" }
  ];
  
  // Guardar la base de datos en el localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Función para iniciar sesión
  function iniciarSesion() {
    // Obtener los valores ingresados por el usuario
    let usuario = document.getElementById("email, password").value;

    // Credenciales definidas
    const usuarios = users;

    // Validar las credenciales
    if (usuarios === users) {
        // Credenciales correctas, redireccionar a la página panel.html
        window.location.href = "http://localhost/Proyecto_Login/index2.html";
    } else {
        // Credenciales incorrectas, mostrar mensaje de error
        document.getElementById("status").innerText = "Error: El usuario y contraseña son incorrectos";
    }
}
  function irGoogle(){
    window.location.href = "https://www.google.com";
    console.log("Boton si fuciona");

}
    
function irApple(){
    window.location.href = "https://www.apple.com";
    console.log("Boton si fuciona");
}

document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("sign-up-button");

    signUpButton.addEventListener("click", function(){
      // Obtener los valores del formulario
      const email = document.querySelector('input[type="text"]').value;
      const password = document.querySelector('input[type="password"]').value;

      // Guardar los datos en el localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Limpiar los campos del formulario
      document.querySelector('input[type="text"]').value = "";
      document.querySelector('input[type="password"]').value = "";

      // Alerta de éxito (puedes modificarla según tus necesidades)
      alert("Datos guardados correctamente en el localStorage");
    });

});
