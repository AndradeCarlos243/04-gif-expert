import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en AddCategory', () => {
    const category = 'eromanga sensei';
    const handleAddCategory = jest.fn();

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<AddCategory handleAddCategory={() => {}} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {
        render(<AddCategory handleAddCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: category } });
        expect(input.value).toBe(category);
    });

    test('No debe postear la información con submit', () => {
        render(<AddCategory handleAddCategory={ handleAddCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);
        expect(handleAddCategory).not.toHaveBeenCalled();
    });

    test('Debe llamar el handleAddCategory y limpiar la caja de texto', () => {
        render(<AddCategory handleAddCategory={ handleAddCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        expect(handleAddCategory).toHaveBeenCalledTimes(1);
        expect(handleAddCategory).toHaveBeenCalledWith( category );
        expect(input.value).toBe('');
    });
});