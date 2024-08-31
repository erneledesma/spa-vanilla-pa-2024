
const API = 'https://rickandmortyapi.com/api/character/'; // API URL de los personajes de Rick and Morty

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API; // Si se recibe un id se concatena a la URL API
    try {
        const response = await fetch(apiURL); // Se hace la petición a la API
        const data = await response.json(); // Se convierte la respuesta en JSON
        console.log('Data', data); // Se muestra la data en consola
        return data; // Se retorna la data
    } catch (error) {
        console.log('Fetch Error', error); // Si hay un error se muestra en consola
    }
}

export default getData; // Se exporta la función getData