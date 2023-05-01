function calculadora() {
  let operacion = prompt(
    "(1)Suma (2)Resta (3)Multiplicacion (4)Division (5)Impuesto dólar 75% (ESC)Salir"
  );
  let resultado = 0;

  while (operacion !== "ESC") {
    let numero1 = Number(prompt("Ingrese un número"));
    let numero2 = Number(
      prompt(
        "Ingrese otro número (si su elecion fue la operacion 5 no ingrese nada)"
      )
    );
    let impuesto = numero1 * 0.75;
    let impuesto2 = impuesto + numero1;

    switch (operacion) {
      case "1":
        resultado = numero1 + numero2;
        break;

      case "2":
        resultado = numero1 - numero2;
        break;

      case "3":
        resultado = numero1 * numero2;
        break;

      case "4":
        resultado = numero1 / numero2;
        break;

      case "5":
        resultado = impuesto2;
        break;

      case "ESC":
        break;

      default:
        alert("Datos incorrectos");
    }

    alert(`El resultado es ${resultado}`);
    operacion = prompt(
      "(1)suma (2)resta (3)Multiplicacion (4)Division (5)Impuesto dólar 75% (ESC)Salir"
    );
  }
}

calculadora();
