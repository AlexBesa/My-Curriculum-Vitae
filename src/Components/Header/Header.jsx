import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    
    
    handleHomeClick = () => {
        this.props.history.push(
            {
                pathname: `/HomePage`,
            }
        );
    }
    handleAbout = () => this.props.history.push(`/AboutPage`);
    handleResume = () => this.props.history.push(`/ResumePage`);
    handlePortofolios = () => this.props.history.push(`/PortofoliosPage`);
    handleContact = () => this.props.history.push(`/ContactPage`);
    


    render() {
        return (
            <div className='header'>
                <div className='header-image'>
                    <img
                        className='header-image-avatar'
                        src={require('../Images/avatar.jpg')}
                        alt="avatar"

                    />
                </div>
                <ul className='header-menu'>
                    <li onClick={this.handleHomeClick}>HOME</li>
                    <li onClick={this.handleAbout}>ABOUT</li>
                    <li onClick={this.handleResume}>RESUME</li>
                    <li onClick={this.handlePortofolios}>PORTOFOLIOS</li>
                    <li onClick={this.handleContact}>CONTACT</li>

                </ul>
                <p className='header-copyright'>Made with <span>LOVE</span> by Alexandru Besa</p>
            </div>
        )
    }
}
export default withRouter(Header);