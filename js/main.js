/* Agregar animeles a la pagina principal */
const getAnimales = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();

  const containerAdopts = document.getElementById("containerAdopts");

  data.forEach((animal) => {
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
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Listo, agregaste ${animal.raza} a tu lista de adopciones!!`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  });

  const sistemaAdopcion = JSON.parse(sessionStorage.getItem("adopcion")) || [];

  const confirmarAdopcion = (id) => {
    const mascotas = data.find((animal) => animal.id === id);
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
                 
                </div>
             </div>
            `;
      savelocal();
    });

    containerAdoptados.innerHTML = aux;
  }

  /* storage */

  const savelocal = () => {
    sessionStorage.setItem("adopcion", JSON.stringify(sistemaAdopcion));
  };

  /* Boton de Cancelacion */
  const arrepentirse = document.getElementById("btnArrepentimiento");
  arrepentirse.addEventListener("click", () => {
    sistemaAdopcion.splice(0, sistemaAdopcion.length);

    Swal.fire({
      tittle: "¿Estas seguro?",
      text: "¿Desea cancelar las adopciones? 😥",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo!", "Las adopciones han sido canceladas", "Hecho");
        actualizarTabla();
      }
    });
  });
};

getAnimales();

/* Boton de ir arriba */
window.onscroll = function () {
  if (document.documentElement.scrollTop > 750) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
