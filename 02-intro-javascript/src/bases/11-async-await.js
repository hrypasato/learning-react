const apiKey = 'MPuiem63es7jxHyL6UuZ3c8aG8OhJ6VW';

const getImagen = async () => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getImagen()