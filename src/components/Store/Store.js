import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Store = (props) => {
    const[store, setStore] = useState([])
    const [review, setReview] = useState ([])
    
    useEffect(() => {

            const slug = props.match.params.slug
            const url = `http://localhost:3001/stores/${slug}`
        fetch(url)
            .then(res => console.log(res))
            .then (res => console.log(res))

        
    }, [])

    //     axios.get(url)
    //         .then( resp => console.log(resp) )
    //         .catch( resp => console.log(resp) )
    // }, [])
// NEED TO GET THIS TO WORK!!!!!!!!
    return (
        <div>
            This is the singular store index
        </div>
    )
}

export default Store
