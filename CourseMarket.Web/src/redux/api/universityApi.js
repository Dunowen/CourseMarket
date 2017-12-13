import getApi from "./getApi";
// import postApi from "./postApi";

class UniversityApi {
    constructor(dispatch){
        this.url = "/api/universities";

        this.getApi = new getApi();
        // this.postApi = new postApi(dispatch);
    }

    getActionType() { 
        return new Promise((resolve, reject) => { 
            this.getApi.getData(this.url).then(responseData => {
                resolve(responseData);
            }).catch(error => {
                console.log("Some error happened while getting universities from the backend: ", error)
            });
        });
    }
}

export default UniversityApi;