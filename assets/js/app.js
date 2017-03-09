/*function comprondo() {
  var pulsa = false;
  var opcion = document.formulario.opciones;
  var elege = 0;
    for (i=0;i<opcion.length;i++) {
      if (opcion[i].checked == true) {
      pulsa = true;
      elege = i;
      }
    }
    }
*/
var resultado = new Array;
var res1 = new Array;
var res2 = new Array;
var res3 = new Array;

var resultado = 0;
  resultado[1]="1";
  resultado[2]="2";
  resultado[3]="3";

  res1[1]="Incorrecto";
  res2[2]="Incorrecto";
  res3[3]="Incorrecto";

function preguntas(elemento,indice){
res1[elemento]=indice;
}
function puntos(){
  var text="RESULTADO\n";
  resultado=0;
  for(i=1;i<=5;i++){
    text=+"\n"
    if(resultado[i] != res1[i]){
      text=text+resultado[1]+"\n";
    }
    else {
      text=text+"resultado[i]"
    }
  }
}
//
function alumnaLaboratoria(){
		var datos =
        [ {
           nombre: "Meche",
           apellido: "Zubieta",
           promocion: "1era. promocion",
           estado: "Trabajando" },

           nombre: "Arabela",
           apellido: "Rojas",
           promocion: "2da. promocion",
           estado: "Trabajando" },

           nombre: "María",
           apellido: "Rosán",
           promocion: "2da. promocion",
           estado: "Trabajando" },

           nombre: "Guadalupe",
           apellido: "Racio",
           promocion: "3era. promocion",
           estado: "Trabajando" },

           nombre: "Sara",
           apellido: "Casa",
           promocion: "3era. promocion",
           estado: "Trabajando" },

           nombre: "Daniella",
           apellido: "Durán",
           promocion: "4ta. promocion",
           estado: "Trabajando" },

           nombre: "Michelle",
           apellido: "Seguil",
           promocion: "5ta. promocion",
           estado: "Trabajando" },

           nombre: "Diana",
           apellido: "Navarro",
           promocion: "5ta. promocion",
           estado: "Trabajando" }];

var dato = "<ul>";
  datos.forEach(function(elemento){
    dato += "<div> Nombre: " + elemento.nombre + "<br>" +
       			"Apellido: "+ elemento.apellido + "<br>"+
            "Promoción: "+ elemento.promocion + "<br>" +
            "Estado: "+ elemento.estado + "<br><br></div>";
       		                        });
    dato += "</ul>";
		  document.write(dato);
  }
alumnaLaboratoria();

//
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
