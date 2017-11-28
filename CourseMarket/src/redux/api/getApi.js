import axios from 'axios';

require('es6-object-assign').polyfill();
require('es6-promise').polyfill();

class getApi {

    getData(url) {
        return axios(url).then(response => {
            return response;
        }).catch(function (error) {
            console.log("Error while processing getApi call");
        });
    };
}

export default getApi;