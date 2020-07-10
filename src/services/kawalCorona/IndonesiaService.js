import Axios from "axios";
import url from "../DisableCorsURL";
import BaseResponse from "../baseResponse";

const apiEndPoint = url+'https://api.kawalcorona.com/indonesia/';

const getIndonesiaCoronaData = async () => {
    try {
        let response = await Axios.get(apiEndPoint + '', {
            headers: {
                // remove headers
            },
            withCredentials: false
        })
        return response.data[0]
    } catch (error) {
        let response = BaseResponse;
        response.data = error.message
        response.status = 404

        return response
    }
}

const getIndonesiaProvincesCoronaData = async () => {
    
    try {
        let response = await Axios.get(apiEndPoint + 'provinsi/', {
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


const kawalCoronaIndonesiaService = {
    getIndonesiaCoronaData,
    getIndonesiaProvincesCoronaData
}
export default kawalCoronaIndonesiaService;