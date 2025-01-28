import axios from "axios";
import { API_KEY } from "../contants";

const baseURL = "https://exercisedb.p.rapidapi.com/"

const apiCall = async (url: string, params?: any) => {
    try{

        const options = {
            method: 'GET',
            url,
            params: params,
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
              }
        }
        const response = await axios.request(options)
        return response.data
    }catch(err) {
        console.log("API ERROR: ", err)
    }
}

export const fecthExercisesByBodyPart = async (bodyPart: string) => {
    let data = await apiCall(baseURL+`exercises/bodyPart/${bodyPart}`)
    return data
}