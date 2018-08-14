import React from 'react';


class UserService{



     static currentUser = {
         email: '',
         firstName: '',
         lastName: '',
         id: null,
         role: ''
    };

     roleEnum = {
        Curator : 0,
        Lector : 1,
        Mentor : 2,
        Student: 3
    };

     initializeNewUser = (email, firstName, lastName, id, role) => {
         this.constructor.currentUser.id = id;
         this.constructor.currentUser.firstName = firstName;
         this.constructor.currentUser.lastName = lastName;
         this.constructor.currentUser.email = email;
         this.constructor.currentUser.role = role;
    };

     logout = () =>{
         clearTimeout(this.getUserInformationFromServer);
         this.constructor.currentUser.id = null;
         this.constructor.currentUser.firstName = '';
         this.constructor.currentUser.lastName = '';
         this.constructor.currentUser.email = '';
         this.constructor.currentUser.role = '';
     };

     fetchRequest = () =>{
        if(this.constructor.currentUser.id !== null) {
            console.log(UserService.currentUser);
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            fetch('/api/account/getUserById/'+this.constructor.currentUser.id, options)
                .then((response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then((data) => {
                            this.initializeNewUser(data.email, data.firstName, data.lastName, data.id, data.role);
                        });
                    }
                )
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                })
        }
        setTimeout(this.fetchRequest, 10000);
    };

     getUserInformationFromServer = setTimeout (this.fetchRequest, 10000)
}
export default UserService