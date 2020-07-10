import React from 'react';
import './PortofoliosPage.css';
import { withRouter } from 'react-router-dom';

class PortofoliosPage extends React.Component {

    render() {
        return (
            <div className='portofoliosPage'>
                <p>Aici este PortofoliosPage</p>
            </div>
        )
    }
}
export default withRouter(PortofoliosPage);