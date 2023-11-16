var deportes = {
    conBalon: ["futbol", "Basketball", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Trekking"],
};

var persona = { 
    nombre: 'Lucas', 
    edad: 26, estudios: 
    { esProgramador: true } 
};

console.log(persona.edad); 
persona.nombre = "Wilgar";
persona.edad = 38;


console.log(persona); 

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);



var misFunciones = {saludar: function () {
    console.log("Hola");
    },
};

misFunciones.saludar();


// DOT NOTATION
var atuendos = { 
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes'], 
};
console.log(atuendos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


var comidas = {}
var diferenciasDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ["Verduras", "Frutas"];
    comidas[propDos] = ["Fritos", "Embutidos"];
}

diferenciasDeNotaciones("Saludable", "NoSaludable");
console.log(comidas);












/**
 * Las claves son únicas en un objeto, solo puede haber una 
 * clave de ese nombre, aunque, varias claves pueden tener el 
 * mismo valor. Los valores pueden ser cualquier tipo de dato 
 * de Javascript; cadena, número, booleano, matriz, función o 
 * incluso otro objeto.
 */