import { patchVotesById } from "../api"
import { useState } from "react"


const Votes = ({votes, review_id}) => {
    const [voteChange, setVoteChange] = useState(0)
    const [err, setError] =useState(null)

    function incVote(increment) {
        setVoteChange((currVoteChange)=> currVoteChange + increment)
        patchVotesById(review_id, increment)
        .catch((err)=>{
            setVoteChange((currVoteChange)=> currVoteChange - increment)
            setError(true)
        })
    }
    

    return (
        <section>
            <p> Votes: {votes + voteChange}</p>
            <button onClick={()=>incVote(1)}>👍</button>
            <button onClick={()=>incVote(-1)}>👎</button>
            {err? <main><p>Unable to perform action</p></main>: null}
        </section>
    )
}


export default Votes