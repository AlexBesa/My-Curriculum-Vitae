import React from 'react';
import './ResumePage.css';
import { withRouter } from 'react-router-dom';

class ResumePage extends React.Component {

    render() {
        return (
            <div className='resumePage'>
                <div>
                    <h1>My Skills</h1>
                    <div className='mySkills'>
                        <div className='mySkills-progress'>
                            <h3>HTML</h3>
                            <div className='mySkills-progress-inner'>
                                <p>90%</p>
                                <div className='span-container'>
                                    <span className='span-active span-html'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mySkills-progress'>
                            <h3>CSS</h3>
                            <div className='mySkills-progress-inner'>
                                <p>85%</p>
                                <div className='span-container'>
                                    <span className='span-active span-css'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mySkills-progress'>
                            <h3>JAVASCRIPT</h3>
                            <div className='mySkills-progress-inner'>
                                <p>80%</p>
                                <div className='span-container'>
                                    <span className='span-active span-js'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mySkills-progress'>
                            <h3>REACT JS</h3>
                            <div className='mySkills-progress-inner'>
                                <p>70%</p>
                                <div className='span-container'>
                                    <span className='span-active span-react'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='myResume'>
                    <h1>Resume</h1>
                    <h2>Educational Qualifications</h2>
                    
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>11/2019 - 07/2020</h4>
                        <div className='myResume-details'>
                            <h3>Accredited course of Web Development - JavaScript</h3>
                            <h4>The Informal School of IT</h4>
                            <p>Web Concepts: How the web works, Client-Server architecture,protocols;</p>
                            <p>HTTP: fundamentals about the protocol: methods, status codes,headers, cookies and sessions;</p>
                            <p>HTML and CSS: how to build a responsive User Interface with semantic HTML elements;</p>
                            <p>JavaScript: how to use variables, primitive types, functions, hoisting,objects, scope, DOM, AJAX, Promises;</p>
                            <p>OOP in JavaScript: prototypes, classes and inheritance in JavaScript;</p>
                            <p>GIT: learned the principles and basic commands;</p>
                            <p>jQuery: how to include it in a project and how to use it, why it’s helpful, selectors;</p>
                            <p>JS: how modern JS applications work, React components, props, state, JSX;</p>
                        </div>
                    </div>
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>10/2010 - 07/2012</h4>
                        <div className='myResume-details'>
                            <h3>Master of Degree</h3>
                            <h4>Babes-Bolyai University, Faculty of Economics and Business Administration</h4>
                            <p>Master of Degree in Business Administration in Tourism, Trade and Services</p>
                        </div>
                    </div>
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>10/2007 - 07/2012</h4>
                        <div className='myResume-details'>
                            <h3>Bachelor's Degree</h3>
                            <h4>Babes-Bolyai University, Faculty of Economics and Business Administration</h4>
                            <p>Specialization: Economy of Commerce, Tourism and Services</p>
                        </div>
                    </div>

                    <h2>Working Experience</h2>
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>03/2017 - Ongoing</h4>
                        <div className='myResume-details'>
                            <h3>Relationship Manager</h3>
                            <h4>Banca Transilvania - Billa Agency Cluj-Napoca</h4>
                            <p>I am actively involved in initiation, maintenance and development of the relationship with retail customers, in terms of business combined sale of all the bank's products and services in the retail sphere</p>
                            <p>I manage the retail business, being equally responsible for sales, operations and lending;</p>
                            <p>I also collect the credit documentation, propose it for analysis and approval as well as monitor it retail loans.</p>
                        </div>
                    </div>
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>10/2007 - 07/2012</h4>
                        <div className='myResume-details'>
                            <h3>Customer Service Specialist</h3>
                            <h4>Banca Transilvania - Zorilor Agency Cluj-Napoca</h4>
                            <p>I offer complete and complex information and consulting to clients regarding banking products and services offered, including retail products, in particular cards.</p>
                        </div>
                    </div>
                    <div className='myResume-div'>
                        <h4 className='myResume-year'>10/2007 - 07/2012 </h4>
                        <div className='myResume-details'>
                            <h3>Cashier Reference</h3>
                            <h4>Banca Transilvania - Zorilor Agency Cluj-Napoca</h4>
                            <p>I ensure the interface with the clients by taking over the documents that are the object of the transactions, records transactions in the system.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ResumePage);