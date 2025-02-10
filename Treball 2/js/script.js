function inicializar(){
  var input = document.getElementById("form");

  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("sub").click();
    }
  });




}

function subscribe(){

  
  

let text = document.getElementById("valid");
let container = document.getElementById("allcontainer");
let suc = document.getElementById("succes");
let gmail = document.getElementById("form").value;
const arroba =  '@' 
const punto = '.'


if (gmail.includes(arroba)){
    

    if(gmail.includes(punto)){
  suc.style.display = "block";
  container.style.display = "none";

  document.getElementById("confirmation").innerHTML += `A confirmation email has been sent to ${gmail}. 
Please open it and click the button inside to confirm your subscription.`;

  }

  else {
  
 
     form.style.color =" rgb(230, 60, 8)";
     form.style.borderColor =" rgb(230, 60, 8)";
     text.style.display = "block";
   
   }

}

else {
  
  form.style.color =" rgb(230, 60, 8)";
  form.style.borderColor =" rgb(230, 60, 8)";
  text.style.display = "block";

}


}

function restart(){
  window.location.reload();

}