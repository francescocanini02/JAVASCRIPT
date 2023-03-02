// let totale = 2;
// function incrementa(){
//     let totale = 0;
//     totale += 1;
//     return totale;
// }


// console.log(incrementa(totale));
// console.log(incrementa(totale));


// let totale = 2;
// function incrementa(){
//     //let totale = 0;
//     totale += 1;
//     console.log("Il valore di totale e' : " + totale);
//     return totale;
// }


//incrementa(totale);
//console.log("Il valore di totale e' : " + totale);


//incrementa(totale);
//console.log("Il valore di totale e' : " + totale);


// let nonStampare = true;

// function stampa(){
//     let nonStampare = nonStampare; //da errore
//     if (!nonStampare){
//         console.log("Stampo");
//     }

//     nonStampare = false;
// }

// stampa();

function factorial(n) {
    if (n < 0) {
      return undefined;
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log (factorial(10));




























