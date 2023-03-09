
//   let numeri = [1,2,3];

// let scorri = function(elemento){
//     console.log(elemento);
// }
// numeri.forEach(scorri);

// numeri.forEach(elemento => {console.log(elemento)});

// numeri.forEach(function(elemento){console.log(elemento)});

// Scrivi un programma per la gestione di una rubrica telefonica. 

// Definisci una
// classe che rappresenti un contatto. 
// L'unico vincolo che hai è di inserire
// almeno il nome, cognome e il numero di telefono come stringhe.

// Definisci un’altra classe che rappresenti la Rubrica che implementa i metodi
// per le seguenti operazioni:
// - Visualizzazione dell'intera lista contatti con la possibilità di scegliere il
// tipo di ordinamento (A->Z, Z->A)
// - Inserimento di un nuovo Contatto che non sia già presente in Rubrica.
// - Modifica di uno contatto passando in input l'indice dell'array
// - Cancellazione di un contatto passando in input l'indice dell'array
// - Ricerca passando il nome, o parte del nome, e restituendo il singolo
// contatto.


class Contatto {
    constructor(nome, cognome, telefono) {
      this.nome = nome;
      this.cognome = cognome;
      this.telefono = telefono;
    }
  
    toString() {
      return `${this.nome} ${this.cognome} - ${this.telefono}`;
    }
  }
  
  class Rubrica {
    constructor() {
      this.contatti = [];
    }
  
    visualizzaRubrica(ordine) {
      if (ordine === "A-Z") {
        this.contatti.sort((a, b) => a.nome.localeCompare(b.nome));
      } else if (ordine === "Z-A") {
        this.contatti.sort((a, b) => b.nome.localeCompare(a.nome));
      }
      this.contatti.forEach((contatto, indice) => console.log(`${indice}: ${contatto.toString()}`));
    }
  
    inserisciContatto(contatto) {
      if (!this.contatti.some(c => c.nome === contatto.nome && c.cognome === contatto.cognome && c.telefono === contatto.telefono)) {
        this.contatti.push(contatto);
        console.log("Contatto aggiunto alla rubrica.");
      } else {
        console.log("Il contatto esiste già nella rubrica.");
      }
    }
  
    modificaContatto(indice, nuovoContatto) {
      if (indice >= 0 && indice < this.contatti.length) {
        const vecchioContatto = this.contatti[indice];
        vecchioContatto.nome = nuovoContatto.nome || vecchioContatto.nome;
        vecchioContatto.cognome = nuovoContatto.cognome || vecchioContatto.cognome;
        vecchioContatto.telefono = nuovoContatto.telefono || vecchioContatto.telefono;
        console.log("Contatto modificato.");
      } else {
        console.log("Indice non valido.");
      }
    }
  
    cancellaContatto(indice) {
      if (indice >= 0 && indice < this.contatti.length) {
        this.contatti.splice(indice, 1);
        console.log("Contatto cancellato.");
      } else {
        console.log("Indice non valido.");
      }
    }
  
    cercaContatto(nome) {
      const risultati = this.contatti.filter(c => c.nome.includes(nome) || c.cognome.includes(nome));
      if (risultati.length > 0) {
        risultati.forEach(contatto => console.log(contatto.toString()));
      } else {
        console.log("Nessun contatto trovato.");
      }
    }
  }
  
  // Esempio di utilizzo
  const rubrica = new Rubrica();
  
  rubrica.inserisciContatto(new Contatto("Mario", "Rossi", "123456789"));
  rubrica.inserisciContatto(new Contatto("Luigi", "Verdi", "987654321"));
  rubrica.inserisciContatto(new Contatto("Paolo", "Bianchi", "456789123"));
  rubrica.visualizzaRubrica("A-Z");
  
  rubrica.modificaContatto(1, new Contatto("Luca", null, "111111111"));
  rubrica.visualizzaRubrica("A-Z");
  
  rubrica.cercaContatto("ma");
  rubrica.cancellaContatto(0);
  rubrica.visualizzaRubrica("A-Z");
  