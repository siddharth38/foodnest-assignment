import pizza from "../apis/pizza"
import { ADDRESS_ERROR, ADD_ADDRESS, DELETE_ADDRESS, GET_ADDRESS, SELECET_ADDRESS} from "./types"
export const addAddress=(name,mobNo,pinCode,address,town,state,city,userId)=>async dispatch=>{
try {
    const {data}=await pizza.post('/api/users/address',{name,mobNo,pinCode,address,town,state,city,userId})
    dispatch({type:ADD_ADDRESS,payload:data})
} catch (error) {
    dispatch({type:ADDRESS_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
}
}
export const getAdress =(id)=>async dispatch =>{
    try{
        const {data} = await pizza.get(`/api/users/shipping/${id}`)
        // console.log(data)
        dispatch({type:GET_ADDRESS,payload:data})
    }
    catch(error){
      dispatch({type:ADDRESS_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
    }
    
 }

 export const deleteAddress=(id)=>async dispatch=>{
     try {
         const {data} =await pizza.delete(`/api/users/address/${id}`)
        //  console.log(data)
         dispatch({type:DELETE_ADDRESS,payload:data})
     } catch (error) {
        dispatch({type:ADDRESS_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
     }
 }

 export const  selectAddress=(address)=>async dispatch=>{
  dispatch({type:SELECET_ADDRESS,payload:address})
 }

