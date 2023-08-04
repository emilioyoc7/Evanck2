function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}


var cuentas = [
    { nombre: "Mali", saldo: 200, password:"2345" },
    { nombre: "Gera", saldo: 290, password:"7232" },
    { nombre: "Maui", saldo: 67, password:"9881" },
    { nombre: "Emilio",saldo:400, password:"1836"}
];

var cuentaSeleccionada;
var saldoActual;

function iniciarSesion() {
    var cuentaIndex = document.getElementById("cuentas").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i < cuentas.length; i++) {
        var nombre = cuentas[i].nombre;
        var index = cuentas[i];
        if (nombre == cuentaIndex){
            break;
        }
    }
    cuentaSeleccionada = index;
    const user = cuentaSeleccionada.nombre
    const passwordUser = cuentaSeleccionada.password

    if (password === passwordUser && cuentaIndex === user) {
        saldoActual = cuentaSeleccionada.saldo;
        document.getElementById("opciones").style.display = "block";
        document.getElementById("cuentas").remove();
        document.getElementById("password").remove()
        document.getElementById("btnInicio").remove()
        const container2 = document.getElementById("container-2")
        const welcome = document.createElement("h3");
        welcome.style.color = "#fff"
        container2.appendChild(welcome)
        welcome.innerHTML = "Bienvenido " + user + " quieres.."
        document.getElementById("password")
        inputName.classList.remove("is-invalid")
        
    } else {
        const inputName = document.getElementById("cuentas")
        const inputPassword = document.getElementById("password")
        if(cuentaIndex != user){
            inputName.classList.add("is-invalid")
        }else if(password != passwordUser){
            inputPassword.classList.add("is-invalid")
        }else{
            console.log("bug")
        }
    }
}

function consultarSaldo() {
    document.getElementById("mensaje").innerText = "Saldo actual: $" + saldoActual;
}

function ingresarMonto() {
    const montoIngreso = parseFloat(document.getElementById("montoIngreso").value);

    if (montoIngreso > 0) {
        const nuevoSaldo = saldoActual + montoIngreso;

    if (nuevoSaldo > 990) {
        alert("El monto ingresado excede el límite permitido de $990.");
    } else {
        saldoActual = nuevoSaldo;
        document.getElementById("mensaje").innerText = "Monto ingresado: $" + montoIngreso + "\nNuevo saldo: $" + saldoActual;
    }
    } else {
        alert("Ingresa un monto válido.");
    }
}

function retirarMonto() {
    const montoRetiro = parseFloat(document.getElementById("montoRetiro").value);

    if (montoRetiro > 0) {
        const nuevoSaldo = saldoActual - montoRetiro;

    if (nuevoSaldo < 10) {
        alert("El monto a retirar excede tu saldo disponible.");
    } else {
        saldoActual = nuevoSaldo;
        document.getElementById("mensaje").innerText = "Monto retirado: $" + montoRetiro + "\nNuevo saldo: $" + saldoActual;
    }
    } else {
        alert("Ingresa un monto válido.");
    }
}