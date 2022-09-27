//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman'
  };
  
  /* const { nombre, edad:age } = persona;
  
  console.log(persona);
  console.log(nombre);
  console.log(age); */
  
  const getAvenger = ({ edad, clave, rango = 'Capitan' }) => {
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.125,
        lng: -12.57,
      },
    }
  }
  
  const { nombreClave, anios, latlng: { lat, lng } } = getAvenger(persona);
  
  console.log( nombreClave, anios, lat, lng);