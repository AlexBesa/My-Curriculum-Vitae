import React from 'react';
import './AboutPage.css';
import { withRouter } from 'react-router-dom';

class AboutPage extends React.Component {

    render() {
        return (
            <div className='aboutPage'>
                <h1>About Me</h1>
                <div className='aboutPage-content'>
                    <div>
                        <img className='aboutPage-image' src={require('../Images-container/myPhoto.jpg')} alt="photoMe" />

                    </div>
                    <div className='aboutPage-content-details'>
                        <h3>My name is Alexandru Besa</h3>
                        <p> I am a future junior frontend web developer.</p>
                        <p>But for now, I work at Banca Transilvania as Relationship Manager</p>
                        <ul>
                            <li>
                                <b>Full Name</b>
                            Alexandru Besa
                            </li>
                            <li>
                                <b>Age</b>
                            31 Years
                            </li>
                            <li>
                                <b>Nationality</b>
                            Romanian
                            </li>
                            <li>
                                <b>Languages</b>
                            Romanian, English
                            </li>
                            <li>
                                <b>Adress</b>
                            17 Sesul de Sus Street,Floresti,Cluj
                            </li>
                        </ul>
                        <a className="btn-pdf" href={require('../Images-container/myCV.pdf')} download="cv-besa-alex">Download my CV</a>

                    </div>
                </div>
                <div className='services'>
                    <div className="services-div">
                        <img
                            className='services-img'
                            src={require('../Images-container/family.jpg')}
                            alt="avatar"
                        />
                        <h5>My Family</h5>
                        <p>This is my beautiful family...I am a future junior frontend web developer.
                    I can provide clean code and pixel perfect design.</p>
                    </div>
                    <div className="services-div">
                        <img
                            className='services-img'
                            src={require('../Images-container/bt.jpg')}
                            alt="avatar"
                        />
                        <h5>My Work</h5>
                        <p>This is my work..I am a future junior frontend web developer.
                    I can provide clean code and pixel perfect design.</p>
                    </div>
                    <div className="services-div">
                        <img
                            className='services-img'
                            src={require('../Images-container/js.png')}
                            alt="avatar"
                        />
                        <h5>My New Hobby</h5>
                        <p>This is my hobyy...I am a future junior frontend web developer.
                    I can provide clean code and pixel perfect design.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AboutPage);