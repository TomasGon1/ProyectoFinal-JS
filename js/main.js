/* Animales en adopcion */
class Animales {
  constructor(id, nombre, raza, edad) {
    this.id = id;
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }
}

const animalito1 = new Animales(1, "Tobi", "Pastor Aleman", 4);
const animalito2 = new Animales(2, "Firulais", "Dogo Argentino", 8);
const animalito3 = new Animales(3, "Zeus", "Mastin Tibetano", 1);
const animalito4 = new Animales(4, "Rosa", "Shiba Inu", 2);
const animalito5 = new Animales(5, "Negrito", "Bombay", 2);
const animalito6 = new Animales(6, "Salmon", "Bengali", 4);
const animalito7 = new Animales(7, "Tatin", "Siberiano", 9);
const animalito8 = new Animales(8, "Mishifu", "Siames", 6);

const animales = [
  animalito1,
  animalito2,
  animalito3,
  animalito4,
  animalito5,
  animalito6,
  animalito7,
  animalito8,
];

/* Agregar animeles a la pagina principal */
const containerAdopts = document.getElementById("containerAdopts");

animales.forEach((animal) => {
  const divAnimales = document.createElement("div");
  divAnimales.classList.add("card-info", "col-xl-3", "col-md-6", "col-sm-12");
  divAnimales.innerHTML = `
                          <div>
                           <div class="card-description">
                            <img src="images/${animal.id}.jpg" class="card-img-top img-fluid py-3">
                            <h3 class="card-name"> Nombre: ${animal.nombre} </h3>
                            <p class="card-info2"> Raza: ${animal.raza}. Edad: ${animal.edad} </p>
                            <button id="boton${animal.id}" class="btn3 btn btn-primary"> Adoptar! </button>
                           </div>
                          </div>`;
  containerAdopts.appendChild(divAnimales);
  const boton = document.getElementById(`boton${animal.id}`);
  boton.addEventListener("click", () => {
    confirmarAdopcion(animal.id);
  });
});

const sistemaAdopcion = [];

const confirmarAdopcion = (id) => {
  const mascotas = animales.find((animal) => animal.id === id);
  sistemaAdopcion.push(mascotas);
  actualizarTabla();
};

/* Mostrar animales que vas a adoptar */
const containerAdoptados = document.getElementById("containerAdoptados");
const verAdopciones = document.getElementById("btnVerAdopciones");

verAdopciones.addEventListener("click", actualizarTabla);

function actualizarTabla() {
  let aux = "";
  sistemaAdopcion.forEach((animal) => {
    aux += ` 
            <div class="card-info col-xl-3 col-md-6 col-sm-12">
               <div class="card-description">
                 <img src="images/${animal.id}.jpg" class="card-img-top img-fluid py-3">
                 <h3 class="card-name"> Nombre: ${animal.nombre} </h3>
                 <p class="card-info2"> Raza: ${animal.raza}. Edad: ${animal.edad} </p>
                 <button onClick="cancelarAdopcion(${animal.id})" class="btn3 btn btn-primary"> Cancelar Adopcion </button>
                </div>
            </div>
    `;
  });

  containerAdoptados.innerHTML = aux;
}

/* Boton de Cancelacion y Arrepentimiento */
const cancelarAdopcion = (id) => {
  const animal = sistemaAdopcion.find((animal) => animal.id === id);
  sistemaAdopcion.splice(sistemaAdopcion.indexOf(animal), 1);
  actualizarTabla();
};

const arrepentirse = document.getElementById("btnArrepentimiento");
arrepentirse.addEventListener("click", () => {
  sistemaAdopcion.splice(0, sistemaAdopcion.length);
  actualizarTabla();
});

/* Boton de donacion */
const donar = document.getElementById("irADonaciones");
donar.addEventListener("click")