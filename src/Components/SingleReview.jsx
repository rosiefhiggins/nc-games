import { useState, useEffect } from "react"
import { getReviewById } from "../api"
import { useParams } from "react-router-dom"
import Comments from "./Comments"

const SingleReview = () => {
    const [reviewBody, setReviewBody] = useState([])
    const { review_id }= useParams()


    useEffect(()=>{
        getReviewById(review_id)
        .then((review)=>{
            setReviewBody(review)
        })
    }, [review_id])

    return (
        <div className="singleReview">
            <h3> {reviewBody.title}</h3>
            <p> {reviewBody.review_body}</p>
            <div className="info">
            <p> Written by : {reviewBody.owner} </p>
            <p> Date: {reviewBody.created_at} </p>
            <p> Votes: {reviewBody.votes}</p>
            </div>
            <br></br>
            <Comments review_id={review_id}/>
        </div>
    )
}

export default SingleReview