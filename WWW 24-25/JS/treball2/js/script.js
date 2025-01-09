//******* * INICIALITZACIO DE VARIABLES *************/
    
    
    const llistaparaules=["latigo","sandia", "gas","chocolate","pollo", "raton","benja","piedra","susana","marc","pelea","josebenjamin","pedro","tutoria","califato","sara","trabajo","bobesponja","gato","zapato","tarro","testarudo","terreno","rubia","rodri","tetera","huevo","castor","torero","tariq","santo","niki","marina","sergio","jordi"];

//como elegir un elemento aleatorio de un vector (después)/
    let paraulasecreta;

//array con lineas de la palabra a adivinar(tantas lineas como letras)/
    const arrayparaulaguions=[];

//numero de fallos/
    let numerrades=0;
    let numencerts=0;

    let array_paraulasecreta;
//lista de letras ya dichas/
    const llistatlletres=[];

function inicializar(){
//selecció de la paraula de manera aleatòria/
    let posicio = Math.floor(Math.random() * llistaparaules.length);
    
    //triem la paraula de l'array diccionario/
    paraulasecreta = llistaparaules[posicio];

    //convertim cadena en array/
    array_paraulasecreta = Array.from(paraulasecreta);

    //comprobam que la paraula es mostra
    //
    let num_guions = array_paraulasecreta.length;

    //creem arrayparaulaguions/
    for (let i=0; i<num_guions; i++) {
        arrayparaulaguions[i] ='_';

    }
    for (let i=0; i<num_guions;i++){
        document.getElementById("palabra").innerHTML += `${arrayparaulaguions[i]} `;

}

var input = document.getElementById("letra");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("boton").click();
  }
});


}
function enviar(){

    let encert=false;
    let lletraescrita = document.getElementById("letra").value;
        
    llistatlletres.push(lletraescrita);


    document.getElementById("llistalletres").innerHTML += `${lletraescrita} <br>`;
        //borrem la idea introduida al formulari
        //document.getElementById("letra").reset ();
     document.getElementById("formulario").reset();
        //3-comprovem si la lletra esta en la paraula arrayparaulasecreta
        //modifiquem array_paraulaguions amb les lletres endevinades
        //marcar encert=true i incrementar el nombre de encerts
        //que seran totes les ocurrencies encertades
            
    for (let j=0; j<array_paraulasecreta.length; j++) {
        if (array_paraulasecreta[j] == lletraescrita)
            {
            arrayparaulaguions[j] = lletraescrita;
            encert = true;
            numencerts++;
        }
    }
           
    if (!encert) {
            numerrades++;     
        }


    

    document.getElementById("palabra").innerHTML = "";
        
    for (let j=0; j<array_paraulasecreta.length;j++){
        //no es num guions al solo estar declarado en la funcion anterior/
        document.getElementById("palabra").innerHTML += `${arrayparaulaguions[j]} `;
        

        }
        
    document.getElementById("letra").focus();

    dibuixar(numerrades, numencerts);
}


    function dibuixar(errades, encerts){
        //capturar la id de la imatge a mostrar/
        let imatge = document.getElementById("imagen");

        switch(errades){
            case 0:
                imatge.src = "./IMG/A0.png";
                break;
            
            case 1:
                imatge.src = "./IMG/A1.png";
                break;
            case 2:
                imatge.src = "./IMG/A2.png";
                break;
                
            case 3:
                imatge.src = "./IMG/A3.png";
                break;
            case 4:
                imatge.src = "./IMG/A4.png";
                break;
            
            case 5:
                imatge.src = "./IMG/A5.png";
                break;
            case 6:
                imatge.src = "./IMG/A6.png";
                break;
                
        }

    if (numencerts == array_paraulasecreta.length){
        document.getElementById("frasencert").innerHTML += ` la resposta es correcta <br> t'ha costat ${llistatlletres.length} lletres `;
        document.getElementById("winner").style.display='block'
    }

    if(numerrades == 6){
        document.getElementById("fraserror").innerHTML += ` has perdut la paraula era ${paraulasecreta} `;
        document.getElementById("loser").style.display='block'
    }
    
}