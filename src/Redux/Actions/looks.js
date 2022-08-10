import * as api from '../../api'
import axios from 'axios'
export const getLooks = () => async (dispatch) =>{
   
    
    try {
        const {data} = await api.fetchLooks()
        dispatch({type:'FETCH_LOOKS',payload:data}) 
   
    } catch (error) {
        console.log(error.message)
    }
}

export const getLook = (id) => async (dispatch) =>{
      
    try {
        const {data} = await axios.get(`http://localhost:5000/api/v1/looks/${id}`)
        console.log(data)
        dispatch({type:'FETCH_LOOK',payload:data}) 
   
    } catch (error) {
        console.log(error.message)
    }
}