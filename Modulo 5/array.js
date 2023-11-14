var listaDeCompras = [];

listaDeCompras[3] = "Tomates";
listaDeCompras[2] = "Lechuga";
listaDeCompras[1] = "Zanahoria";
listaDeCompras[0] = "Pimenton";


console.log(listaDeCompras);

var elementoUno = listaDeCompras[1];

console.log(elementoUno);


var colores = ["amarillo", "azul"]

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);


// EVERY
var numeros = [ 10, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { 
    return num > 5 
} );

console.log(cumplenCondicion);


// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push("y");

console.log(palabraSeparada);


// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);


// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
numeros.forEach( (num) => { 
    if (num === 3) {
        console.log(num);
    }    
     
} );


// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { 
    
    return num + 1 
} );

console.log(masUno);


//FOR
var arr = [1, 2, 3, 4, 5]
for(var i = 0; i < arr.length; i++) {
    console.log(arr[1])
}


function encontrarLetraI (string) {
    var letras = string.split("");

    for (let i = 0; i <letras.length; i++) {
        if (letras[i] === "i") {
            console.log("si contiene la letra i");
        }
    }
}
encontrarLetraI("JavaScript");
encontrarLetraI("Henry");



// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr)