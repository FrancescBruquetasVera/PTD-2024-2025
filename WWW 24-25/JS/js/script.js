let llistajugadors =[];

function afegirjugador(){
    let jugador = document.getElementById("camp_nom").value;
//afegir de manera constructiva( += ) //
    document.getElementById("jugadors").innerHTML += `${jugador} <br>`
    
    llistajugadors.push(jugador);

}

function nextplayer(){
    
    document.getElementById("ajn").innerHTML = llistajugadors[0];

   

    let jugadoractual = llistajugadors.shift();

    llistajugadors.push(jugadoractual);

    document.getElementById("jugadors").innerHTML= " ";

    for(let i=0;i<llistajugadors.length;i++){
    document.getElementById("jugadors").innerHTML += `${llistajugadors[i]} <br>`;

}

}