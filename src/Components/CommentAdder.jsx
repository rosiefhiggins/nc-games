import { postComment } from "../api";
import { useState } from "react";


const CommentAdder = ({commentsList}) => {
    const [newComment, setNewComment] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(newComment).then((newComment)=>{
            commentsList((currComments)=>{
                return [newComment, ...currComments]
            })
        })
    }
    

    return (
        <form classsName="CommentAdder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Add a comment</label>
        <textarea id="new-comment" value={newComment} 
        onChange={(e)=> setNewComment(e.target.value)} />
        <button>Add Comment</button> 
        </form>
    )
}


export default CommentAdder