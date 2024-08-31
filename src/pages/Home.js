import getData from "../utils/getData"
// const characters = await getData(2);
// console.log(characters)

const Home = async () => {

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

export default Home