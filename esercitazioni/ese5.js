// // Scrivi un costruttore Calcolatrice che crea
// // oggetti con 4 metodi:
// // leggi() richiede due valori come argomento della
// // funzione e li memorizza nelle proprietà
// // dell’oggetto.
// // somma() ritorna la somma delle proprietà.
// // moltiplica() ritorna il prodotto delle proprietà.
// // dividi() ritorna la divisione delle proprietà


// // IO
// function Oggetti(){
    
    
//     this.leggi = function (numero,numero1){
//         if (typeof numero == "number" && numero1 == "number"){
//             this.numero = numero;
//             this.numero1 = numero1;
//         }else{
//             this.numero = 0;
//             this.numero1 = 0;
//         }
//         this.numero = numero;
//         this.numero1 = numero1;
            
//     }
//     this.somma = function () {
//         return this.numero + this.numero1;
//     }

//     this.moltiplica = function () {
//         return this.numero * this.numero1;
//     }

//     this.dividi = function () {
//         return this.numero / this.numero1;
//     }
// }




// let crea = new Oggetti();
// crea.leggi(5,9);
// console.log(crea.moltiplica());

// // PROF
// function Calcolatrice(){
//     this.x = 0,
//     this.y = 0,
//     this.leggi = function(x, y){
//         this.x = typeof x == "number" ? x : 0;
//         this.y = typeof y == "number" ? y : 0;
//     };
//     this.somma = function(){
//         return this.x + this.y;
//     };

//     this.moltiplica = function(){
//         return this.x * this.y;
//     };

//     this.dividi = function(){
//         if (this.y <= 0){
//             return NaN;
//         }
//         return this.x / this.y;
//     }
// }

// let calc = new Calcolatrice();

// calc.leggi(5, 6);
// console.log(calc.somma());
// console.log(calc.moltiplica());
// console.log(calc.dividi());







class Calcolatrice {
    constructor(parametro1,parametro2){
    this.parametro1 = parametro1;
    this.parametro2 = parametro2;
}
    leggi (){
        this.parametro1 = typeof parametro1 == "number" ? parametro1 : undefined;
        this.parametro2 = typeof parametro2 == "number" ? parametro2 : undefined;
    };
    somma (){
        return this.parametro1 + this.parametro2;
    };

    moltiplica (){
        return this.x * this.y;
    };

    dividi (){
        if (this.y <= 0){
            return NaN;
        }
        return this.x / this.y;
    }
}

let calc = new Calcolatrice("se","sasso");

calc.leggi();
console.log(calc.somma());
console.log(calc.moltiplica());
console.log(calc.dividi());