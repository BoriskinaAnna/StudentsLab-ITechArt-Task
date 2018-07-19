import React, {Component} from 'react';
import Lab from 'js/components/lab/';
import 'js/components/labsList/labsListStyle.scss';


class Index extends Component {

    constructor() {
        super();

        this.state = {
            isAddLabShowed: false
        };
    }

    render() {
        const {labs, showAddLab} = this.props;
        const labElements = labs.map((lab, index) =>
            <div key = {index} className="lab-list__lab">
                <Lab lab={lab}/>
            </div>
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
export default Index