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
