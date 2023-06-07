// Función para ingresar a la cuenta con nombre y contraseña
function ingresocuenta(form) {
  if (
    form.nombre.value == "Sebastian" &&
    form.contraseña.value == "Sebastian1"
  ) {
    alert(`Bienvenido ${form.nombre.value}, has iniciado sesión con exito`);
    location = "cuenta1.html";
  } else if (
    form.nombre.value == "Carlos" &&
    form.contraseña.value == "Carlos1"
  ) {
    alert(`Bienvenido ${form.nombre.value}, has iniciado sesión con exito`);
    location = "cuenta2.html";
  } else if (
    form.nombre.value == "Natalia" &&
    form.contraseña.value == "Natalia1"
  ) {
    alert(`Bienvenido ${form.nombre.value}, has iniciado sesión con exito`);
    location = "cuenta3.html";
  } else if (
    form.nombre.value == "Martha" &&
    form.contraseña.value == "Martha1"
  ) {
    alert(`Bienvenido ${form.nombre.value}, has iniciado sesión con exito`);
    location = "cuenta4.html";
  } else if (form.nombre.value == "Juan" && form.contraseña.value == "Juan1") {
    alert(`Bienvenido ${form.nombre.value}, has iniciado sesión con exito`);
    location = "cuenta5.html";
  } else {
    alert("Nombre y/o contraseña incorrecta, intenta nuevamente");
  }
}
// Función para depositar en cuenta 1 - Sebastian
function depositar1() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldosuma = parseInt(document.getElementById("saldo1").value);
  let resultado = Dinero + saldosuma;
  if (resultado <= 990) {
    document.getElementById("saldo1").value = resultado;
  } else {
    alert("Esta cuenta no puede tener más de $990");
  }
}

// Función para depositar en cuenta 2 - Carlos
function depositar2() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldosuma = parseInt(document.getElementById("saldo2").value);
  let resultado = Dinero + saldosuma;
  if (resultado <= 990) {
    document.getElementById("saldo2").value = resultado;
  } else {
    alert("Esta cuenta no puede tener más de $990");
  }
}

// Función para depositar en cuenta 3 - Natalia
function depositar3() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldosuma = parseInt(document.getElementById("saldo3").value);
  let resultado = Dinero + saldosuma;
  if (resultado <= 990) {
    document.getElementById("saldo3").value = resultado;
  } else {
    alert("Esta cuenta no puede tener más de $990");
  }
}

// Función para depositar en cuenta 4 - Martha
function depositar4() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldosuma = parseInt(document.getElementById("saldo4").value);
  let resultado = Dinero + saldosuma;
  if (resultado <= 990) {
    document.getElementById("saldo4").value = resultado;
  } else {
    alert("Esta cuenta no puede tener más de $990");
  }
}

// Función para depositar en cuenta 5 - Juan
function depositar5() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldosuma = parseInt(document.getElementById("saldo5").value);
  let resultado = Dinero + saldosuma;
  if (resultado <= 990) {
    document.getElementById("saldo5").value = resultado;
  } else {
    alert("Esta cuenta no puede tener más de $990");
  }
}

// Función para retirar en cuenta 1 - Sebastian
function retirar1() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldoresta = parseInt(document.getElementById("saldo1").value);
  let resultado = saldoresta - Dinero;
  if (resultado >= 10) {
    document.getElementById("saldo1").value = resultado;
  } else {
    alert("Esta cuenta no puede tener menos de $10");
  }
}

// Función para retirar en cuenta 2 - Carlos
function retirar2() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldoresta = parseInt(document.getElementById("saldo2").value);
  let resultado = saldoresta - Dinero;
  if (resultado >= 10) {
    document.getElementById("saldo2").value = resultado;
  } else {
    alert("Esta cuenta no puede tener menos de $10");
  }
}

// Función para retirar en cuenta 3 - Natalia
function retirar3() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldoresta = parseInt(document.getElementById("saldo3").value);
  let resultado = saldoresta - Dinero;
  if (resultado >= 10) {
    document.getElementById("saldo3").value = resultado;
  } else {
    alert("Esta cuenta no puede tener menos de $10");
  }
}

// Función para retirar en cuenta 4 - Martha
function retirar4() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldoresta = parseInt(document.getElementById("saldo4").value);
  let resultado = saldoresta - Dinero;
  if (resultado >= 10) {
    document.getElementById("saldo4").value = resultado;
  } else {
    alert("Esta cuenta no puede tener menos de $10");
  }
}

// Función para retirar en cuenta 5 -Juan
function retirar5() {
  let Dinero = parseInt(document.getElementById("dinero").value);
  let saldoresta = parseInt(document.getElementById("saldo5").value);
  let resultado = saldoresta - Dinero;
  if (resultado >= 10) {
    document.getElementById("saldo5").value = resultado;
  } else {
    alert("Esta cuenta no puede tener menos de $10");
  }
}
