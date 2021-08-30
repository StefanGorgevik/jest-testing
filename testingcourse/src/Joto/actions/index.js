import axios from 'axios';

export const getSecretWord  = () => {
    //write actual action in Redux
    return axios.get('http://localhost3030')
    .then(res => res.data)
}