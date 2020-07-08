import Axios from "axios";

const apiEndPoint = 'https://api.covid19api.com';

const getWorldCoronaData = async () => {
    let response = await Axios.get(apiEndPoint + '/summary', {
        headers: {
            // remove headers
        },
        withCredentials: false
    })

    return response.data
}


const covid19Service = {
    getWorldCoronaData
}
export default covid19Service;