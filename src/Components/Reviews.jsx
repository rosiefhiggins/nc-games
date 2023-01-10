import { getReviews } from "../api"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Reviews = () => {
    const [reviewList, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getReviews()
        .then((reviews)=>{
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [reviewList])

    if(isLoading) {
        return <p className="Loading">Loading...</p>
    }

    return (
        <div>
            <h2> All Reviews </h2>
            <div className="reviews">
            <ol>
                {reviewList.map((review)=>{
                    return (
                        <li className="review" key={review.review_id}>
                            <h3> {review.title} </h3>
                            <p> Written by: {review.owner}</p>
                            <img src={review.review_img_url} alt={`${review.title}`}></img>
                            <br></br>
                            <nav>
                                <Link to={`/api/reviews/${review.review_id}`}><button>See Review</button></Link>
                            </nav>
                        </li>
                    )

                })}
            </ol>
            </div>
        </div>
    )
}

export default Reviews