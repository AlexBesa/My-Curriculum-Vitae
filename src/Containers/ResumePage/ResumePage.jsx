import React from 'react';
import './ResumePage.css';
import { withRouter } from 'react-router-dom';

class ResumePage extends React.Component {

    render() {
        return (
            <div className='resumePage'>
                <h1>My Skills</h1>
                <div className='mySkills'>
                    <div className='mySkills-progress'>
                        <h3>HTML</h3>
                        <div className='mySkills-progress-inner'>
                            <p>90%</p>
                            <div className='span-container'>
                                <span className='span-active'></span>
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
                
            </div>
        )
    }
}
export default withRouter(ResumePage);