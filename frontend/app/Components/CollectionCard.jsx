import React from 'react';

export default function CollectionCard()
{
    return(
        <div className='card'>
            <h1 className='cardName'>Collections</h1>
            <h1 className='totalCounts'>100</h1>
            <a className='link collection-link'>View all</a>
        </div>
    );
}