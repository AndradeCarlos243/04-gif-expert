import { useFetchGifs } from "../../src/hooks";
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en useFetchGifs', () => {
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('eromanga sensei'));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar el estado final', async() => {
        const { result } = renderHook(() => useFetchGifs('eromanga sensei'));
        await waitFor(
            () => {
                expect(result.current.images.length).toBe(4);
                expect(isLoading).toBeFalsy();
            }
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBe(4);
        expect(isLoading).toBeFalsy();
    });

});