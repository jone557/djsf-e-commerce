import * as api from '../../api'
import axios from 'axios'

export const updateOrder = () => async (dispatch) =>{
   
    try {
        const {data} = await api.fetchProducts()
        dispatch({type:'FETCH_ALL',payload:data}) 
   
    } catch (error) {
        console.log(error.message)
    }
}
export const createOrder = (order) => async (dispatch) =>{
    try {
        const {data} = await api.addOrder(order)
    } catch (error) {
        console.log(error)
    }
}
