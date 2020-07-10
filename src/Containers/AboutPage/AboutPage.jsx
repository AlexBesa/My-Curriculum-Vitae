import React from 'react';
import './AboutPage.css';
import { withRouter } from 'react-router-dom';

class AboutPage extends React.Component {

    render() {
        return (
            <div className='aboutPage'>
                <p>Aici este AboutPage</p>
            </div>
        )
    }
}
export default withRouter(AboutPage);