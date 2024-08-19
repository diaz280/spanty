// Simulando la lectura de un archivo de texto
// Imaginemos que el archivo de texto contiene el usuario y contraseña de esta manera:
// Usuario: dia0540d
// Contraseña: dia0540d

// Creamos una variable que simula el contenido de ese archivo de texto
const simulatedFileContent = `
Usuario: dia0540d
Contraseña: dia0540d
`;

// Función para extraer los datos del "archivo" simulado
function getCredentialsFromFile(content) {
    const lines = content.trim().split("\n");
    const username = lines[0].split(": ")[1];
    const password = lines[1].split(": ")[1];
    return { username, password };
}

// Obtenemos las credenciales simuladas
const credentials = getCredentialsFromFile(simulatedFileContent);

// Capturamos el formulario
const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Obtener valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si coinciden con las credenciales simuladas
    if (username === credentials.username && password === credentials.password) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Aquí puedes redirigir al usuario o realizar alguna acción
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
});
