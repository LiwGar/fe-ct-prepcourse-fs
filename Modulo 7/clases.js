// // FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function () {
        console.log("este es un " + this.marca + " de color " + this.color + ", modelo " + this.año);
    }
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

 miPrimerAuto.informacion();

 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);


 // EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    informacion = function () {
        console.log("este es un " + this.marca + " de color " + this.color + ", modelo " + this.año);
    }
}

 let miTercerrAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 miTercerrAuto.informacion();
 miSegundoAuto.informacion();

 
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);


