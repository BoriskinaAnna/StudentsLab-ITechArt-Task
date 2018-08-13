import React, {Component} from 'react';


class UserService extends Component{

    constructor (){
        super();
    }

     currentUser = {
        email: '',
        firstName: '',
        lastName: '',
        id: -1,
    };

     roleEnum = {
        Curator : 0,
        Lector : 1,
        Mentor : 2,
        Student: 3
    };

     initializeNewUser = (email, firstName, lastName, id, role) => {
        this.currentUser.id = id;
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        this.currentUser.email = email;

    };

    getUserInformationFromServer = setInterval(()=>{
        if(this.currentUser.id !== -1) {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const options = {
                method: 'GET',
                body: JSON.stringify({
                    id: this.currentUser.id
                }),
                headers: headers
            };

            fetch('/api/account/getUserById/'+this.currentUser.id, options)
                .then((response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }
                        response.json().then((data) => {
                            this.initializeNewUser(data.email, data.firstName, data.lastName, data.id, 'student');

                            console.log(this.currentUser);
                        });
                    }
                )
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                });
        }
    }, 30000)
}
export default UserService