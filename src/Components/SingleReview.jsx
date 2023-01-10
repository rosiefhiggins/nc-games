import { useState, useEffect } from "react"
import { getReviewById } from "../api"
import { useParams } from "react-router-dom"
import Comments from "./Comments"
import Votes from "./Votes"

const SingleReview = () => {
    const [reviewBody, setReviewBody] = useState([])
    const { review_id }= useParams()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        setIsLoading(true)
        getReviewById(review_id)
        .then((review)=>{
            setReviewBody(review)
            setIsLoading(false)
        })
    }, [review_id])

    if(isLoading){
        return <p className="Loading">Loading review... </p>
    }

    return (
        <div className="singleReview">
            <h3> {reviewBody.title}</h3>
            <p> {reviewBody.review_body}</p>
            <div className="info">
            <p> Written by : {reviewBody.owner} </p>
            <p> Date: {reviewBody.created_at} </p>
            <Votes votes={reviewBody.votes} review_id={reviewBody.review_id}/> 
            </div>
            <br></br>
            <Comments review_id={review_id}/>
        </div>
    )
}

export default SingleReview

