import axios from 'axios';

const baseUrl = '/api/persons';

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

const updatePerson = (id, updatedPerson) => {
    console.log('uodatedPerson', updatedPerson.number, id)
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
    return request.then(response => {
        console.log('response2', response.data)
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