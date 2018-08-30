import redirectAwareFetch from './redirectAwareFetch';
import errorAwareFetch from "./errorAwareFetch";

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

    async getCurrentUserInfo(fetchFunction){
         if (this.currentUserInfoTimeout){
             await this.getCurrentUserInfoFromServer(fetchFunction);
             this.setTimeout();
         }

         return {
             email: currentUser.email,
             firstName: currentUser.firstName,
             lastName: currentUser.lastName,
             id: currentUser.id,
             role: currentUser.role
         }
     };

     async getCurrentUserInfoForPublicPage(){
        return this.getCurrentUserInfo(errorAwareFetch);
     }

    async getCurrentUserInfoForPrivatePage(){
        return this.getCurrentUserInfo(redirectAwareFetch);
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

         redirectAwareFetch('/api/account/Logout/',this.getOptions('POST'));
     };

    getCurrentUserInfoFromServer = (fetchFunction) =>{
        return fetchFunction('/api/account/current-user', this.getOptions('GET'))
            .then(result =>{
                if(result.data !== undefined){
                    userService.initializeNewUser(
                        result.data.email,
                        result.data.firstName,
                        result.data.lastName,
                        result.data.id,
                        result.data.role
                    );
                }
            })
            .catch(error => console.log(error));
        }
}

const userService = new UserService();

export default userService