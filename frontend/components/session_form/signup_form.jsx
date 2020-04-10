import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleModal() {
        this.props.linkToLogin();
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
                        Sign up for a Bandcamp account
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
                                        <label className="signup-label">Email address</label>
                                        <div className="signup-input">
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleInput('email')}
                                            />
                                        </div>
                                    </div>

                                    <div className="signup-item">
                                        <label className="signup-label">Password</label>
                                        <div className="signup-input">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.handleInput('password')}
                                            />
                                        </div>
                                    </div>

                                    <div className="signup-item">
                                        <label className="signup-label">Username</label>
                                        <div className="signup-input">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.handleInput('username')}
                                            />
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        {/* <button className="submit" onClick={this.handleSubmit}>Sign up</button> */}
                                        <button onClick={this.handleSubmit}>Sign up</button>
                                    </div>

                                    <div className="signup-item">
                                        <div className="login-instead">
                                            Already have an account? <a href="#" onClick={this.handleModal}>Log in</a>.
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

export default withRouter(SignupForm);