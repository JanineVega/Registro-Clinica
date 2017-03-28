window.onload=function(){
  var nombre  = document.getElementById("nombre-paciente");
  var apellido= document.getElementById("apellido-paciente");
  var edad    = document.getElementById("edad-paciente");
  var genero  = document.getElementById("genero-paciente");
  var pais    = document.getElementById("pais-paciente");
  var departamento=document.getElementById("departamento-paciente");

  var objetoPaciente=JSON.parse(localStorage.getItem("nuevoPaciente"));

  nombre.innerText=objetoPaciente.nombre;
  apellido.innerText=objetoPaciente.apellido;
  edad.innerText=objetoPaciente.edad;
  genero.innerText=objetoPaciente.genero;
  pais.innerText=objetoPaciente.pais;
  departamento.innerText=objetoPaciente.departamento;

function editar2(){
  var cambiar=document.getElementsByTagName("span");
  cambiar.forEach(function(e){
    return e.setAttribute("contenteditable",true);
  });

  }

var editar=document.getElementById("editar");
editar.setAttribute('data-edit-mode',false);
editar.addEventListener("click",function(e){
  if (e.target.getAttribute('data-edit-mode') === 'false'){
    e.target.innerHTML = "Guardar";
    editar2();
  //  document.getElementsByTagName("span").contenteditable=true;
  }
  });
  // editar.addEventListener("click",function(e){
  //   if (e.target.getAttribute('data-edit-mode') === 'true'){
  //     var contenido=document.getElementById("textoNombre").value;
  //     objetoPaciente.nombre=contenido;
  //     var nuevoSpan=document.createElement("Span");
  //     var textonuevo=document.createTextNode(contenido);
  //     nuevoSpan.appendChild(textonuevo);
  //
  //     e.target.innerHTML = "Editar";
  //
  //   }
  //   });


}
