let llistajugadors =[];

function afegirjugador(){
    let jugador = document.getElementById("camp_nom").value;
//afegir de manera constructiva( += ) //
    document.getElementById("jugadors").innerHTML += `${jugador} <br>`
    
    llistajugadors.push(jugador);

}

function nextplayer(){
    let np =llistajugadors[0];
    
    document.getElementById("ajn").innerHTML = `${np}`

    llistajugadors.pop(np);
     
    
}