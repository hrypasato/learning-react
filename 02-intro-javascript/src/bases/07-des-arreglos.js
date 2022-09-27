//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [, p2 ] = personajes;

console.table(p2);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

const uState = ( valor ) => {
  return [ valor, ()=> console.log('Hola Mundo')  ]
}

const [ valor, fHola ] = uState('Goku');

console.log(valor)
fHola()