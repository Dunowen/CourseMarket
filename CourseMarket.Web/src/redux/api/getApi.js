import axios from 'axios';
import AuthService from '../../utils/AuthService';

require('es6-object-assign').polyfill();
require('es6-promise').polyfill();

class getApi {

    getData(url) {
        const headers = { 'Authorization': `Bearer ${AuthService.getToken()}` }
        
        return axios.get(url, { headers }).then(response => {
            return response;
        }).catch((error) => {
            console.log("Error while processing getApi call", error);
        });
    };
}

export default getApi;