import React from 'react';

export default function CollectionCard({handleTabClick})
{
    return(
        <div className='card collection-card'>
            <h1 className='cardName'>Collections</h1>
            <h1 className='totalCounts'>100</h1>
            <a className='link collection-link' onClick={() => handleTabClick('Collections')}>View all</a>
        </div>
    );
}