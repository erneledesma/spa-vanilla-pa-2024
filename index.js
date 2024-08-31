import getData from "./src/utils/getData.js"

console.log('Hola')

const character = await getData(1);
console.log('Nombre: ', character.name)
console.log('Especie: ', character.species)
console.log('Estado: ', character.status)
console.log('Origen: ', character.origin)
console.log('Genero: ', character.gender)
console.log('Ubicacion: ', character.location)
console.log('Link Imagen: ', character.image)


const index = async () => {
    const view = `
    <div class="Characters">
        <article class="Character-item">
            <a href="#/1/">
                <img src="image" alt="name">
                <h2>Name</h2>
            </a>
        </article>  
    </div>
    `
    return view
}

export default index