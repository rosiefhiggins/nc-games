import axios from "axios";


const gamesApi=axios.create({
    baseURL: "https://rosie-nc-games.onrender.com"
});

export const getReviews = (categoryQuery, sortBy, order) => {
    return gamesApi.get("/api/reviews").then((res)=>{
        const reviewArr=[...res.data.reviews]
        const sortByFunction=(reviewA,reviewB) => {
            if(reviewA[sortBy]<reviewB[sortBy]){
                return 1
            }else if(reviewA[sortBy]>reviewB[sortBy]){
                return -1
            }else{
                return 0
            }
        }
        reviewArr.sort(sortByFunction)
        if(order==='asc'){
            reviewArr.reverse()
        }
        if(categoryQuery===null){
            return reviewArr
        } else{
            return reviewArr.filter(review => review.category===categoryQuery)
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


