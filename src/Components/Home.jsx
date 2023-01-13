import boardgame from '../boardgame.jpeg'

const Home = () => {
    return(
        <section>
        <h2>Pick a category to begin!</h2>
        <img className="homeImg" src={boardgame} alt="Stack of boardgames"></img>
        </section>
    )
}

export default Home