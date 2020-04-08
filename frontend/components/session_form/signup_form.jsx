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
                        <img class="icon-close" src={window.logo} />
                    </a>
                </div>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Sign Up!</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);