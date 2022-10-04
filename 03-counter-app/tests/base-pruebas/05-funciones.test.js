import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', ()=>{
   test('getUser', () =>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        //toEqual para comparar objetos 
        expect(testUser).toEqual(user);

   }); 

   test('getUsuarioActivo',()=>{
        const name = 'Miguel';

        const usuarioActivo = getUsuarioActivo(name);
        
        expect(usuarioActivo).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
   })
});