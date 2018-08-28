import React, {Component} from 'react';
import './style/loginStyle.css';
class LoginText extends Component {
    state = {
        name: '',
        password: ''
    }
    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    passwdChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    loginButtonClick = () => {
        console.log(this.state.name)
        console.log(this.state.password)
    }
    render () {
        return (
            <div className="login_text_box">
                <div className="login_text">
                    <div className="welcome_div">
                        <h1>Welcome Back!</h1>
                    </div>
                    <div className="input_div">
                        <input type="text" className="name_passwd" placeholder="Name" value={this.state.name} onChange={this.nameChange}/>
                        <input type="password" className="name_passwd" placeholder="password" value={this.state.password} onChange={this.passwdChange}/>
                    </div>
                    <button className="login_button" onClick={this.loginButtonClick}>LOGIN</button>
                </div>
            </div>
        )
    }
}
export default LoginText;