import React from 'react';
import './ContactPage.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPhone,faMailBulk } from '@fortawesome/free-solid-svg-icons';

class ContactPage extends React.Component {

    render() {
        return (
            <div className='contactPage'>
                <h1>Contact me</h1>
                <div className='contact-info'>
                    <div className='contact-info-block'>
                        <span className='contact-icon'><FontAwesomeIcon 
                            icon={faHome}
                            fixedWidth 
                            size="lg"
                        /></span>
                        <div className='contact-content'>
                            <h4>Adress</h4>
                            <p>17 Sesul de Sus Street,Floresti,Cluj</p>
                        </div>
                    </div>
                    <div className='contact-info-block'>
                        <span className='contact-icon'><FontAwesomeIcon 
                            icon={faPhone}
                            fixedWidth 
                            size="lg"
                        /></span>
                        <div className='contact-content'>
                            <h4>Phone</h4>
                            <p>+0746 280 383</p>
                        </div>
                    </div>
                    <div className='contact-info-block'>
                        <span className='contact-icon'><FontAwesomeIcon 
                            icon={faMailBulk}
                            fixedWidth 
                            size="lg"
                        /></span>
                        <div className='contact-content'>
                            <h4>E-mail</h4>
                            <p>besaalex17@yahoo.com</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(ContactPage);