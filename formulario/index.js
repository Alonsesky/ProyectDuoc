//VERIFICACION DE RUT
function veriRut(){
    var rut = document.getElementById('rut').value;
    if (rut.length >= 9 && rut.length <= 10) {
        document.getElementById('msj-rut').innerHTML = "Rut válido";
    } else {
        document.getElementById('msj-rut').innerHTML = "Rut inválido";
    }
}

function borrarRut(){
    var rut = document.getElementById('rut').value;
    if (rut.length < 9 || rut.length > 10) {
    document.getElementById('rut').value = ""; 
    }
}

//VERIFICACION DEL NOMBRE
function veriNom(){
    var nom = document.getElementById('nombre').value;
    if (nom.length >= 3 && nom.length <= 20) {
        document.getElementById('msj-nom').innerHTML = "Nombre válido";
    } else {
        document.getElementById('msj-nom').innerHTML = "Nombre inválido";
    }
}  

function borrarNom(){
    var nom = document.getElementById('nombre').value;
    if (nom.length < 3 || nom.length > 20) {
        document.getElementById('nombre').value = "";
    }
}

//VERIFICACION APELLIDO PATERNO
function veriAppaterno(){
    var appaterno = document.getElementById('appaterno').value;
    if (appaterno.length >= 3 && appaterno.length <= 20) {
        document.getElementById('msj-appaterno').innerHTML = "Apellido paterno válido";
    } else {
        document.getElementById('msj-appaterno').innerHTML = "Apellido paterno inválido";
    }
}

function borrarAppaterno(){
    var appaterno = document.getElementById('appaterno').value;
    if (appaterno.length < 3 || appaterno.length > 20) {
        document.getElementById('appaterno').value = "";
    }
}

//VERIFICAR APELLIDO MATERNO
function veriApmaterno(){
    var apmaterno = document.getElementById('apmaterno').value;
    if (apmaterno.length >= 3 && apmaterno.length <= 20) {
        document.getElementById('msj-apmaterno').innerHTML = "Apellido materno válido";
    } else{
        document.getElementById('msj-apmaterno').innerHTML = "Apellido materno inválido";
    }
}
function borrarApmaterno(){
    var apmaterno = document.getElementById('apmaterno').value;
    if (apmaterno.length < 3 || apmaterno.length > 20) {
        document.getElementById('apmaterno').value = "";
    }
}

//VERIFICAR EDAD
function veriEdad(){
    var edad = document.getElementById('edad').value;
    if (edad>= 18 && edad<= 35) {
        document.getElementById('msj-edad').innerHTML = "Edad válida";
    } else {
    document.getElementById('msj-edad').innerHTML = "Edad inválida";
    }
}

function borrarEdad(){
    var edad = document.getElementById('edad').value;
    if (edad< 18 || edad> 35) {
        document.getElementById('edad').value = "";
    }
}


//VERIFICAR DATOS DEL FORM
function verificarDatos(){
    var rut = document.getElementById('rut').value;
    var nom = document.getElementById('nombre').value;
    if(rut===""||nom===""){
        alert('Los campos deben estar llenados obligatoriamente');
        return false;
    } else{
        return true;
    }
    
}
