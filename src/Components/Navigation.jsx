import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getCategories } from "../api"


const Navigation = () => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(()=>{
        getCategories()
        .then((categories)=>{
            setCategoryList(categories)
        })
    }, [])

    return (
        <nav>
            <Link to="/api/reviews"> All </Link>
            {categoryList.map((category)=>{
                return (
                    <Link to={`/api/reviews?category=${category.slug}`}> |  {category.slug}  </Link>
                )
            })}
        </nav>
    )
}

export default Navigation

