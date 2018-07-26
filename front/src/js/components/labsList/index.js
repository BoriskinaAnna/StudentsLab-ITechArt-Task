import React, {Component} from 'react';
import Lab from 'js/components/lab';
import 'js/components/labsList/labsListStyle.scss';
import {Link} from 'react-router-dom';


class LabList extends Component {

    render() {
        const {labs, showAddLab} = this.props;
        const labElements = labs.map((lab, index) =>
            <Link to="/schedule" key = {index} className="lab-list__lab">
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
export default LabList