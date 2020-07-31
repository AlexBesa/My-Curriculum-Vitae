import React from 'react';
import './PortofoliosPage.css';
import { withRouter } from 'react-router-dom';
import PortofolioCard from '../../Components/PortofolioCard/PortofolioCard';

class PortofoliosPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            portofolioList: [
                {
                    title: 'Batman Forever',
                    description: ' This is a team project made with React Js. We built the front-end part of an IMBD like application (using a provided API)',
                    // linkGit: 'https://alexbesa.github.io/IMDB-final-team-project/',
                    linkGit: 'https://alexbesa.github.io/myIMDB/.',
                    poster: require('../Images-container/batman.JPG'),
                    gitCode: 'https://github.com/AlexBesa/IMDB-final-team-project'
                },
                {
                    title: 'Player vs Obstacles',
                    description: 'You can play it, just for fun. I implemented this game with Html, Css, Javascript and Canvas. ',
                    linkGit: 'https://alexbesa.github.io/PlayerGame/',
                    poster: require('../Images-container/player-obstacle.JPG'),
                    gitCode: 'https://github.com/AlexBesa/PlayerGame'
                },
                {
                    title: 'Games App',
                    description: 'I implemented the CRUD operations (create, read, update, delete) using a provided Games API',
                    linkGit: 'https://alexbesa.github.io/GameAppES6/.',
                    poster: require('../Images-container/game-app.JPG'),
                    gitCode: 'https://github.com/AlexBesa/GameAppES6'
                },
                {
                    title: 'My Robofriends',
                    description: 'This is my first app made in React Js using a provided API. You can search my friend after name',
                    linkGit: 'https://alexbesa.github.io/MyRoboFriends/',
                    poster: require('../Images-container/robo.JPG'),
                    gitCode: 'https://github.com/AlexBesa/MyRoboFriends'
                },
                {
                    title: 'Rock Paper Scissors',
                    description: 'Tell me... Can you win against computer? A game implemented in Html, Css and Javascript',
                    linkGit: 'https://alexbesa.github.io/Rock-Paper-Scissors/.',
                    poster: require('../Images-container/rock.JPG'),
                    gitCode: 'https://github.com/AlexBesa/Rock-Paper-Scissors'
                },
                {
                    title: 'Comment Box',
                    description: 'Push into “comments” a newly created JS Object with a generated Id, a hardcoded email and image and the text from input.',
                    linkGit: 'https://alexbesa.github.io/Comment-Box-Project/.',
                    poster: require('../Images-container/comment-box.JPG'),
                    gitCode: 'https://github.com/AlexBesa/Comment-Box-Project'
                },
                {
                    title: 'Contact Form',
                    description: 'I implemented a contact form component with inputs validation',
                    linkGit: 'https://alexbesa.github.io/Contact-Form/.',
                    poster: require('../Images-container/contact-form.JPG'),
                    gitCode: 'https://github.com/AlexBesa/Contact-Form'
                },
                {
                    title: 'Cookies-Local Storage',
                    description: 'A short code for Cookies and Local Storage. The response you find in Console',
                    linkGit: 'https://alexbesa.github.io/Cookies-and-LocalStorage-Example/.',
                    poster: require('../Images-container/cookies.JPG'),
                    gitCode: 'https://github.com/AlexBesa/Cookies-and-LocalStorage-Example'
                }
            ]
        }
    }
    getPortofolioList = () =>{
        let { portofolioList } = this.state;
        const listApp = portofolioList.map((item,index) => {
            return (
                <PortofolioCard
                    key={index}
                    title={item.title}
                    poster={item.poster}
                    description={item.description}
                    linkGitPage={item.linkGit}
                    gitCode={item.gitCode}
                />
            )
        });
        return listApp;
    }

    render() {
        return (
            <div className='portofoliosPage'>
                <h1>Portofolios</h1>
                <div className='cards'>
                    {this.getPortofolioList()}
                </div>
            </div>
        )
    }
}
export default withRouter(PortofoliosPage);