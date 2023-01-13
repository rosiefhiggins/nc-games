import { useEffect, useState } from "react"
import { getCommentsByReviewId, deleteCommentById } from "../api"
import CommentAdder from "./CommentAdder"

const Comments = ({review_id}) => {
    const [commentsList, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setError]=useState(null)
    const [commentId, setCommentId]=useState(null)
    
    useEffect(()=>{
        setIsLoading(true)
        getCommentsByReviewId(review_id)
        .then((comments)=>{
            setComments(comments)
            setIsLoading(false)
        })
    }, [review_id])

    if(isLoading){
        return <p className="Loading">Loading comments... </p>
    }
    const deleteComment = (comment) => {
        setCommentId(comment.comment_id)
        const commentObj={...comment}
        const commentsArr=[...commentsList]
        for(let i=0; i<commentsArr.length; i++){
            if(commentsArr[i].comment_id===comment.comment_id){
                commentsArr[i].body="Deleted"
            }
        }
        setComments(commentsArr)
        deleteCommentById(comment.comment_id)
        .catch((err)=>{
            for(let i=0; i<commentsArr.length; i++){
                if(commentsArr[i].comment_id===commentObj.comment_id){
                    commentsArr[i].body=commentObj.body
                }
            }
            setComments(commentsArr)
            setError(err)
        })
    }
    

    if(commentsList.length!==0){
        return (
            <div>
                <h3> All Comments </h3>
                <div className="comments">
                <CommentAdder setComments={setComments} review_id={review_id}/>
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
                                {comment.author==="weegembump" ? <button onClick={()=> deleteComment(comment)}> Delete Comment </button>: <p></p>}
                                {err && comment.comment_id===commentId? <p> Unable to delete comment!</p> : <p></p>}
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
                <CommentAdder setComments={setComments} review_id={review_id}/>
            </div>
        )
    }
 
}


export default Comments