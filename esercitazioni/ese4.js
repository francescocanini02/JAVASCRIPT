class Automobile{
    auto = "punto";
    auto1 = "fiat";
    auto2 = "bmw"
}

class Garage {
    
    
    constructor (auto) {
    this.auto= auto;
    }

    validaAuto (auto){
    if (auto === null || auto === undefined){
        return false;
    }

    if ("nomeMarca" in auto && "nomeModello" in auto){
        return true;
    }

    return false;
    }
    inserisciAuto (auto){
    if (this.validaAuto(auto)){
        let indice = this.Automobile.length;
        this.[indice] = auto; 
    }
    }

    rimuoviAuto (auto){
    if (this.validaAuto(auto)){
        let indiceDaEliminare = -1;
        for (let indice = 0; indice < this.automobili.length; indice++) {
            let autoInGarage = this.automobili[indice];
            if (autoInGarage.nomeMarca === auto.nomeMarca 
                && autoInGarage.nomeModello === auto.nomeModello){
                    indiceDaEliminare = indice;
                    break;
                }
        }

        if (indiceDaEliminare >= 0){
            this.automobili[indiceDaEliminare] = undefined;
        }
    }
}

    stampaAuto (nomeMarca){
    for (const auto of this.automobili) {
        if (nomeMarca === auto.nomeMarca){
            console.log(auto.nomeMarca +" "+ auto.nomeModello);
        }
    }
}
}


let bo = new Automobile("punto");



