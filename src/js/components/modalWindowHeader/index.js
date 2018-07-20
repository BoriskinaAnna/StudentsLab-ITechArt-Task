import React, {Component} from 'react';
import 'js/components/modalWindowHeader/modalWindowHeaderStyle.scss';


class ModalWindowHeader extends Component {

    render() {
        const {close} = this.props;

        return (
            <div className="modalWindowHeader">
                <div className="modalWindowHeader__logo"/>
                <button className="modalWindowHeader__closeBtn" onClick={close}/>
            </div>
        )
    }
}
export default ModalWindowHeader