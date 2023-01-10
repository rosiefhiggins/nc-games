import { getReviews } from "../api"
import { useEffect, useState } from 'react'
import SingleReview from "./SingleReview"

const Reviews = () => {
    const [reviewList, setReviews] = useState([])
    const [review_id, setReviewId] = useState(null)
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

    if (review_id) {
        return <SingleReview review_id={review_id}/>
    }

    return (
        <div>
            <h2> All Reviews </h2>
            <div className="reviews">
            <ol>
                {reviewList.map((review)=>{
                    return (
                        <li className="review" key={review.review_id}>
                            <h3>{review.title}</h3>
                            <p> Written by: {review.owner}</p>
                            <img src={review.review_img_url} alt={`${review.title}`}></img>
                            <br></br>
                            <button onClick={() => setReviewId(review.review_id)}> See review </button>
                        </li>
                    )

                })}
            </ol>
            </div>
        </div>
    )
}

export default Reviews