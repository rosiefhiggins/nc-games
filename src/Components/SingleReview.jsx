import { useState, useEffect } from "react"
import { getReviewById } from "../api"


const SingleReview = (id) => {
    const [reviewBody, setReviewBody] = useState([])

    
    useEffect(()=>{
        getReviewById(id.review_id)
        .then((review)=>{
            setReviewBody(review)
        })
    }, [])
    
    return (
        <div>
            <h3> {reviewBody.title}</h3>
            <p> {reviewBody.review_body}</p>
            <p> Written by : {reviewBody.owner} </p>
            <p> Date: {reviewBody.created_at} </p>
        </div>
    )
}

export default SingleReview