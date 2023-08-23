import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(request => request.data)
}

const postData = person => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const deleteData = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

const updateData = (id, updatePerson) => {
    const request = axios.put(`${baseUrl}/${id}`, updatePerson)
    return request.then(response => response.data)
}

export default {getData, postData, deleteData, updateData};