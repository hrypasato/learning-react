import heroes from '../data/heroes';


export const getHeroeById = (id) =>{
    return heroes.find( (heroe) => heroe.id === id);
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner = owner);
}

/* console.table(heroes);
console.table(getHeroeById(2));
console.table(getHeroesByOwner('DC'));
console.log(owners); */