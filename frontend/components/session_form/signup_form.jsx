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
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                    <a href="#" class="modal-header-close" role="button">
                        <span className="icon-close">close</span>
                    </a>
                </div>
                <div className="modal-content">
                    <div>
                        <form>
                            <div className="signup-inner">
                                <div className="signup-form">
                                    <div className="signup-item">
                                        <label className="signup-label">Username:</label>
                                        <div className="signup-input">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.handleInput('username')}
                                            />
                                        </div>
                                    </div>
                                    <div className="signup-item">
                                        <label className="signup-label">Email:</label>
                                        <div className="signup-input">
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleInput('email')}
                                            />
                                        </div>
                                    </div>
                                    <div className="signup-item">
                                        <label className="signup-label">Password:</label>
                                        <div className="signup-input">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.handleInput('password')}
                                            />
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button className="submit" onClick={this.handleSubmit}>Sign Up!</button>
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