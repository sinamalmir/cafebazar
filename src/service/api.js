import axios from "axios"

const BASE_URL = 'https://one-api.ir/cafebazaar/?token=300917:62ae4b0cace495.44292497&action=home'

const getData = async () => {
    const response = await axios.get(BASE_URL);
    return response.data
}

export {getData}