import React from 'react';
import './HomePage.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faFacebookF,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';


class HomePage extends React.Component {
    handleLink=()=>{
        return(
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a rel="noopener noreferrer" target="_blank" href='https://facebook.com'></a>
        )
        
    }
    render() {
        return (
            <div className='homePage'>
                <h1>Hello, I am <span className='myName'>Alexandru Besa</span></h1>
                <p> I am a future junior frontend web developer.
                    I can provide clean code and pixel perfect design.
                    I also make website more & more interactive with Javascript & React.                  
                </p>
                <div className='icons'>   
                    <a 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href='https://www.facebook.com/besa.alex'
                    >
                        <FontAwesomeIcon 
                            icon={faFacebookF}
                            fixedWidth 
                            size="lg"
                        />
                    </a>
                    <a 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href='https://github.com/AlexBesa'
                    >
                        <FontAwesomeIcon 
                            icon={faGithub}
                            fixedWidth 
                            size="lg" 
                        />
                    </a>
                    <a 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href='https://www.linkedin.com/in/besa-alex-46763752/'
                    >
                        <FontAwesomeIcon 
                            icon={faLinkedin}
                            fixedWidth 
                            size="lg" 
                        />
                    </a>
                </div>
            </div>
        )
    }
}
export default withRouter(HomePage);