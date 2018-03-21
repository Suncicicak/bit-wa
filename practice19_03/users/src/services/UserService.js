import User from '../entities/User'

class UserService {
    fetchUsers(){
        return fetch('https://randomuser.me/api/?results=15')
        .then ((response) => {
            return response.json();
        })
        .then ((result) => {  
            const userList = result.results
            return userList
        })
        .then ((usersFromApi) => {
            return usersFromApi.map((users) => {  
                return new User(users);
            })
        })
    }
}

export const userService = new UserService();