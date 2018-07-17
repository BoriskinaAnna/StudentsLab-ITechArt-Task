import React, {Component} from 'react';
import LabsList from 'js/components/labsList/labsList';
import labs from 'js/information-aboute-labs.json';
import { translate } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'js/components/header/header';
import Footer from 'js/components/footer/footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import authorization from 'js/components/authorization/authorization';
import 'js/components/appStyle.scss';


export class App extends Component {

    render() {

        return(
            <Router>
                <div className="content">
                    <Header/>
                    <Route exact path="/" component={() => (<LabsList labs={labs} />)}/>
                    <Route path="/authorization" component={authorization}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default translate('translations')(App);