import React, {useState} from 'react';
import Card from '../card/Card';


function Item(){
    const [showLogo, setShowLogo]= useState(true);
    return(
        <div className="card" onClick={() => setShowLogo(!showLogo)}>
            {showLogo ? 

            <>
            <img className="card-logo" src={Card.img} alt="logo"/>
            <h3 className="card-title">{Card.name}</h3>
            </>
            :
            <ul className="list">
                {card.options.map((optElement,i)=>{
                    return
                }}
            </ul>
            
        }

        </div>
    )
}