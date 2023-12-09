import axios from "axios"
export const getProducts =async ()=>{
    let prds  =   await axios.get('https://fakestoreapi.com/products')
    return prds.data
}