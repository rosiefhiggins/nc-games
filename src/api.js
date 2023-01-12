import axios from "axios";


const gamesApi=axios.create({
    baseURL: "https://rosie-nc-games.onrender.com"
});

export const getReviews = (categoryQuery) => {
    return gamesApi.get("/api/reviews").then((res)=>{
        if(categoryQuery===null){
            return res.data.reviews
        } else{
            return res.data.reviews.filter(review => review.category===categoryQuery)
        }
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

export const patchVotesById = (review_id, increment) => {
    return gamesApi.patch(`/api/reviews/${review_id}`, {inc_votes: increment}).then((res)=>{
        console.log(res.data)
    })
}

export const postComment = (review_id, comment) => {
    return gamesApi.post(`/api/reviews/${review_id}/comments`, {username: 'weegembump', body: comment}).then((res)=>{
        return res.data.review_comments
    })
}

export const getCategories = () => {
    return gamesApi.get("/api/categories").then((res)=>{
        return res.data.categories
    })
}


