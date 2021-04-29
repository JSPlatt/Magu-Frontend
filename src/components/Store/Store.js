import React, { useState, useEffect } from 'react'

const Store = (props) => {
    const[store, setStore] = useState([])
    const [reviews, setReviews] = useState ([])
    
    useEffect(() => {
            const id = props.match.params.store_id
            // const slug = props.match.params.slug
        const url = `http://localhost:3001/reviews/`

        fetch(url)
            .then(res => res.json())
            .then (reviewArray => {
                setReviews(reviewArray)
            })
    }, [])

   
// NEED TO GET THIS TO WORK!!!!!!!!
    return (
        <div>
            This is the singular store index
        </div>
    )
}

export default Store
