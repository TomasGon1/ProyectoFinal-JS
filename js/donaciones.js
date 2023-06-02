/* Donaciones */

class Donacion {
  constructor(nombreDonador, apellidoDonador, montoDonador) {
    this.nombreDonador = nombreDonador;
    this.apellidoDonador = apellidoDonador;
    this.montoDonador = montoDonador;
  }
}

const donaciones = [];

/* Tabla de donadores (por si alguien dona) */

if (localStorage.getItem("donaciones")) {
  let donacion = JSON.parse(localStorage.getItem("donaciones"));

  for (let i = 0; i < donacion.length; i++) {
    donaciones.push(donacion[i]);
  }
}

/* Formularion de Donaciones */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarDonacion();
});

function agregarDonacion() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const monto = document.getElementById("monto").value;
  const nuevaDonacion = new Donacion(nombre, apellido, monto);
  donaciones.push(nuevaDonacion);

  localStorage.setItem("donaciones", JSON.stringify(donaciones));
  formulario.reset();
}

const tablaDonadores = document.getElementById("tablaDonadores");
const verDonadores = document.getElementById("verDonadores");

verDonadores.addEventListener("click", () => {
  mostrarTabla();
});

function mostrarTabla() {
  tablaDonadores.innerHTML = "";
  donaciones.forEach((donacion) => {
    const div = document.createElement("div");
    div.innerHTML = `
                     <div class="containerDonadores">
                        <p class="donador">Nombre del Donador: ${donacion.nombreDonador}</p>
                        <p class="donador">Apellido del Donador: ${donacion.apellidoDonador}</p>
                        <p class="donador">Monto Donado: $${donacion.montoDonador}</p>
                        </div>
                        

        `;
    tablaDonadores.appendChild(div);
  });
}
