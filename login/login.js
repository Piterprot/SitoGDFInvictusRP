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
         window.location.href = "../pag_loggate/conc.html";
         Sovrascrivo();
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

  let riferimento = 9999;
  let riferimentoTestuale = document.getElementById("TextRiferimento").innerHTML; 
  switch(riferimentoTestuale){

    case "CONCESSIONARIO":
      riferimento = 0; 
      break;
  }

    let requestURL = 'datiloggati.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


    request.onload = function (){
    const db = request.response;
    document.getElementById("FattEmesse").innerHTML = db[riferimento].FattEmesse  
    document.getElementById("FattTotale").innerHTML = db[riferimento].totFatturato
  
     let FattEmesseIniziali = db[riferimento].FattEmesse;
      let FattEmesseNuove = parseInt(document.getElementById("fattEmesse").value);
      let FattEmesseTotali = FattEmesseIniziali + FattEmesseNuove;
    
      let totFatturatoIniziale = db[riferimento].totFatturato;
      let totFatturatoNuovo = parseInt(document.getElementById("Importo").value);
      let totFatturatoTotale = totFatturatoIniziale + totFatturatoNuovo;

      const newData = JSON.stringify(db, null, 2);
      
      
        let fileWriter = new XMLHttpRequest();
        fileWriter.open = ('PUT', 'datiloggati.json');
        fileWriter.setRequestHeader('Content-Type', 'application/json');
        fileWriter.onload = function(){
      
       }
      fileWriter.send(newData);
  }  

    let DataInizio = document.getElementById("DataInizio").value;
    let DataFine = document.getElementById("DataFine").value;

    /*
    if(DataFine < DataInizio){
      alert("Le date non sono state inserite correttamente");
      return;
    }
    if(DataInizio == "" || DataFine == ""){
      alert("Inserire le date");
      return;
    } */
}   



