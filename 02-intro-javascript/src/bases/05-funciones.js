//funciones en JS

const saludar = ( nombre ) => {
    return `Hola, ${nombre}`;
  }
  
  const saludar3 = nombre => `Hola ${nombre}`
  
  const getUser = () => (
    {
      uid:'ABC1542',
      username:'superusername'
    }
  )
  
  const getUsuarioActivo = (nombre) => (
    {
      uid:'ABC1542',
      username: nombre,
    }
  )
  
  const usuarioActivo = getUsuarioActivo('Miguel');
  
  console.log(saludar('Goku'));
  console.log(saludar3('Vegueta'));
  console.log(getUser());
  console.log(usuarioActivo)
  