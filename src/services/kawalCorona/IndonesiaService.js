import Axios from "axios";
import url from "../DisableCorsURL";

const apiEndPoint = url+'https://api.kawalcorona.com/indonesia/';

const getIndonesiaCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + '', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })

    return response.data[0]
}

const getIndonesiaProvincesCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + 'provinsi/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })
    
    return response.data
}


const kawalCoronaIndonesiaService = {
    getIndonesiaCoronaData,
    getIndonesiaProvincesCoronaData
}
export default kawalCoronaIndonesiaService;