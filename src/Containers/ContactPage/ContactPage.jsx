import React from 'react';
import './ContactPage.css';
import { withRouter } from 'react-router-dom';

class ContactPage extends React.Component {

    render() {
        return (
            <div className='contactPage'>
                <p>Aici este ContactPage</p>
            </div>
        )
    }
}
export default withRouter(ContactPage);