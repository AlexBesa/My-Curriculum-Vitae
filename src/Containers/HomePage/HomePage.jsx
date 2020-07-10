import React from 'react';
import './HomePage.css';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div className='homePage'>
                <p>Aici este HomePage</p>
            </div>
        )
    }
}
export default withRouter(HomePage);