import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl)
}

const createPerson = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (person) => {
    console.log('person', person.id)
    return axios.delete(`${baseUrl}/${person.id}`)
}

export default {
    getAll: getAll,
    createPerson: createPerson,
    deletePerson: deletePerson
}