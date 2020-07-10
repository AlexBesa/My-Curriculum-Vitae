import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import './MyCV.css';
import Header from '../Components/Header/Header';
import HomePage from '../Containers/HomePage/HomePage';
import AboutPage from '../Containers/AboutPage/AboutPage';
import ContactPage from '../Containers/ContactPage/ContactPage';
import PortofoliosPage from '../Containers/PortofoliosPage/PortofoliosPage';
import ResumePage from '../Containers/ResumePage/ResumePage';


class MyCV extends Component{

    render(){
        return(
            <div className='myCv'>
                <Header/>
                <Switch>
                    <Route path='/'exact component={HomePage}/>
                    <Route path='/HomePage' component={HomePage}/>
                    <Route path='/AboutPage' component={AboutPage}/>
                    <Route path='/ContactPage' component={ContactPage}/>
                    <Route path='/PortofoliosPage' component={PortofoliosPage}/>
                    <Route path='/ResumePage' component={ResumePage}/> 
                    
                </Switch>
            </div>
        )
    }
}
export default withRouter(MyCV);