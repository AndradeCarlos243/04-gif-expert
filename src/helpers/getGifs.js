export const getGifsGiphy = async (category) => {
    const apiKey = 'AYvxuZUeweVOPnoM1q3DnZcHXRl5hRsc';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=3`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( ({id, title, images: {downsized_medium: {url}}}) => ({id, title, url}) );
    return gifs;
};

export const getGifsTenor = async (category) => {
    const apiKey = 'AIzaSyAttujC7CrBsu5jUeTMm4P5qoEiMLGaDt8';
    const clientKey = 'Development';
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&client_key=${clientKey}&limit=4`;
    const resp = await fetch(url);
    const { results } = await resp.json();
    const gifs = results.map( ({id, content_description: title, media_formats: {mediumgif: {url}}, tags}) => ({id, title, url, tags}) );
    return gifs;
}