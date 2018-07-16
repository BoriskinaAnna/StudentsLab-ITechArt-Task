import React, {Component} from 'react';
import LabsList from 'js/components/labsList/labsList';
import labs from 'js/information-aboute-labs.json';
import { translate } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'js/components/header/header';
import Footer from 'js/components/footer/footer';


export class App extends Component {

    render() {
        return(
            <div>
                <Header/>
                <LabsList labs={labs} />
                <Footer/>
            </div>
        )
    }
}
export default translate('translations')(App);