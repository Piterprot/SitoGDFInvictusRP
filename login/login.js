function Login(){

  let requestURL = 'credenziali.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function (){
   const classe = request.response;
    let numero = document.getElementById("nomeAzienda").value;
    let numeroToInt = parseInt(numero);
    let password = document.getElementById("password").value;

    if(numeroToInt == "" || password == ""){
      alert("Compilare tutti i campi");
      return;
    }

    switch(numeroToInt){
      case 1111: 
        if(password == classe[0].password){
          console.log("Sono nel case 1111")
         let numeroRiferimento = FunRiferimento(); 
         numeroRiferimento = numeroRiferimento-9999;
         console.log(numeroRiferimento);
         window.location.href = "../pag_loggate/conc.html";
         
        }
        else{
          alert("Nome utente o password errati");
        }
        break;
      case 2222: 
        if(password == classe[1].password){
        
        }
        else{
          alert("Nome utente o password errati");
        }
        break;
    }
 }
}



function Sovrascrivo(){

    console.log(riferimento)
    let requestURL = 'datiloggati.json';
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

    request.onload = function (){
    const db = request.response;
    document.getElementById("FattEmesseConc").innerHTML = db[0].FattEmesse  
    document.getElementById("FattTotale").innerHTML = db[0].totFatturato  
    }
}  

function FunRiferimento(){
  let riferimento = 9999; 
  console.log(riferimento)
  return riferimento;
}