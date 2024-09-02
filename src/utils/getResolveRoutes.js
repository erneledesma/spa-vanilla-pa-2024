
const resolveRoutes = (route) => {
    if( route.lenght <=3 ) { // Si la ruta es menor o igual a 3
        let validRoute = route === '/' ? route : '/:id'; // Si la ruta es igual a / 
        //entonces la ruta es igual a la ruta, de lo contrario la ruta es igual a /:id
        return validRoute; // Devuelve la ruta válida
    }

    return `/${route}`;

};

export default resolveRoutes;