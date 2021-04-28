import React, { useState, useEffect } from 'react'

const Store = (props) => {
    const[store, setStore] = useState([])
    const [review, setReview] = useState ([])
    

    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>
            This is the singular store index
        </div>
    )
}

export default Store
