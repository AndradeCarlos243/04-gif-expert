import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en GifItem', () => { 
    const title = 'eromanga-sesei';
    const description = 'eromanga sensei';
    const url = 'https://tenor.com/es-419/view/anime-sagiri-eromanga-sensei-licking-lips-gif-15568420';

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<GifItem title={title} description={description} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el title y el description', () => { 
        render(<GifItem title={title} description={description} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(description);
    })

    test('Debe mostrar el title y el description', () => { 
        render(<GifItem title={title} description={description} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})