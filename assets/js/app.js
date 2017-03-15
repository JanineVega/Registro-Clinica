
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
  var edad    = document.getElementById("edad").value;
  var genero  = document.getElementById("genero").value;
  var ciudad  = document.getElementById("ciudad").value;
  var pais    = document.getElementById("pais").value;
  var mostrar=new     Pacientes(nombre,apellido,edad,genero,ciudad,pais);
  pacientes.push(mostrar);
  imprimir(pacientes);
//  console.log(pacientes);
  formulario.reset();
 });

function imprimir(paciente){
 var contenedor = document.getElementById("contenedor");

 for (var prop in pacientes) {
 var contenedorPaciente = document.createElement("div");
 contenedorPaciente.classList.add("un-paciente");
 var dato = document.createElement("p");
 dato.innerHTML= "Nombre: " + pacientes[prop].nombre +
                 "<br>Apellido: " + pacientes[prop].apellido +
                 "<br>Edad: " + pacientes[prop].edad +
                 "<br>Ciudad: " + pacientes[prop].ciudad+
                 "<br>País: " + pacientes[prop].pais;
	contenedorPaciente.appendChild(dato);
  contenedor.appendChild(contenedorPaciente);
    }
  //alert("Felicidad");
  }
}
