import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 

    test('retornaArreglo [string, numero]', () => { 
        const [ letters, numbers ] = retornaArreglo();
        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));
    });
    
})