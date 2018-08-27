import redirectAwareFetch from './redirectAwareFetch';

let currentUser = {
    email: '',
    firstName: '',
    lastName: '',
    id: null,
    role: '',
};

class UserService {

     currentUserInfoTimeout = true;
     isDataLoaded = false;


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

     async getCurrentUser(){
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
                 "Accept": "application/json"
             }
         };
     };

     logout = () =>{
         this.initializeNewUser('', '', '', null, '');

         fetch('/api/account/Logout/', this.getOptions('POST'))
             .catch((error) => {
                 console.log(error);
             })
     };

    getInfoAboutCurrentUser = () =>{
        return redirectAwareFetch(`/api/account/getInfoAboutCurrentUser`, this.getOptions('GET'))
            .then(result =>{
                userService.initializeNewUser(
                    result.data.email,
                    result.data.firstName,
                    result.data.lastName,
                    result.data.id,
                    result.data.role
                );
                this.isDataLoaded = true;
            });
        }
}

const userService = new UserService();

export default userService