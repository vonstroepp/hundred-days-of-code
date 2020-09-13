import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

const createPerson = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => {
        return response.data
    })
}

const updatePerson = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(response => {
        return response.data
    })
}

const deletePerson = (person) => {
    const request = axios.delete(`${baseUrl}/${person.id}`)
    return request.then(response => {
        return response.data
    })
}

export default { getAll, createPerson, updatePerson, deletePerson}