import axios from "axios"

const URL ='http://practice.mobile.kreosoft.ru/api'
export const getCategories = async (api_token) =>{
    try {
        const config ={
            headers:{
                'Content-type':'application/json',
                Authorization : `Bearer ${api_token}`
            }
        }
        const { data } = await axios.get(`${URL}/categories`, config)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getPriority = async (api_token) =>{
    try {
        const config ={
            headers:{
                Authorization : `Bearer ${api_token}`
            }
        }
        const { data } = await axios.get(`${URL}/priorities`, config)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createListings = async (
    api_token, 
    title, 
    description, 
    done, 
    deadline, 
    category_id, 
    priority_id
    ) =>{
        try {
            const config ={
                headers:{
                    Authorization : `Bearer ${api_token}`
                }
            }
            const { data } = await axios.post(`${URL}/tasks`,
            {title, description, done :0, deadline, category_id, priority_id}, config)
            console.log(data)
            return data;
        } catch (error) {
            console.log('error is coming from Posting the data', error)
        }

}