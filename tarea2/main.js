let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let contrasena = prompt("Ingrese su contraseña:");

edad = parseInt(edad);

if (!nombre) {
    console.log("Error: El nombre no puede estar vacío.");
} else if (edad < 18) {
    console.log("Acceso denegado: Menor de edad.");
} else if (contrasena.length < 6) {
    console.log("Contraseña inválida: Debe tener al menos 6 caracteres.");
} else {
    console.log(`Bienvenido, ${nombre}. Tu edad (${edad}) y tu contraseña son válidas.`);
    edad += 10;
    console.log(`En 10 años, tendrás ${edad} años.`);
    console.log(`Usuario: Nombre: ${nombre}, Edad: ${edad-10}, Edad en 10 años: ${edad}, Contraseña: ${contrasena}`);
}
