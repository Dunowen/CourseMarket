import axios from 'axios';

require('es6-object-assign').polyfill();
require('es6-promise').polyfill();

class getApi {

    getData(url) {
        let id_token = localStorage.getItem('id_token');
        const headers = { 'Authorization': `Bearer ${id_token}` }

        return axios.get(url, { headers }).then(response => {
            return response;
        }).catch((error) => {
            console.log("Error while processing getApi call", error);
        });
    };
}

export default getApi;