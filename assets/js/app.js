
window.onload=function() {
  function Pacientes(nombre,apellido,edad,genero,pais, departamento){
    this.nombre   = nombre;
    this.apellido = apellido;
    this.edad     = edad;
    this.genero   = genero;
    this.pais     = pais;
    this.departamento   = departamento;

  }
  var pacientes=[];

  var loginButton = document.getElementById("enviar");
  loginButton.addEventListener('click',function() {
    var nombre  = document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var spanApellido=document.getElementById("spanApellido");
    var edad    = document.getElementById("edad").value;
    var genero  = document.getElementById("genero").value;
    var pais    = document.getElementById("country").value;
    var departamento  = document.getElementById("departamento").value;
    //var mostrar=new Pacientes(nombre,apellido,edad,genero,pais,departamento);
    if(nombre.length==0 || apellido.length==0 || edad.length==0 || genero.length==0 ||pais.length==0 || departamento.length==0){
      alert("Por favor complete todos los campos.");
      return false;
    }
    console.log(new Pacientes(nombre, apellido, edad, genero,pais,departamento));
    localStorage.setItem("nuevoPaciente",JSON.stringify(new Pacientes(nombre,apellido,edad,genero,pais,departamento)));
  //  pacientes.push(mostrar);

    //imprimir(pacientes);
    formulario.reset();
    window.location.href="paciente.html";
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
      "<br>País: " + pacientes[prop].pais+
      "<br>Departamento: " + pacientes[prop].departamento;

      contenedorPaciente.appendChild(dato);
      contenedor.appendChild(contenedorPaciente);
    }
  }
  var nombre   = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var edad     = document.getElementById("edad");

  var sololetras=function (e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if ((codigoTecla>=97 && codigoTecla<=122)|| (codigoTecla>=65 && codigoTecla<=90) || codigoTecla==39 || codigoTecla==32 ) {
      return true;
    }else {
      this.nextElementSibling.nextElementSibling.innerHTML="Ingrese solo letras";
      return false;
    }
  }
  nombre.onkeypress=sololetras;
  apellido.onkeypress=sololetras;

  var solonumeros=function (e){
    var codigoTecla= e.keyCode;
    console.log(codigoTecla);
    var longitud = this.value.length;
    console.log(longitud);

    //console.log(this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
    if (codigoTecla>=48 && codigoTecla<=57 && this.value.length<=2){
      if(longitud==2){
        this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
      }
      return true;
    }else{
      return false;
    }
  }
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
    if(this.getAttribute("type")=="text"){
      var arrDato=this.value.split(" ");
      var datosConMayusculas="";
      for (var i = 0; i < arrDato.length; i++) {
        datosConMayusculas +=arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase()+" ";
      }
      this.value=datosConMayusculas;
    }
  }

  inputs[0].onblur=validacionInputs;
  inputs[1].onblur=validacionInputs;
  inputs[2].onblur=validacionInputs;
  inputs[3].onblur=validacionInputs;
  inputs[4].onblur=validacionInputs;

}
