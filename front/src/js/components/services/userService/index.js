import redirectAwareFetch from './redirectAwareFetch';

let currentUser = {
    email: '',
    firstName: '',
    lastName: '',
    id: undefined,
    role: '',
};

class UserService {

     currentUserInfoTimeout = true;

     initializeNewUser = (email, firstName, lastName, id, role) => {
         currentUser.id = id;
         currentUser.firstName = firstName;
         currentUser.lastName = lastName;
         currentUser.email = email;
         currentUser.role = role;
         this.setTimeout();
    };

     setTimeout =() =>{
         this.currentUserInfoTimeout = false;
         setTimeout(
             ()=>{this.currentUserInfoTimeout = true},
             15000
         );
     };

     async getCurrentUserInfo(){
         if (this.currentUserInfoTimeout){
             await this.getInfoAboutCurrentUser();
             this.setTimeout();
         }

         return {
             email: currentUser.email,
             firstName: currentUser.firstName,
             lastName: currentUser.lastName,
             id: currentUser.id,
             role: currentUser.role
         }
     }

     getOptions = (method) =>{
         return {
             method: method,
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             }
         };
     };

     logout = () =>{
         this.initializeNewUser('', '', '', undefined, '');

         fetch('/api/account/Logout/', this.getOptions('POST'))
             .catch((error) => {
                 console.log(error);
             })
     };

    getInfoAboutCurrentUser = () =>{
        return redirectAwareFetch('/api/account/currentUser', this.getOptions('GET'))
            .then(result =>{
                if(result !== undefined){
                    userService.initializeNewUser(
                        result.data.email,
                        result.data.firstName,
                        result.data.lastName,
                        result.data.id,
                        result.data.role
                    );
                }
            });
        }
}

const userService = new UserService();

export default userService