import { getReviews} from "../api"
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"


const Reviews = () => {
    const [reviewList, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder]=useState('desc')
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryQuery= searchParams.get('category')

    useEffect(()=>{
        setIsLoading(true)
        getReviews(categoryQuery, sortBy, order)
        .then((reviews)=>{
            setReviews(reviews)
            setIsLoading(false)
            })
    }, [categoryQuery, sortBy, order])

    const setSortByOrder = (sort) => {
        setSortBy(sort)
        const newSortParams=new URLSearchParams(searchParams)
        newSortParams.set('sort_by', sort)
        setSearchParams(newSortParams)
    }

    const setOrderBy = (order_by) => {
        setOrder(order_by)
        const newOrderParams=new URLSearchParams(searchParams)
        newOrderParams.set('order', order_by)
        setSearchParams(newOrderParams)
    }

    if(isLoading) {
        return <p className="Loading">Loading...</p>
    }

    return (
        <div>
            <h2> All {categoryQuery} reviews </h2>
            <section value={sortBy} onChange={(e)=>setSortByOrder(e.target.value)}>
                <p>Sort By:</p>
                <select value={sortBy}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option>   
                    <option value="votes">Votes</option>
                </select>
                <button onClick={()=> setOrderBy('asc')}>Ascending</button>
                <button onClick={()=> setOrderBy('desc')}>Descending</button>
                <p>Sorted By: {sortBy}</p>
            </section>

            <div className="reviews">
            <ol>
                {reviewList.map((review)=>{
                    return (
                        <li className="review" key={review.review_id}>
                            <h3> {review.title} </h3>
                            <p> Written by: {review.owner}</p>
                            <img src={review.review_img_url} alt={`${review.title}`}></img>
                            <br></br>
                            <nav>
                                <Link to={`/api/reviews/${review.review_id}`}><button>See Review</button></Link>
                            </nav>
                        </li>
                    )

                })}
            </ol>
            </div>
        </div>
    )
}

export default Reviews