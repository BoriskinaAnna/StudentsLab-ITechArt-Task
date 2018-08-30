import React, {Component} from 'react';
import LabsList from './labsList';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Authentication from './authentication';
import AddLabForm from './addLabForm';
import './appStyle.scss';
import Schedule from './schedule';
import ChangeLecture from './changeLecture';
import AccountHeader from './accountHeader';
import Registration from './registration'
import ErrorPage from './errorPage'
import Feedback from './feedback';
import Header from "./header";


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
           return (
               <Router>
                   <div className="content">

                       <Route exact path="/" component={() => (<Header/>)}/>
                       <Route exact path="/" component={() => (<LabsList showAddLab={this.showAddLab}/>)}/>

                       <Route exact path="/schedule" component={() => (
                           <Schedule showChangeLecture={this.showChangeLecture}/>)}/>

                       <Route exact path="/authentication" component={() => (<AccountHeader/>)}/>
                       <Route exact path="/authentication" component={() => (<Authentication/>)}/>
                       <Route exact path="/authentication" component={() => (<Footer/>)}/>

                       <Route exact path="/registration" component={() => (<AccountHeader/>)}/>
                       <Route exact path="/registration" component={() => (<Registration/>)}/>
                       <Route exact path="/registration" component={() => (<Footer/>)}/>

                       <Route exact path="/feedback" component={() => (<Feedback/>)}/>

                       <AddLabForm isAddLabShowed={this.state.isAddLabShowed} closeAddLab={this.closeAddLab}/>
                       <ChangeLecture isAddLabShowed={this.state.isChangeLectureShowed}
                                      closeAddLab={this.closeChangeLecture}/>

                       <Route exact path="/error" component={() => (<ErrorPage/>)}/>
                   </div>
               </Router>
           )
       }
}
export default App;