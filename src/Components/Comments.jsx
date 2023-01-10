import { useEffect, useState } from "react"
import { getCommentsByReviewId } from "../api"

const Comments = (id) => {
    const [commentsList, setComments] = useState([])

    useEffect(()=>{
        getCommentsByReviewId(id.review_id)
        .then((comments)=>{
            setComments(comments)
        })
    }, [commentsList])

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
 
}


export default Comments