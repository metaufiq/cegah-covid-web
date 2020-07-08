import Axios from "axios";

const apiEndPoint = 'https://api.kawalcorona.com/';

const getWorldCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + '', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })

    return response.data
}

const getWorldCoronaDataTotal = async () => {
    let response = await Axios.get(apiEndPoint + 'positif/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })
    
    return response.data
}

const getWorldCoronaDataDeaths = async () => {
    let response = await Axios.get(apiEndPoint + 'meninggal/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })
    
    return response.data
}

const getWorldCoronaDataRecovered = async () => {
    let response = await Axios.get(apiEndPoint + 'sembuh/', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })
    
    return response.data
}


const kawalCoronaWorldService = {
getWorldCoronaData,
getWorldCoronaDataTotal,
getWorldCoronaDataDeaths,
getWorldCoronaDataRecovered
}
export default kawalCoronaWorldService;