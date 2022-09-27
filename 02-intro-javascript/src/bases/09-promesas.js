import { getHeroeById } from './08-import-export'

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1); //transfiere la información al then
        //reject('No se pudo encontrar')// envia la información al catch
    }, 2000);
});

promesa.then((heroe)=>{
    console.log(heroe);
}).catch( err => console.warn(err) ) */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1); //transfiere la información al then
            }else{

                reject('No se pudo encontrar')// envia la información al catch
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then( console.log)
    .catch( err => console.warn(err) );