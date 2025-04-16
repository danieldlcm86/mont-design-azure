import React from 'react';
import './Card.css';

interface CardProps {
    image: string;
    title: string;
    location: string;
}

const Card: React.FC<CardProps> = ({ image, title, location }) => {
    return (
        <div className="card-container">
            <div className="card-overlay"></div> {/* Capa para el degradado */}
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-location">{location}</p>
                </div>
                {/* <button className="card-button">
                    <span className="arrow">➤</span> Directions
                </button> */}
            </div>
        </div>
    );
};

export default Card;
