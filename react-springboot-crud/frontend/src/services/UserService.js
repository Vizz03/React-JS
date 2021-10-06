import axios from 'axios';

const User_API_BASE_URL = "http://localhost:8080/api/v1";

//const testUrl = "http://localhost:8080/api/v1"

class UserService {

    // tryUser(){
    //     return axios.get(testUrl + "/users")
    // }

    getUser(){
        return axios.get(User_API_BASE_URL + '/users');
    }

    createUser(User){
        return axios.post(User_API_BASE_URL + '/adduser',  User);
    }

    getUserById(UserId){
        return axios.get(User_API_BASE_URL + '/user/' + UserId);
    }

    updateUser(User, UserId){
        return axios.put(User_API_BASE_URL + '/updateuser',  UserId, User);
    }

    deleteUser(UserId){
        return axios.delete(User_API_BASE_URL + '/user/' + UserId);
    }
}

export default new UserService()