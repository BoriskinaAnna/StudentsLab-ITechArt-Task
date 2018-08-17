import React, {Component} from 'react';
import labService from './labService';
import LabsList from '../components/labsList';
//import labs from '../information-aboute-labs.json';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Authentication from '../components/authentication';
import AddLabForm from '../components/addLabForm';
import '../components/appStyle.scss';
import Schedule from '../components/schedule';
import schedule from '../schedule.json';
import ChangeLecture from '../components/changeLecture';
import AccountHeader from './accountHeader';
import Registration from '../components/registration'
import ErrorPage from '../components/errorPage'

export class App extends Component {

    constructor(){
        super();
        this.state ={
            isAddLabShowed: false,
            isChangeLectureShowed: false
        };

    }

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
        const labs = labService.getLabsListFromServer();
        console.log(labs);
        return (
            <Router>
                <div className="content">

                    <Route exact path="/" component={() => (<Header />)}/>
                    <Route exact path="/" component={() => (<LabsList labs={labs} showAddLab={this.showAddLab}/>)}/>
                    <Route exact path="/" component={() => (<Footer />)}/>

                    <Route exact path="/schedule" component={() => (<Header />)}/>
                    <Route exact path="/schedule" component={() => (<Schedule schedule={schedule} showChangeLecture={this.showChangeLecture}/>)}/>
                    <Route exact path="/schedule" component={() => (<Footer />)}/>

                    <Route exact path="/authentication" component={() => ( <AccountHeader />)}/>
                    <Route exact path="/authentication" component={() => ( <Authentication />)}/>
                    <Route exact path="/authentication" component={() => ( <Footer />)}/>

                    <Route exact path="/registration" component={() => ( <AccountHeader />)}/>
                    <Route exact path="/registration" component={() => ( <Registration />)}/>
                    <Route exact path="/registration" component={() => ( <Footer />)}/>

                    <AddLabForm isAddLabShowed={this.state.isAddLabShowed} closeAddLab={this.closeAddLab}/>
                    <ChangeLecture isAddLabShowed={this.state.isChangeLectureShowed} closeAddLab={this.closeChangeLecture}/>

                    <Route exact path="/error" component={() => ( <ErrorPage />)}/>
                </div>
            </Router>
        )
    }
}
export default App;