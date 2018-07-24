import React, {Component} from 'react';
import 'js/components/modalWindowHeader/modalWindowHeaderStyle.scss';


class ModalWindowHeader extends Component {

    render() {
        const {close} = this.props;

        return (
            <div className="modalWindow">
                <div className="modalWindow__logo"/>
                <button className="modalWindow__close" onClick={close}/>
            </div>
        )
    }
}
export default ModalWindowHeader