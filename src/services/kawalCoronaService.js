import Axios from "axios";
import url from "./DisableCorsURL";

const apiEndPoint = url+'https://api.kawalcorona.com/';

const getIndonesiaCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + 'indonesia/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })

    return response.data[0]
}

const getIndonesiaProvincesCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + 'indonesia/provinsi/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })
    
    return response.data
}


const kawalCoronaService = {
    getIndonesiaCoronaData,
    getIndonesiaProvincesCoronaData
}
export default kawalCoronaService;