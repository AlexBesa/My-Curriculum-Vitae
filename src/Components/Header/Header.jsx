import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import DrawerToogleButton from '../SideDrawer/DrawerToogleButton';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClass : null
        }
    }

    handleHomeClick = () => {
        console.log('this.props.hide',this.props.hideDrawer)
        
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

    // getClass = () => this.props.show ? this.headerClass = 'header open': this.headerClass = 'header';

    render() {
        this.props.showHeader ? this.headerClass = 'header open': this.headerClass = 'header';
        return (
            <div className={this.headerClass}>
                <div className='header-image'>
                    <img
                        className='header-image-avatar'
                        src={require('../Images/avatar.jpg')}
                        alt="avatar"
                        onClick={this.handleHomeClick}
                    />
                </div>
                <ul className='header-menu'>
                    <li onClick={this.handleHomeClick}>HOME</li>
                    <li onClick={this.handleAbout}>ABOUT</li>
                    <li onClick={this.handleResume}>RESUME</li>
                    <li onClick={this.handlePortofolios}>PORTOFOLIOS</li>
                    <li onClick={this.handleContact}>CONTACT</li>

                </ul>
                <p className='header-copyright'>Made with <span><FontAwesomeIcon
                    icon={faHeart}
                    fixedWidth
                    size="lg"
                    color='red'
                /></span> by Alexandru Besa
                </p>
            </div>
        )
    }
}
export default withRouter(Header);