import React, {Component} from 'react';
import Lab from 'js/components/lab/lab';
import 'js/components/labsList/scss/style.css';


class LabsList extends Component {

    render() {
        const {labs, current} = this.props;
        const labElements = labs.map(lab =>

            <div key = {lab.id} className="lab-list__li">
                <Lab lab={lab} curren ={current}/>
            </div>
        );

        return (
            <div className="labsContainer">
                <div className="labsContainer__buttonAdd">
                    <a className="labsContainer__buttonContent">
                        +
                    </a>
                </div>
                {labElements}
            </div>
        )
    }
}
export default LabsList