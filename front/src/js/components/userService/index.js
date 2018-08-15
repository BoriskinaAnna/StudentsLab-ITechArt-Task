let currentUser = {
    email: '',
    firstName: '',
    lastName: '',
    id: null,
    role: '',
};

class UserService{

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
             3000
         );
     };

     getCurrentUser = () =>{
         if (this.currentUserInfoTimeout){
             this.getInfoAboutCurrentUser();
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

     getOptions = (method) =>{
         return {
             method: method,
             headers: {
                 'Content-Type': 'application/json'
             }
         };
     } ;

     logout = () =>{
         this.initializeNewUser('', '', '', null, '');

         fetch('/api/account/Logout/', this.getOptions('POST'))
             .catch((error) => {
                 console.log(error);
             })
     };

    getInfoAboutCurrentUser = () =>{
        if(currentUser.id !== null) {
            fetch('/api/account/getInfoAboutCurrentUser/'+currentUser.id, this.getOptions('GET'))
                .then((response) => {
                    switch (response.status) {
                        case 401:
                            window.location.pathname =  '/authentication';
                            break;
                        case 500:
                            window.location.pathname =  '/error';
                            break;
                        case 200:
                            response.json().then((data) => {
                                this.initializeNewUser(data.email, data.firstName, data.lastName, data.id, data.role);
                            });
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
}

const userService = new UserService();

export default userService