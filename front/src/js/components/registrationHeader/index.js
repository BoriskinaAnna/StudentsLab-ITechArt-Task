import React, {Component} from 'react';
import './registrationHeaderStyle.scss';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {

        return (
            <header>
                <Link to="/" className="registrationLogo"><img className="registrationLogo__img" src="img/logo.svg" alt="ITechArtLogo"/></Link>
            </header>
        )
    }
}
export default Header