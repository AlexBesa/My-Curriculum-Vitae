import React from 'react';
import './PortofolioCard.css';

const PortofolioCard = props => {
    // console.log('this.props carddd ',props)
    const { poster, title, description, linkGitPage, gitCode } = props;
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
export default PortofolioCard;