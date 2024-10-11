import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'eromanga sensei';
    const query = 'eromanga sensei';

    test('Debe hacer match con el snapshot', () => {
        // const { container } = render(<GifGrid category={ category } />);
        // expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el cargando', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category }  query={ query }/>);
        expect(screen.getByText( 'Cargando...' ));
        expect(screen.getByText( category ));
    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: category,
                url: 'https://localhost/cualquier/cosa.jpg',
                description : category
            }
        ];
    
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
    
        render(<GifGrid category={ category } query={ query }/>);
        expect(screen.queryByText( 'Cargando...' ));
        expect(screen.getAllByRole('img').length).toBe(1);
    });

});