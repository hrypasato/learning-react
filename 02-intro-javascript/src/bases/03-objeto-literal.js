const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
      ciudad: 'New York',
      zip: 5532310,
      lat: 14.2532,
      lng: 34.95215,
    }
  }
  
  const persona2 = { ...persona };//clona el objeto
  persona2.nombre = 'Peter';
  
  console.table({ persona })
  console.table({ persona2 })