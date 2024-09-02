
const getHash = () => location.hash.slice(1).toLocaleLowerCase() || '/';

export default getHash;

 // locations hash accede a la ubicación de la URL y devuelve la parte de la URL que sigue al símbolo #.
 //slice(1) elimina el primer carácter de la cadena, que es el símbolo #.
    // toLocaleLowerCase() convierte la cadena a minúsculas.
    // || '/' devuelve la cadena resultante o una barra diagonal si la cadena está vacía.