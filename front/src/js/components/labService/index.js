import redirectAwareFetch from "../userService/redirectAwareFetch";

let currentLab = {
    email: '',
    firstName: '',
    lastName: '',
    id: null,
    role: '',
};

class UserService{

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getLabsList = () =>{
        redirectAwareFetch(`/api/account/getInfoAboutCurrentUser/`, this.getOptions('GET'))
            .then(result =>{
                userService.initializeNewUser(
                    result.data.email,
                    result.data.firstName,
                    result.data.lastName,
                    result.data.id,
                    result.data.role
                );
            });

    }
}

const userService = new UserService();

export default userService