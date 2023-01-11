import axios from "axios";

const gamesApi=axios.create({
    baseURL: "https://rosie-nc-games.onrender.com"
});

export const getReviews = () => {
    return gamesApi.get("/api/reviews").then((res)=>{
        return res.data.reviews
    })
}

export const getReviewById = (review_id) => {
    return gamesApi.get(`/api/reviews/${review_id}`).then((res)=>{
        return res.data.review
    })
}

export const getCommentsByReviewId  = (review_id) => {
    return gamesApi.get(`/api/reviews/${review_id}/comments`).then((res)=>{
        return res.data.review_comments
    })
}


export const postComment = (review_id, comment) => {
    return gamesApi.post(`/api/reviews/${review_id}/comments`, {username: 'Mallionaire', body: comment}).then((res)=>{
        console.log(res.data)
        return res.data
    })
}