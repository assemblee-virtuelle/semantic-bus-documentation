import React from 'react';

const Card = ({subtitle, content}) => {
    return (
        <div className="card">
            <div className="card__image">
                <img
                    src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="Image alt text"
                    title="Logo Title Text 1" />
                </div>
                <div className="card__body">
                <h4>{subtitle}</h4>
                <small>
                    {content} 
                </small>
            </div>
        </div>
    );
}
export default Card;