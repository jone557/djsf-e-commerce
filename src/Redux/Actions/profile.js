import * as api from '../../api/index.js';

export const updateUserAdd = (newAddress) => async (dispatch) =>{

    try {
      const res =await api.updateUserAddress(newAddress)
      const {updatedUser:{address,contactNumber}} = res.data
      
      dispatch({
        type:'ADD_ADDRESS',
        payload:{address,contactNumber}
      })
      
      
    } catch (error) {
     //// const err = error.response.data.errors
      console.log(error.message)
    }
  }