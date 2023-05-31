/* Constantes, variables y objetos */
const perros = [
  { nombreP: "Tobi", razaP: "pastor aleman", edadP: 4 },
  { nombreP: "Firulais", razaP: "dogo argentino", edadP: 8 },
  { nombreP: "Zeus", razaP: "mastin tibetano", edadP: 10 },
  { nombreP: "Rosa", razaP: "shiba inu", edadP: 2 },
  { nombreP: "Martu", razaP: "husky siberiano", edadP: 5 },
];

const gatos = [
  { nombreG: "Negrito", razaG: "bombay", edadG: 2 },
  { nombreG: "Salmon", razaG: "bengali", edadG: 4 },
  { nombreG: "Tatin", razaG: "azul ruso", edadG: 9 },
  { nombreG: "Mishi", razaG: "siberiano", edadG: 6 },
  { nombreG: "Blanquito", razaG: "siames", edadG: 3 },
];

class Donadores {
  constructor(nombre, apellido, dni, monto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.monto = monto;
  }
}

const donadoresClient = [];

/* Funciones de la pagina */
function menu() {
  let opciones = parseInt(
    prompt(
      "1)Ver perros disponibles \n 2)Ver gatos disponibles \n 3)Buscar perros en adopcion \n 4)Buscar gatos en adopcion \n 5)Donar \n 6)Salir"
    )
  );
  return opciones;
}

function perrosAdopcion() {
  let raza = prompt("Ingrese la raza");
  let encontrar = perros.find((encontrar) => encontrar.razaP === raza);

  if (encontrar) {
    let mensaje = `
    Nombre: ${encontrar.nombreP}
    Raza: ${encontrar.razaP}
    Edad: ${encontrar.edadP}
    `;
    alert(mensaje);
  } else {
    alert("Perro no encontrado, intentelo de vuelta");
    perrosAdopcion();
  }
}

function gatosAdopcion() {
  let raza = prompt("Ingrese la raza");
  let encontrar = gatos.find((encontrar) => encontrar.razaG === raza);

  if (encontrar) {
    let mensaje = `
    Nombre: ${encontrar.nombreG}
    Raza: ${encontrar.razaG}
    Edad: ${encontrar.edadG}
    `;
    alert(mensaje);
  } else {
    alert("Gato no encontrado, intentelo de vuelta");
    gatosAdopcion();
  }
}

function perritosAdop() {
  for (const adopcionP of perros) {
    alert(`
    Raza: ${adopcionP.razaP}
    Edad: ${adopcionP.edadP}
    `);
  }
}

function gatitosAdop() {
  for (const adopcionG of gatos) {
    alert(`
    Raza: ${adopcionG.razaG}
    Edad: ${adopcionG.edadG}
    `);
  }
}

function donaciones() {
  alert(
    "Bienvenido a nuestro sistema de donaciones!! (sus datos no seran publicados)"
  );
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let dni = parseInt(prompt("Ingrese su DNI"));
  let monto = Number(prompt("Ingrese el monto a donar"));
  let donadores1 = new donadoresClient(nombre, apellido, dni, monto);
  donadoresClient.push(donadores1);
}

function salir() {
  alert(
    "Gracias por pasarse por ZonaPet, esperamos que haya podido encontrar a su amigito!!"
  );
}

/* Arranca */
let menu1 = menu();
switch (menu1) {
  case 1:
    perritosAdop();
    break;

  case 2:
    gatitosAdop();
    break;

  case 3:
    perrosAdopcion();
    break;

  case 4:
    gatosAdopcion();
    break;

  case 5:
    donaciones();
    break;

  case 6:
    salir();
    break;

  default:
    alert("Datos incorrectos, vuelva a intentarlo");
    break;
}
