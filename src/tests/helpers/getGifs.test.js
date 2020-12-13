import { getGif } from '../../helpers/getGifs';

describe('Pruebas con fetch getGifs', () => {
    test('Debe de traer 3 elementos', async() => {
      const gifs =  await getGif('one punch');
      expect( gifs.length ).toBe( 3 );
    })

    test('Debe de traer 0 elementos cuando esta vacia la category', async() => {
      const gifs =  await getGif('');
      expect( gifs.length ).toBe( 0 );
    })

})