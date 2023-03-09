// class Automobile{
//     auto = "punto";
//     auto1 = "fiat";
//     auto2 = "bmw"
// }

// class Garage {
    
    
//     constructor (auto) {
//     this.auto= auto;
//     }

//     validaAuto (auto){
//     if (auto === null || auto === undefined){
//         return false;
//     }

//     if ("nomeMarca" in auto && "nomeModello" in auto){
//         return true;
//     }

//     return false;
//     }
//     inserisciAuto (auto){
//     if (this.validaAuto(auto)){
//         let indice = this.Automobile.length;
//         this.[indice] = auto; 
//     }
//     }

//     rimuoviAuto (auto){
//     if (this.validaAuto(auto)){
//         let indiceDaEliminare = -1;
//         for (let indice = 0; indice < this.automobili.length; indice++) {
//             let autoInGarage = this.automobili[indice];
//             if (autoInGarage.nomeMarca === auto.nomeMarca 
//                 && autoInGarage.nomeModello === auto.nomeModello){
//                     indiceDaEliminare = indice;
//                     break;
//                 }
//         }

//         if (indiceDaEliminare >= 0){
//             this.automobili[indiceDaEliminare] = undefined;
//         }
//     }
// }

//     stampaAuto (nomeMarca){
//     for (const auto of this.automobili) {
//         if (nomeMarca === auto.nomeMarca){
//             console.log(auto.nomeMarca +" "+ auto.nomeModello);
//         }
//     }
// }
// }


// let bo = new Automobile("punto");


// Scrivi un programma per la gestione di un garage.
// Definisci un oggetto che rappresenti un automobile,
// dovrà contenere almeno marca del veicolo e nome del
// modello.
// Definisci un oggetto che rappresenti il garage.
// Scrivi una funzione che inserisca un veicolo nel garage.
// Scrivi una funzione che prenda in input una marca e
// stampi i modelli presenti nel garage di quella stessa
// marca.
// Scrivi una funzione che rimuove un veicolo dal garage.
// Puoi usare un array come base per salvare le automobili.


// Definizione della classe Automobile
class Automobile {
    constructor(marca, modello) {
      this.marca = marca;
      this.modello = modello;
    }
  }
  
  // Definizione della classe Garage
  class Garage {
    constructor() {
      this.automobili = [];
    }
  
    // Funzione per inserire un'automobile nel garage
    inserisciAutomobile(automobile) {
      this.automobili.push(automobile);
    }
  
    // Funzione per stampare i modelli presenti nel garage di una determinata marca
    stampaModelliPerMarca(marca) {
      const modelli = this.automobili
        .filter((automobile) => automobile.marca === marca)
        .map((automobile) => automobile.modello);
  
      console.log(`Modelli di ${marca} presenti nel garage: ${modelli.join(", ")}`);
    }
  
    // Funzione per rimuovere un'automobile dal garage
    rimuoviAutomobile(index) {
      this.automobili.splice(index, 1);
    }
  }
  
  // Creazione di un'istanza di Garage
  const garage = new Garage();
  
  // Creazione di alcune automobili
  const automobile1 = new Automobile("Fiat", "Panda");
  const automobile2 = new Automobile("Fiat", "500");
  const automobile3 = new Automobile("Ford", "Fiesta");
  
  // Inserimento delle automobili nel garage
  garage.inserisciAutomobile(automobile1);
  garage.inserisciAutomobile(automobile2);
  garage.inserisciAutomobile(automobile3);
  
  // Stampa dei modelli presenti nel garage di una determinata marca
  garage.stampaModelliPerMarca("Fiat"); // Modelli di Fiat presenti nel garage: Panda, 500
  
  // Rimozione di un'automobile dal garage
  garage.rimuoviAutomobile(1); // Rimuove l'automobile con indice 1 (ovvero automobile2)
  
  // Stampa dei modelli presenti nel garage di una determinata marca dopo la rimozione
  garage.stampaModelliPerMarca("Fiat"); // Modelli di Fiat presenti nel garage: Panda
  
