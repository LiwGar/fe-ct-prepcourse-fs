class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
//  let martin = new Persona('Martin', 26);
//  martin.saludar();


//EXTENSION CLASE

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let cristiano = new Persona('Cristiano', 26);
 let programador = new Programador('María', 37, 4);
 cristiano.saludar();
 programador.codear();

 programador.saludar();