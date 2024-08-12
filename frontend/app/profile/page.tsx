'use client';

import React from 'react';
import { useUser } from '@/app/Context/UserContext';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../Store/userStore';
import defaultPic from '../img/default.png'
import Image from 'next/image';

export default function ProfilePage() {
  // const { user } = useUser();
  const {user} = useUserStore();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <Image src={defaultPic} alt="DefaultPic"/>
      <p>Username: {user.username}</p>
      <p>Full Name: {user.fullName}</p>
    </div>
  );
}
