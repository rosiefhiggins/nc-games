import { getReviews, getReviewsByCategory } from "../api"
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"


const Reviews = () => {
    const [reviewList, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery= searchParams.get('category')
    

    useEffect(()=>{
        setIsLoading(true)
        if(sortByQuery===null){
            getReviews()
            .then((reviews)=>{
                setReviews(reviews)
                setIsLoading(false)
            })
        } else{
            getReviewsByCategory(sortByQuery)
            .then((reviews)=>{
                setReviews(reviews)
                setIsLoading(false)
            })
        }
    }, [sortByQuery])

    if(isLoading) {
        return <p className="Loading">Loading...</p>
    }

    return (
        <div>
            <h2> All {sortByQuery} reviews </h2>
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