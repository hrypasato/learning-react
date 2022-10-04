import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById retorna un objeto', () => { 
        const testId = 1;
        const hero = getHeroeById(testId);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById retorna undefined si no existe el id', () => { 
        const testUndefinedId = 1500;
        const hero = getHeroeById(testUndefinedId);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner retorna un arreglo con los héroes de DC', () => { 
        const owner = 'DC';
        const testHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]      
        
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes).toHaveLength(3);
        expect(heroes).toStrictEqual(testHeroes);
    });

    test('getHeroesByOwner retorna un arreglo con los héroes de Marvel', () => { 
        const owner = 'Marvel';
        
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes).toHaveLength(2);
    });
});