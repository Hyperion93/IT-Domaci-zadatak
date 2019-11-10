 function cenapice(cena, poluprecnik){
     let povrs=(poluprecnik ** 2) * Math.PI;
     return povrs/cena;
    }
console.log('Cena pice po cm^2 je '+ cenapice(500, 16));