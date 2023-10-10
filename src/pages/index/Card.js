import React from 'react';

const Card = ({subtitle, content, imgUrl}) => {
    return (
        <div className="card">
            <div className="card__image">
                <img
                    src={imgUrl}
                    alt={"Logo of " + subtitle }
                    title={subtitle} />
                </div>
                <div className="card__body">
                <h4>{subtitle}</h4>
                <p>
                    {content} 
                </p>
            </div>
        </div>
    );
}
export default Card;