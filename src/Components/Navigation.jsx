import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <Link to="/api/reviews">All Reviews</Link>
            <span> | </span>
            <Link to="/api/reviews?category=deck-building">Deck Building</Link>
            <span> | </span>
            <Link to="/api/reviews?category=dexterity">Dexterity</Link>
            <span> | </span>
            <Link to="/api/reviews?category=engine-building">Engine Building</Link>
            <span> | </span>
            <Link to="/api/reviews?category=hidden-roles">Hidden Roles</Link>
            <span> | </span>
            <Link to="/api/reviews?category=push-your-luck">Push Your Luck</Link>
            <span> | </span>
            <Link to="/api/reviews?category=roll-and-write">Roll and Write</Link>
            <span> | </span>
            <Link to="/api/reviews?category=strategy">Strategy</Link>

        </nav>
    )
}

export default Navigation

