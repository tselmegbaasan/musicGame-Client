import React from 'react';
import Card from './Card';
import './Cards.css'

const CardGroup = () => {
    return (
        <div className="cards-section">
            <div className="cards-container">
                <div className="cards-list-wrapper">
                    <ul className="cards-list">
                        <Card 
                        name="lyricsGame"
                        link='/newGame'
                        imgsrc='media/lyricsCardImage.jpg'
                        label='Lyrics mode'
                        text='Play in "Guess the lyrics" mode to challenge your lyrics knowledge'
                        />
                        <Card 
                        name="albumGame"    
                        link='/newGame'
                        imgsrc='media/albumCardImage.jpg'
                        label='Album mode'
                        text='Play in "Album cover" mode to test your album cover knowledge'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default CardGroup;