import { data } from './credentials.json';
const { giphy, tenor } = data;
export const getGifsGiphy = async (category) => {
    const apiKey = giphy.apiKey;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=3`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( ({id, title, images: {downsized_medium: {url}}}) => ({id, title, url}) );
    return gifs;
};

export const getGifsTenor = async (category) => {
    const apiKey = tenor.apiKey;
    const clientKey = 'Development';
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&client_key=${clientKey}&limit=4&locale=es&country=MX&contentfilter=low`;
    const resp = await fetch(url);
    if(!resp.ok) return [];
    const { results } = await resp.json();
    const gifs = results.map( ({id, content_description: description, title, media_formats: {mediumgif: {url}}, tags}) => ({id, description, title, url, tags}) );
    return gifs;
}