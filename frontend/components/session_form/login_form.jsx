import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleDemo() {
        this.props.loginDemo();
    }
    handleModal() {
        this.props.linkToSignup();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-%{i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div className="modal-header-bar">
                    <span className="modal-header-title">
                        Log in
                    </span>
                    <a href="#" className="modal-header-close" role="button">
                        <span onClick={this.props.closeModal} className="ui-icon icon-close"></span>
                    </a>
                </div>
                <div className="modal-content">
                    <div>
                        <form>
                            <div className="signup-inner">
                                <div className="signup-form">
                                    <div className="signup-item">
                                        {/* <label className="signup-label">Username</label> */}
                                        <div className="signup-input">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.handleInput('username')}
                                            />
                                        </div>
                                    </div>
                                    <div className="signup-item">
                                        {/* <label className="signup-label">Password</label> */}
                                        <div className="signup-input">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.handleInput('password')}
                                            />
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        <button onClick={this.handleSubmit}>Log in</button>
                                    </div>

                                    <div className="buttons">
                                        <button onClick={this.handleDemo}>Try demo</button>
                                    </div>

                                    <div className="signup-item">
                                        <div className="login-instead">
                                            Don’t have an account? Sign up as <a href="#" onClick={this.handleModal}>a fan</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);