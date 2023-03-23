// Si chiede di definire una serie di classi
// indipendenti, che rappresentano delle forme
// geometriche piane: Triangolo, Quadrato,
// Rettangolo e Cerchio.
// Per ciascuna classe:
// Definire il costruttore con i parametri necessari a
// descrivere la sua forma geometrica.
// Implementare la classe padre FiguraGeometrica
// che contiene i seguenti metodi:
// ● calcolaPerimetro
// ● calcolaArea

// Classe padre FiguraGeometrica
class FiguraGeometrica {
    constructor() {}
  
    // Metodo per calcolare il perimetro della figura
    calcolaPerimetro() {}
  
    // Metodo per calcolare l'area della figura
    calcolaArea() {}
  }
  
  // Sottoclasse Triangolo
  class Triangolo extends FiguraGeometrica {
    constructor(base, altezza, lato1, lato2, lato3) {
      super();
      this.base = base;
      this.altezza = altezza;
      this.lato1 = lato1;
      this.lato2 = lato2;
      this.lato3 = lato3;
    }
  
    // Metodo per calcolare il perimetro del triangolo
    calcolaPerimetro() {
      return this.lato1 + this.lato2 + this.lato3;
    }
  
    // Metodo per calcolare l'area del triangolo
    calcolaArea() {
      return (this.base * this.altezza) / 2;
    }
  }
  
  // Sottoclasse Quadrato
  class Quadrato extends FiguraGeometrica {
    constructor(lato) {
      super();
      this.lato = lato;
    }
  
    // Metodo per calcolare il perimetro del quadrato
    calcolaPerimetro() {
      return this.lato * 4;
    }
  
    // Metodo per calcolare l'area del quadrato
    calcolaArea() {
      return this.lato ** 2;
    }
  }
  
  // Sottoclasse Rettangolo
  class Rettangolo extends FiguraGeometrica {
    constructor(base, altezza) {
      super();
      this.base = base;
      this.altezza = altezza;
    }
  
    // Metodo per calcolare il perimetro del rettangolo
    calcolaPerimetro() {
      return 2 * (this.base + this.altezza);
    }
  
    // Metodo per calcolare l'area del rettangolo
    calcolaArea() {
      return this.base * this.altezza;
    }
  }
  
  // Sottoclasse Cerchio
  class Cerchio extends FiguraGeometrica {
    constructor(raggio) {
      super();
      this.raggio = raggio;
    }
  
    // Metodo per calcolare il perimetro del cerchio
    calcolaPerimetro() {
      return 2 * Math.PI * this.raggio;
    }
  
    // Metodo per calcolare l'area del cerchio
    calcolaArea() {
      return Math.PI * this.raggio ** 2;
    }
  }
