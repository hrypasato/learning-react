//Arreglos en JS

const arreglo = [1,2,3,4];

/*No usar push */
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [ ...arreglo, 5 ];
//la función map retorna un nuevo arreglo
const arreglo3 = arreglo2.map( numero => 2*numero )

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);