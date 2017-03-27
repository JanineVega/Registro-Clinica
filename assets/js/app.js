
window.onload=function() {
  function Pacientes(nombre,apellido,edad,genero,ciudad,pais){
      this.nombre   = nombre;
      this.apellido = apellido;
      this.edad     = edad;
      this.genero   = genero;
      this.ciudad   = ciudad;
      this.pais     = pais;
    }
  var pacientes=[];

  var loginButton = document.getElementById("enviar");
  loginButton.addEventListener('click',function() {
  var nombre  = document.getElementById("nombre").value;
  var apellido= document.getElementById("apellido").value;
  var spanApellido=document.getElementById("spanApellido");
  var edad    = document.getElementById("edad").value;
  var genero  = document.getElementById("genero").value;
  var ciudad  = document.getElementById("ciudad").value;
  var pais    = document.getElementById("country").value;
  var mostrar=new Pacientes(nombre,apellido,edad,genero,ciudad,pais);
  if(nombre.length==0 || apellido.length==0 || edad.length==0 || genero.length==0 ||ciudad.length==0 ||pais.length==0 || pais.length==0){
    alert("Por favor complete todos los campos.");
    return false;
  }
  pacientes.push(mostrar);
  imprimir(pacientes);
  formulario.reset();
 });

 var inputregistro=document.getElementById("input-registro");
function imprimir(paciente){
 var contenedor = document.getElementById("contenedor");
 for (var prop in pacientes) {
 var contenedorPaciente = document.createElement("div");
 contenedorPaciente.classList.add("un-paciente");
 var dato = document.createElement("p");
 dato.innerHTML= "Nombre: " + pacientes[prop].nombre +
                 "<br>Apellido: " + pacientes[prop].apellido +
                 "<br>Edad: " + pacientes[prop].edad +
                 "<br>Género: " + pacientes[prop].genero+
                 "<br>Ciudad: " + pacientes[prop].ciudad+
                 "<br>País: " + pacientes[prop].pais;
	contenedorPaciente.appendChild(dato);
  contenedor.appendChild(contenedorPaciente);
    }
  }

    var sololetras=function (e){
      var codigoTecla = e.keyCode;
      console.log(codigoTecla);
      if ((codigoTecla>=97 && codigoTecla<=122)|| (codigoTecla>=65 && codigoTecla<=90) || codigoTecla==39 || codigoTecla==32 ) {
        return true;
      }else {
        this.nextElementSibling.nextElementSibling.innerHTML="Ingrese solo letras";
      //  apellido.focus();
        //inputregistro.innerHTML="Ingrese solo letras Aa-Zz";
        return false;
      }
  }

  var solonumeros=function (e){
    var codigoTeclanum= e.keyCode;
    console.log(codigoTeclanum);
    if ((codigoTeclanum>=48 && codigoTeclanum<=57) || edad.length==2) {
    //  inputregistro.innerHTML="";
      return true;
    }else{
    //inputregistro.innerHTML="Ingrese solo letras dos números";
      return false;
    }
}

  nombre.onkeypress=sololetras;
  apellido.onkeypress=sololetras;
  edad.onkeypress=solonumeros;
  var inputs=document.getElementsByClassName("input-registro");
  console.log(inputs);
  var validacionInputs=function(e){
    if(this.value.trim().length==0){
       this.value="";
       this.nextElementSibling.nextElementSibling.innerHTML="*Este campo es obligatorio";
    }else {
       this.nextElementSibling.nextElementSibling.innerHTML="";
    }
//    var datoCorrecto=this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
  //     this.value=datoCorrecto;
  if(this.getAttibute("type")=="text"){
var arrDato=this.value.split(" ");
var datosConMayusculas="";
for (var i = 0; i < arrDato.length; i++) {
  datosConMayusculas +=arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase()+"";
}
this.value=datosConMayusculas;
  }
}

  inputs[0].onblur=validacionInputs;
  inputs[1].onblur=validacionInputs;
  inputs[2].onblur=validacionInputs;

}
