import axios from 'axios'

export const createReviews = (formData) => 
    async dispatch =>{
       // review,rating,user,product
    try {
        const res = axios.post('http://localhost:5000/api/v1/reviews',formData)
        console.log(res)
        dispatch({
            type:'CREATE_REVIEWS',payload:res.data
        })
    } catch (error) {
        console.log(error.message)
    }
}
