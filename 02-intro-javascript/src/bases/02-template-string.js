const nombre = 'Miguel';
const apellido = 'Quinde';

const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre){
  return `Hola ${nombre}`
}
console.log(`Mensage: ${getSaludo(nombreCompleto)}`)