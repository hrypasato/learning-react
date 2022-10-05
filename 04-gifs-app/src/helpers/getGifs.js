const API_KEY = 'MPuiem63es7jxHyL6UuZ3c8aG8OhJ6VW';
const API_SEARCH = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async(category ) =>{

    const url = `${API_SEARCH}?api_key=${API_KEY}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( ({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url
    }));

    return gifs;
}