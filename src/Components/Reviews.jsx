import { getReviews } from "../api"
import { useEffect, useState } from 'react'

const Reviews = () => {
    const [reviewList, setReviews] = useState([])

    useEffect(()=>{
        getReviews()
        .then((reviews)=>{
            setReviews(reviews)
        })
    }, [reviewList])
    return (
        <div>
            <h2> All Reviews </h2>
            <div className="reviews">
            <ol>
                {reviewList.map((review)=>{
                    return (
                        <li className="review" key={review.review_id}>
                            <h3>{review.title}</h3>
                            <br></br>
                            <img src={review.review_img_url} alt={`${review.title}`}></img>
                            <br></br>
                            <button> See review </button>
                        </li>
                    )

                })}
            </ol>
            </div>
        </div>
    )
}

export default Reviews