import React, { Component } from 'react';
import './sign-in.component.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required />
                    <label htmlFor="email">Email</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required />
                    <label htmlFor="email">Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

export default SignIn;
