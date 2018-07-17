import React, {Component} from 'react';
import Lab from 'js/components/lab/lab';
import 'js/components/labsList/labsListStyle.scss';


class LabsList extends Component {

    render() {
        const {labs} = this.props;
        const labElements = labs.map((lab, index) =>
            <div key = {index} className="lab-list__li">
                <Lab lab={lab}/>
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