import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LogInFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LogInFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-outside" onClick={closeModal}>
            <div className="modal-inside" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);