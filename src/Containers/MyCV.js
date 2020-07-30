import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './MyCV.css';
import Header from '../Components/Header/Header';
import HomePage from '../Containers/HomePage/HomePage';
import AboutPage from '../Containers/AboutPage/AboutPage';
import ContactPage from '../Containers/ContactPage/ContactPage';
import PortofoliosPage from '../Containers/PortofoliosPage/PortofoliosPage';
import ResumePage from '../Containers/ResumePage/ResumePage';
import Backdrop from '../Components/Backdrop/Backdrop';
import DrawerToogleButton from '../Components/DrawerToogleButton/DrawerToogleButton';

class MyCV extends Component {
    constructor(props){
        super(props);
        this.state = {
            sideHeaderOpen: false
        }
    }
    

    headerToogleClickhandler = () => {
        this.setState((prevState) => {
            return {sideHeaderOpen: !prevState.sideHeaderOpen}
        })
    }

    backdropClickHandler = () =>{
        this.setState({sideHeaderOpen : false});
    }

    render() {
        let backdrop=null;

        if (this.state.sideHeaderOpen){
            backdrop = <Backdrop clickBackDrop={this.backdropClickHandler}/>;
        }
        
        return (
            <div className='myCv'>
                <div className='header-toogle-btn'>
                    <DrawerToogleButton click={this.headerToogleClickhandler}/>
                </div>
                <Header 
                showHeader={this.state.sideHeaderOpen}
                />
                {backdrop}
                <Switch className='myCv-pages'>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/HomePage' component={HomePage} />
                    <Route path='/AboutPage' component={AboutPage} />
                    <Route path='/ContactPage' component={ContactPage} />
                    <Route path='/PortofoliosPage' component={PortofoliosPage} />
                    <Route path='/ResumePage' component={ResumePage} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(MyCV);
