import React from 'react';
import './PortofolioCard.css';

class PortofolioCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('this.props carddd',this.props)
        const { poster, title, description,linkGitPage,gitCode } = this.props;
        return (
            <div className='portofolio-card'>
                <img
                    className='portofolio-img'
                    src={poster}
                    // src={require('../Images/batman.jpg')}
                    alt="avatar-portofolio"
                />
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={linkGitPage}
                >
                    View Live Version
                </a>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={gitCode}
                >
                    View on Github
                </a>
            </div>
        )
    }
}
export default PortofolioCard;