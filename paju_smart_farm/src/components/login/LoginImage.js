import React, {Component} from 'react';
import field from './assets/field.jpg';
import './style/loginStyle.css';
const contentStyle = {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(' + field + ')',
    backgroundSize: 'cover',
    opacity: '0.8',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
}
class LoginImage extends Component {
    render () {
        return (
            <div className="login_image_box">
                <div className="login_image_content" style={contentStyle}>
                </div>
            </div>
        )
    }
}
export default LoginImage;