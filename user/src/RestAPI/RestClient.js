import  axios from 'axios';
class RestClient {
    static GetRequest(getUrl){
        axios.get(getUrl)
            .then(response=> {
                return response.data;
            })
            .catch(error=> {
                // return error;
                return null;
            });
    }
}
export default RestClient