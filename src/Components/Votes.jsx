import { patchVotesById } from "../api"
import { useState } from "react"


const Votes = ({votes, review_id}) => {
    const [voteChange, setVoteChange] = useState(0)

    function incVote() {
        setVoteChange((currVoteChange)=> currVoteChange + 1)
        patchVotesById(review_id, 1)
    }

    function decVote() {
        setVoteChange((currVoteChange)=> currVoteChange - 1)
        patchVotesById(review_id, -1)
    }

    return (
        <section>
            <p> Votes: {votes + voteChange}</p>
            <button onClick={incVote}>👍</button>
            <button onClick={decVote}>👎</button>
        </section>
    )
}


export default Votes