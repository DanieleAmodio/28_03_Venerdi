let iscritti =  [{ Id:1, Nome:'Francesco', Cognome:'Russo', Recapiti:{Cellulare:3551215456, Fisso:8105565458,email:'francescorusso@libero.it'}}, 
    { Id:2, Nome:'Carmela', Cognome:'Verdi', Recapiti:{Cellulare:3514589632, Fisso:8105168448 } },
    { Id:3, Nome:'Carlo', Cognome:'Rossi', Recapiti:{ Fisso:8154365458,email:'carlorossi@libero.it' } },
    { Id:4, Nome:'Mattia', Cognome:'D Ambrosio', Recapiti:{} },
    { Id:5, Nome:'Giuseppe', Cognome:'Longo', Recapiti:{Cellulare:3664521456,email:'giuseppelongo@libero.it' } },
    { Id:6, Nome:'Sonia', Cognome:'Mango', Recapiti:{} }
];

for (let i = 0; i < iscritti.length; i++) {
     let iscritto = iscritti[i] 
     let div = document.createElement("div")
     div.innerHTML = `Id ${iscritto.Id}, Nome ${iscritto.Nome}, Cognome ${iscritto.Cognome}`
     console.log(iscritto)
     document.body.appendChild(div)
     const isObjectEmpty = (objectName) => {
        return (
          objectName &&
          Object.keys(objectName).length === 0 &&
          objectName.constructor === Object
        );
      };
      console.log(isObjectEmpty(iscritto.Recapiti))
      if (!isObjectEmpty(iscritto.Recapiti)) {
        let recapiti = "";
        if (iscritto.Recapiti.Cellulare){ recapiti += '<div>Cellulare :'+ iscritto.Recapiti.Cellulare+'</div>';}
        if (iscritto.Recapiti.Fisso) recapiti += `<div>Fisso: ${iscritto.Recapiti.Fisso}</div>`;
        if (iscritto.Recapiti.email) recapiti += `<div>Email: ${iscritto.Recapiti.email}</div>`;
        div.innerHTML += recapiti;
    } else {
        div.innerHTML += `<div>Recapiti non inseriti</div>`;
    }
      
  }



    
      
    
        
        
             
        
         
 
