import React,{useState} from 'react';

function Item ()=>{
    const [showLogo, setShowLogo] = useState(true);
    
    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
        {showLogo ?
            <>
            <img className = "card-logo" src={Card.img} alt="logo" />
            <h3 className = "card-title">{Card.name}</h3>            
            </>
            :
            <ul className = "list">
            {Card.options.map((optElement, index)=>)}
            </ul> 
        
        }
        </div>
        


    )
}

export default Item;