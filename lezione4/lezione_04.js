// // let etichetta = "nomeProprieta";
// // let oggetto = {
// //     [etichetta]: "ciao"
// // }
// // let oggetto1 = {
// //     "etichetta": "ciao"
// // }
// // let oggetto2 = {
// //     etichetta: "ciao"
// // }

// // console.log(oggetto.nomeProprieta);
// // console.log(oggetto[etichetta]);
// // console.log(oggetto["nomeProprieta"]);
// // console.log(etichetta);

// function makeObj(nominativo){
//     return {
//         //nome: nominativo
//         //nominativo, 
//         nominativo
//     };
// }

// let og = makeObj("prova");
// console.log(og.nominativo);

// function existsProperty(nomePropery, obj){
//     if (obj === null || obj === undefined){
//         return false;
//     }

//     if (nomePropery === null || nomePropery === undefined){
//         return false;
//     }

//     if (obj[nomePropery] === undefined){
//         return false;
//     }
//     return true;
// }

let vuoto ={};
let pieno ={ banana: "gialla"};

function isEmpty(obj){
    for (i in obj){
        return true;
    }
    return false;
}

console.log(isEmpty(vuoto));
console.log(isEmpty(pieno));


let calciatori =[
    {nome:"marco", cognome:"s", numero:6},
    {nome:"salmo", cognome:"v", numero:6},
    {nome:"sasso", cognome:"d", numero:6},
    {nome:"sesso", cognome:"g", numero:6},
    {nome:"spasmo", cognome:"h", numero:10},
    {nome:"pesto", cognome:"j", numero:10},
    {nome:"resto", cognome:"k", numero:10},
    {nome:"cesto", cognome:"l", numero:6},

]

function numeri10(obj){
    for(calciatori of obj){
        if(calciatori.numero == 10){
            console.log(calciatori.nome+ " " +calciatori.cognome)
        }
    }
}

numeri10(calciatori);