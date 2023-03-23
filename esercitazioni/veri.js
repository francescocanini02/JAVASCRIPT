function numeri(n1, n2, n3, n4, n5) {
    let somma = n1 + n2 + n3 + n4 + n5;
    let media = somma / 5;
    return "La somma e la media sono "+ somma + " e " + media;
  }
  console.log(numeri(2, 4, 6, 8, 10));






  function calcolaTempo(secondi) {
    let ore = (secondi / 3600);
    let minuti = (secondi % 3600) / 60;
    let sec = (secondi % 3600) % 60;
    return ore + " ore " + minuti + " minuti " + sec + " secondi";
  }
  
  let secondi = 36000000;
  console.log(calcolaTempo(secondi)); 

  function cifre(numero) {
    if (numero < 10) {
      return 1;
    } else if (numero < 100) {
      return 2;
    } else if (numero < 1000) {
      return 3;
    } else if (numero < 10000) {
      return 4;
    }
  }

  console.log(cifre(8888)); 


  
  function pariODispari(numero) {
    if (numero % 2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }

  console.log(pariODispari(3));

  
  
