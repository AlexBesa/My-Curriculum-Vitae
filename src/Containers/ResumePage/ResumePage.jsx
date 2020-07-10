import React from 'react';
import './ResumePage.css';
import { withRouter } from 'react-router-dom';

class ResumePage extends React.Component {

    render() {
        return (
            <div className='ResumePage'>
                <p>Aici este ResumePage</p>
            </div>
        )
    }
}
export default withRouter(ResumePage);