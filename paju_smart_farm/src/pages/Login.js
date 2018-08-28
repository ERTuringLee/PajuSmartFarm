import React, {Component} from 'react';
import LoginText from '../components/login/LoginText'
import LoginImage from '../components/login/LoginImage'

class Login extends Component {
    render() {
        return (
            <div>
                <LoginImage></LoginImage>
                <LoginText></LoginText>
            </div>
        );
    }
};

export default Login;