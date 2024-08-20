import React from 'react';

export default function LikeCard({cardName})
{
    return(
        <div className='card like-card'>
            <h1 className='cardName'>{cardName}</h1>
            <h1 className='totalCounts'>100</h1>
        </div>
    );
}