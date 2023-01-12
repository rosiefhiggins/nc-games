import { postComment } from "../api";
import { useState } from "react";


const CommentAdder = ({setComments, review_id}) => {
    const [newComment, setNewComment] = useState("")
    const [err, setError]=useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newComment.length!==0){
            const comment = {
            "comment_id": Date.now(),
            "body": newComment,
            "review_id": review_id,
            "author": "weegembump",
            "votes": 0,
            "created_at": "Just now",
        }
        setComments((currComments)=>{
            return [comment, ...currComments]
        })
        postComment(review_id, newComment).then(()=>{
            setNewComment("")
        })
        .catch((err)=>{
            setComments((currComments)=>{
                return currComments.slice(1)
            })
            setError(true)
        })
        }
    }

    if (err) {
        return <main><p>Error uploading comment!</p></main>
    }
    

    return (
        <form  onSubmit={handleSubmit}>
        <textarea id="new-comment" value={newComment} onChange={(e)=> setNewComment(e.target.value)}  required/>
        <button>Add Comment</button> 
        </form>
    )
}

export default CommentAdder