'use client';

import React,{useState} from 'react';
import { useUser } from '@/app/Context/UserContext';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../Store/userStore';
import defaultPic from '../img/default.png'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HelpIcon from '@mui/icons-material/Help';
import Dashboard from '@/app/Container/Dashboard';
import Feed from '@/app/Container/Feed';

export default function ProfilePage() {
  // const { user } = useUser();
  const {user} = useUserStore();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Feed');

  if (!user) {
    router.push('/login');
    return null;
  }

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <div className='page profile' >
      {/* <Image src={defaultPic} alt="DefaultPic"/>
      <p>Username: {user.username}</p>
      <p>Full Name: {user.fullName}</p> */}
      <div className='navbar-container'>
        <h1 className="logo">Poet Canvass</h1>
        <div id="searchbox-container">
          <input type='search' className='searchbox' placeholder='Search poets & poems'></input>
          <div><SearchIcon className='searchIcon' sx={{ fontSize: 50, padding: '5px', height:'40px' }}/></div>
        </div>
        <div>
          <ul className='list-container'>
            {activeTab !== 'Dashboard'?<li><Image src={defaultPic} alt="DefaultPic" className="profilePic"/></li>:''}
            <li><button className='btn sign-out'>Sign Out</button></li>
          </ul>
        </div>
      </div>

      <div className='profile-container'>
        <div className='side-navigation'>
          <a className={activeTab === 'Feed' ? 'active' : ''} 
            onClick={() => handleTabClick('Feed')}><FeedIcon className='icon'/>Feed</a>
          <a className={activeTab === 'Dashboard' ? 'active' : ''} 
            onClick={() => handleTabClick('Dashboard')}><DashboardIcon className='icon'/>Dashboard</a>
          {/* <a className={activeTab === 'MyWork' ? 'active' : ''} 
            onClick={() => handleTabClick('MyWork')}><EditNoteIcon className='icon'/> My work</a> */}
          <a className={activeTab === 'Help' ? 'active' : ''} 
            onClick={() => handleTabClick('Help')}><HelpIcon className='icon'/>Help</a>
        </div>
        <div className='side-navigation-adjust'></div>
        <div className='content-container'>
          {activeTab === 'Feed'?<Feed/>:''}
          {activeTab === 'Dashboard'?<Dashboard/>:''}
          {/* {activeTab === 'MyWork'?<Dashboard/>:''} */}
          {activeTab === 'Help'?<Dashboard/>:''}
        </div>
      </div>

    </div>
  );
}
