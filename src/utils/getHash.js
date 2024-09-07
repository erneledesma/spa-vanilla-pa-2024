const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


 export default getHash;

 /* TODO: 
 Esta función `getHash` tiene como objetivo extraer y procesar una parte específica del *hash* 
  generalmente se utilizan rutas basadas en el *hash* 
  (común en aplicaciones de una sola página o SPA).

Aquí te desgloso lo que hace cada parte de la función:

1. **`location.hash`**: Accede al *hash* de la URL actual. El *hash* 
es la parte de la URL que sigue a un `#`. Por ejemplo, si la URL es `http://example.com/#/ruta/otra`, 
`location.hash` devolverá `#/ruta/otra`.

2. **`.slice(1)`**: Remueve el símbolo `#` al principio del *hash*. 
Siguiendo el ejemplo anterior, `#/ruta/otra` se convierte en `/ruta/otra`.

3. **`.toLocaleLowerCase()`**: Convierte el *hash* a minúsculas, 
lo que ayuda a evitar problemas de sensibilidad a mayúsculas/minúsculas. 
Así, si el *hash* era `/RUTA/OTRA`, ahora sería `/ruta/otra`.

4. **`.split('/')`**: Divide la cadena en un arreglo usando `/` como delimitador. 
Por ejemplo, `/ruta/otra` se convertiría en `['', 'ruta', 'otra']`.

5. **`[1]`**: Accede al segundo elemento del arreglo resultante, 
que representa la primera sección significativa después de la barra 
inicial en el *hash*. Siguiendo el ejemplo, accedería a `'ruta'`.

6. **`|| '/'`**: Si el segundo elemento del arreglo es `undefined` o una 
cadena vacía (lo que sucedería si el *hash* no contiene nada después de la barra inicial), 
entonces la función devuelve `'/'`.

En resumen, la función devuelve la primera sección del *hash* en minúsculas, o
 `'/'` si no existe dicha sección.

### Ejemplo de uso
- Para la URL `http://example.com/#/home`, la función devolverá `'home'`.
- Para la URL `http://example.com/#/`, la función devolverá `'/'`.
- Para la URL `http://example.com/#`, la función también devolverá `'/'`.

Esta función es útil para manejar rutas en aplicaciones donde las 
rutas se definen en el *hash* de la URL.
*/
