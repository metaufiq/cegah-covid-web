import Axios from "axios";
import BaseResponse from "./baseResponse";

const apiEndPoint = 'https://api.covid19api.com';

const getWorldCoronaData = async () => {
    try {
        let response = await Axios.get(apiEndPoint + '/summary', {
            headers: {
                // remove headers
            },
            withCredentials: false
        })
        return response.data
    } catch (error) {
        let response = BaseResponse;
        response.data = error.message
        response.status = 404

        return response
    }



}


const covid19Service = {
    getWorldCoronaData
}
export default covid19Service;