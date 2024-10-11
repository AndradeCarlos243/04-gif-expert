import { getGifsTenor } from '../../src/helpers';

describe('Pruebas en getGifs()', () => { 
    const category = 'eromanga sensei';

    test('Debe retornar 4 elementos', async () => { 
        const gifs = await getGifsTenor(category);
        expect(gifs.length).toBe(4);
        expect (gifs[0]).toEqual({
            id: expect.any(String),
            description: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            tags: expect.any(Array)
        });
    });

    test('Debe retornar 0 elementos', async () => { 
        const gifs = await getGifsTenor('');
        expect(gifs.length).toBe(0);
    });
});