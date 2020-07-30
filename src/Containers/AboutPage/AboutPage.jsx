import React from 'react';
import './AboutPage.css';
import { withRouter } from 'react-router-dom';

class AboutPage extends React.Component {

    render() {
        return (
            <div className='aboutPage'>
                <h1>About Me</h1>
                <div className='aboutPage-content'>
                    <div className='aboutPage-img-div'>
                        <img className='aboutPage-image' src={require('../Images-container/myPhoto2.jpg')} alt="photoMe" />
                    </div>
                    <div className='aboutPage-content-details'>
                        <h3>My name is Alexandru Besa</h3>
                        <p>I am a professional with over 7 years of experience in the banking system.</p>
                        <p>I am very enthusiastic about pursuing a career in web development and for now, 
                            I work as Relationship Manager at Banca Transilvania.</p>

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
                            17 Sesul de Sus Street, Floresti, Cluj
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
                        <p>This is my beautiful family, my lovely wife Adelina and my two
                        beautiful children Gloria and Tudor.The memories we make with
                        our family is everything.
                        </p>
                    </div>
                    <div className="services-div">
                        <img
                            className='services-img'
                            src={require('../Images-container/bt.jpg')}
                            alt="avatar"
                        />
                        <h5>My Work</h5>
                        <p>This is my work. I work as Relationship Manager at Banca Transilvania
                            where I manage the retail business, being equally responsible for sales and lending.</p>
                    </div>
                    <div className="services-div">
                        <img
                            className='services-img'
                            src={require('../Images-container/js.png')}
                            alt="avatar"
                        />
                        <h5>My New Passion</h5>
                        <p>Out of the desire to get out of the comfort zone, I started learning programming and
                             when I came across Js and React I realized that I found my vocation</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AboutPage);