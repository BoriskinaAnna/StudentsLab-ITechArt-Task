import React, {Component} from 'react';
import Lab from '../lab';
import './labsListStyle.scss';
import {Link} from 'react-router-dom';


class LabList extends Component {

    render() {
        const {labs, showAddLab} = this.props;
        console.log(11111111);
        console.log(labs);
        const labElements = labs.map((lab, index) =>
            <Link to="/schedule" key = {index} className="lab-list__lab">
                <Lab lab={lab}/>
            </Link>
        );
        console.log(12222221);
        console.log(labElements);

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
export default LabList