const axios = require('axios');

module.exports = async function getAndCheckJsonFromURI(uri, key, value){

    return axios.get(uri).then(res => {

        let json = res.data;

        for (let attribute of json.attributes) {
            if(attribute['trait_type'] == key && attribute['value'] == value){
                return true;
            } 
        }
        return false;
    });
}