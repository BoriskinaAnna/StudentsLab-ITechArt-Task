import React, {Component} from 'react';
import Lab from '../lab';
import './labsListStyle.scss';
import {Link} from 'react-router-dom';
import labService from "../services/labService";

let labs;
class LabList extends Component {

    constructor(){
        super();
        this.state = {
            isLabsLoaded: false
        }
    }

    render() {

        if(!this.state.isLabsLoaded){
            console.log(9);
            labService.getLabsListFromServer()
                .then(data =>{
                    labs = data;
                    this.setState({
                        isLabsLoaded: true
                    })
                });
            return null;
        }
        else{
            const {showAddLab} = this.props;
            const labElements = labs.map((lab, index) =>
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
                <div className="labsContainer">
                    <div className="labsContainer__buttonAdd">
                        <button onClick={showAddLab} className="labsContainer__buttonContent">
                            +
                        </button>
                    </div>
                    {labElements}
                </div>
            )
        }

    }
}
export default LabList