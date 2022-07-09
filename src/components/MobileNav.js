import React from 'react'
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import tinderMobile from '../assets/tinder-mobile-logo.png';

const MobileNav = () => {

    const [user] = useAuthState(auth);

  return (
    <div className="flex justify-between px-2 items-center bg-white h-14 lg:hidden">
        <Avatar src={user?.photoURL} sx={{ width: 32, height: 32 }} />
        <img src={tinderMobile} alt="Tinder Mobile Logo" className="h-8" />
        <LogoutIcon onClick={() => signOut(auth)} sx={{ width: 30, height: 30 }} className="text-gray-600" />
    </div>
  )
}

export default MobileNav