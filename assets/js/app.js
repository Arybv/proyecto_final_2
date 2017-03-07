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
