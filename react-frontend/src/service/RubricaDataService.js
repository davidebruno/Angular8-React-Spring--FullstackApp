import axios from 'axios'

const BASE_URL = 'http://localhost:8080/springboot-crud-rest/api/v1';

class RubricaDataService {

    retrieveAllRubrica(name) {
        //console.log('executed service')
        return axios.get(`${BASE_URL}/${name}`);
    }

    retrieveRubrica(name, id) {
        //console.log('executed service')
        return axios.get(`${BASE_URL}/${name}/${id}`);
    }

    deleteRubrica(name, id) {
        //console.log('executed service')
        return axios.delete(`${BASE_URL}/${name}/${id}`);
    }

    updateRubrica(name, id, record) {
        //console.log('executed service')
        return axios.put(`${BASE_URL}/${name}/${id}`, record);
    }

    createRubrica(name, record) {
        //console.log('executed service')
        return axios.post(`${BASE_URL}/${name}/`, record);
    }
}

export default new RubricaDataService()