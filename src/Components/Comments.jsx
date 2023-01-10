import { useEffect, useState } from "react"
import { getCommentsByReviewId } from "../api"

const Comments = (id) => {
    const [commentsList, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getCommentsByReviewId(id.review_id)
        .then((comments)=>{
            setComments(comments)
            setIsLoading(false)
        })
    }, [commentsList])

    if(isLoading){
        return <p className="Loading">Loading comments... </p>
    }

    if(commentsList.length!==0){
        return (
            <div>
                <h3> All Comments </h3>
                <div className="comments">
                <ol>
                    {commentsList.map((comment)=>{
                        return (
                            <li className="comment" key={comment.comment_id}>
                                <p> {comment.body} </p>
                                <div className="info">
                                <p> Written by: {comment.author}</p>
                                <p> Date: {comment.created_at}</p>
                                <p> Votes: {comment.votes}</p>
                                </div>
                            </li>
                        )

                    })}
                </ol>
                </div>
            </div>
        )
    } else{
        return(
            <div className="comments">
                <h3>There are no comments to display</h3>
                <div className="sadface">
                    <p>😢</p>
                </div>
            </div>
        )
    }
 
}


export default Comments