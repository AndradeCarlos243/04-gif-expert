import { useState, useEffect } from 'react';
import { getGifsTenor } from '../helpers';

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleGetGifs = async() => {
        const gifs = await getGifsTenor(category);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect(() => { handleGetGifs(); });
    return {
        images,
        isLoading
    }
}
