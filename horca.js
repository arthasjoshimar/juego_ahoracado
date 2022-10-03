function dibujarTablero() {
    tablero.lineWidth=8;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    /*tablero.fillStyle="#e4f8cd";*/
    tablero.fillStyle= "#F3F5FC";
    tablero.strokeStyle = "#63355f";
    tablero.fillRect(0,0,1200,800);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
  }

  function dibujarLineas() {
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.strokeStyle = "#63355f";
    tablero.beginPath();
    let ancho=600/palabraSecreta.length;
    for (let i=0;i<palabraSecreta.length;i++){
      tablero.moveTo(500+(ancho*i),640)
      tablero.lineTo(550+(ancho*i),640)
    }
    tablero.stroke();
    tablero.closePath();
  }
  function escrribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle= "#63355f";
    let ancho=600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],505+(ancho*index),620);
    tablero.stroke();
  }

  function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6;
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#63355f";
    tablero.fillText(letra,535+(40*(10-errorsLeft)),710,40);
  }

  function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.strokeStyle = "#63355f";
    if(puntaje===8){
    //poste lateral
    tablero.moveTo(700,500);
    tablero.lineTo(700,100);
    }
    if(puntaje===7){//teto 
    tablero.moveTo(850,100);
    tablero.lineTo(700,100);
    }
    if(puntaje===6){//corda
    tablero.moveTo(850,100);
    tablero.lineTo(850,171);
    }
    if(puntaje===5){//para cara
    tablero.moveTo(900,230);
    tablero.arc(850,230,50,0,Math.PI*2);
    }
    if(puntaje===4){//para cuerpo
    tablero.moveTo(850,389);
    tablero.lineTo(850,289);
    }
    if(puntaje===3){//para pierna  izquierda
    tablero.moveTo(850,389);
    tablero.lineTo(800,450);
    }
    if(puntaje===2){//para pierna derecha
    tablero.moveTo(850,389);
    tablero.lineTo(890,450);
    }
    if(puntaje===1){//para mano izquierda
    tablero.moveTo(850,330);
    tablero.lineTo(800,389);
    };
    if(puntaje===0){//para mano derecha
    tablero.moveTo(850,330);
    tablero.lineTo(890,389);
    }
    tablero.stroke();
    tablero.closePath();
  }

  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#E74465";
    tablero.fillText("Fin del juego!",930,320);
    setTimeout( recargar , 1000);
  }

  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#508513";
    tablero.fillText("Ganaste,",950,320);
    tablero.fillText("Felicidades!",930,360);
    setTimeout( recargar , 1000);
  }   

  function recargar(){
    location.reload(); 
  }