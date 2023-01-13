import { useEffect, useState } from "react"
import { getCommentsByReviewId, deleteCommentById } from "../api"
import CommentAdder from "./CommentAdder"

const Comments = ({review_id}) => {
    const [commentsList, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setError]=useState(null)
    
    useEffect(()=>{
        setIsLoading(true)
        getCommentsByReviewId(review_id)
        .then((comments)=>{
            setComments(comments)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return <p className="Loading">Loading comments... </p>
    }
    const deleteComment = (comment) => {
        const firstComment=commentsList[0]
        if(comment.author==="weegembump"){
            const opRenderComm = {
                "comment_id": comment.comment_id,
                "body": "Deleted",
                "author": "weegembump",
                "created_at": "Just Now",
                "votes": comment.votes
            }
            setComments((currComments)=>{
                return [opRenderComm, ...currComments.slice(1)]
            })
            deleteCommentById(comment.comment_id)
            .catch((err)=>{
                setComments((currComments)=>{
                    return [firstComment, ...currComments.slice(1)]
                })
                setError(err)
            })
        }
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
                                <button onClick={()=> deleteComment(comment)}> Delete Comment </button>
                                
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