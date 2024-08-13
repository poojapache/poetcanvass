import React from 'react';
import { useUserStore } from '../Store/userStore';
import defaultPic from '../img/default.png'
import Image from 'next/image';
import LikeCard from '@/app/Components/LikeCard';
import CollectionCard from '@/app/Components/CollectionCard';
import MostPopularPoemChart from '@/app/Components/MostPopularPoemChart';

export default function Dashboard()
{
    const {user} = useUserStore();
    return(
        <div className='left-profile'>
            <div className='left-profile-container'>
                <Image src={defaultPic} alt="DefaultPic" className="dashboard-pic"/>
                <h1 className='user-full-name'>{user.fullName}</h1>
                <h1 className='user-username'>{user.username}</h1>
                <p className='user-about'>"About me"</p>
                <button className='btn edit-profile-btn'>Edit Profile</button>
            </div>
            <div className='right-profile-container'>
                <div className='card-container'>
                    <LikeCard/>
                    <CollectionCard/>
                </div>
                    <div className='card-container'>
                        <MostPopularPoemChart/>
                    <div/>
                </div>

            </div>
        </div>
    );
}