import React, {Component} from 'react';
import Lab from '../lab';
import './labsListStyle.scss';
import {Link, Route} from 'react-router-dom';
import labService from "../services/labService";
import Footer from "../footer";


class LabList extends Component {

    labs = [];

    constructor(){
        super();
        this.state = {
            isLabsLoaded: false
        }
    }

    render() {
        if(!this.state.isLabsLoaded){
            labService.getLabsList()
                .then(data =>{
                    this.labs = data;
                    this.setState({
                        isLabsLoaded: true
                    })
                });
            return null;
        }
        else{
            const {showAddLab} = this.props;
            const labElements =  this.labs.map((lab, index) =>
                <Link
                    to={{
                        pathname:'/schedule',
                        state: { labId : lab.id}
                    }}
                    key = {index}
                    className="lab-list__lab"
                >
                    <Lab lab={lab}/>
                </Link>
            );

            return (
                <React.Fragment>
                    <div className="labsContainer">
                        <div className="labsContainer__buttonAdd">
                            <button onClick={showAddLab} className="labsContainer__buttonContent">
                                +
                            </button>
                        </div>
                        {labElements}
                    </div>

                    <Route exact path="/" component={() => (<Footer/>)}/>
                </React.Fragment>
            )
        }
    }
}
export default LabList