

export const getGif = async (category) => {
    const apiToken = "lJaWXVyFjxKS9SNZ4zX9F46Z9eZqsDGc"
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=${apiToken}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}