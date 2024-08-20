import React from 'react';

export default function Collections(){
    const collection = [
        {name:'Nightingale'},
        {name: 'Winds of turmoil'}
    ]
    return(
        <div className="collection-container">
            <div className='first-collection-container'>
                <h1>My Collection</h1>
                <button className='btn add-collection-btn'>Add New Collection +</button>
            </div>
            <br/>
            <div className='breaker-line'></div>
            <div className='collection-contant-container'>
                {collection.length === 0?<h1>Nothing to show</h1>:
                collection.map((element, index) => (
                    <h1 key={index}>{element.name}</h1>
                ))}
            </div>
            
        </div>
    );
}