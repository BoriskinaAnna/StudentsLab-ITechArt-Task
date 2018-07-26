import React, {Component} from 'react';
import LabsList from 'js/components/labsList';
import labs from 'js/information-aboute-labs.json';
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'js/components/header';
import Footer from 'js/components/footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Authorization from 'js/components/authorization';
import AddLabForm from 'js/components/addLabForm';
import 'js/components/appStyle.scss';
import Schedule from 'js/components/schedule';
import schedule from 'js/schedule.json';
import ChangeLecture from 'js/components/changeLecture';


export class App extends Component {

    constructor(){
        super();
        this.state ={
            isLoginShowed: false,
            isAddLabShowed: false,
            isChangeLectureShowed: false
        };
    }

    showLogin = () =>{
        this.setState({ isLoginShowed: true });
        document.body.classList.add('modal-open');
    };

    closeLogin = () =>{
        this.setState({ isLoginShowed: false });
        document.body.classList.remove('modal-open');
    };

    showAddLab = () =>{
        this.setState({ isAddLabShowed: true });
        document.body.classList.add('modal-open');
    };

    closeAddLab = () =>{
        this.setState({ isAddLabShowed: false });
        document.body.classList.remove('modal-open');
    };

    showChangeLecture = () =>{
        this.setState({ isChangeLectureShowed: true });
        document.body.classList.add('modal-open');
    };
    closeChangeLecture = () =>{
        this.setState({ isChangeLectureShowed: false });
        document.body.classList.remove('modal-open');
    };

    render() {

        return (
            <Router>
                <div className="content">
                    <Header showLogin={this.showLogin}/>
                    <Authorization isLoginShowed={this.state.isLoginShowed} closeLogin={this.closeLogin}/>
                    <AddLabForm isAddLabShowed={this.state.isAddLabShowed} closeAddLab={this.closeAddLab}/>
                    <ChangeLecture isAddLabShowed={this.state.isChangeLectureShowed} closeAddLab={this.closeChangeLecture}/>
                    <Route exact path="/" component={() => (<LabsList labs={labs} showAddLab={this.showAddLab}/>)}/>
                    <Route exact path="/schedule" component={() => (<Schedule schedule={schedule} showChangeLecture={this.showChangeLecture}/>)}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default App;