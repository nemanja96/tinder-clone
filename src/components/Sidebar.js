import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import img from '../assets/chat.png';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatIcon from '@mui/icons-material/Chat';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {

  const [nav, setNav] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="hidden lg:block lg:basis-1/4 lg:max-w-sm lg:min-w-[330px] lg:h-screen lg:z-50 bg-white">
        <div className='h-[73px] flex items-center justify-between px-4' style={{ background: "linear-gradient(45deg,#fd267a,#ff6036)" }}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => signOut(auth)}>
            <Avatar src={user?.photoURL} sx={{ width: 32, height: 32 }} />
            <h3 className="text-white font-semibold">Nemanja</h3>
          </div>
          <div className="flex gap-4">
            <IconButton style={{ background: "rgba(0, 0, 0, 0.3)" }} sx={{ width: 36, height: 36 }}>
              <ManageSearchIcon className="text-white" />
            </IconButton>
            <IconButton style={{ background: "rgba(0, 0, 0, 0.3)" }} sx={{ width: 36, height: 36 }}>
              <WorkIcon className="text-white" sx={{ width: 22, height: 22 }} />
            </IconButton>
          </div>
        </div>
        <div className="h-10 flex items-center gap-4 pl-5 mt-1 font-semibold">
          <p onClick={() => setNav(true)} className={`${nav === true ? "border-[#fd4f86]" : "border-white"} px-2 border-b-4 cursor-pointer text-sm text-[#21262e] font-bold`}>Matches</p>
          <p onClick={() => setNav(false)} className={`${nav === false ? "border-[#fd4f86]" : "border-white"} px-2 border-b-4 cursor-pointer text-sm text-[#21262e] font-bold`}>Messages</p>
        </div>
        <div className="flex justify-center items-center h-3/4">
          { nav ? 
                <div className="mt-20 w-3/4 flex flex-col items-center">
                  <div className="w-28 h-40 rounded-xl mb-2" style={{ background: "linear-gradient(45deg,#fd267a,#ff6036)" }}></div>
                  <h3 className="text-center text-2xl font-semibold my-2">Start Matching</h3>
                  <p className="text-center text-sm text-gray-700">Matches will appear here once you start to Like people. You can message them directly from here when you're ready to spark up the conversation.</p>
                </div>
                  :
                <div className="mt-20 w-3/4 flex flex-col items-center">
                  <img src={img} alt="Messages" className="w-40 mb-2" />
                  <h3 className="text-center text-2xl font-semibold my-2">Sag Hallo</h3>
                  <p className="text-center text-sm text-gray-700">Looking to strike up a conversation? When you match with others, you can send them a message under "Matches"</p>
                </div>
          }
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-white h-14 lg:hidden">
        <HomeIcon sx={{ width: 35, height: 35 }} className="text-[#fd4f86]" />
        <ManageSearchIcon sx={{ width: 35, height: 35 }} className="text-gray-600" />
        <StarIcon sx={{ width: 35, height: 35 }} className="text-gray-600" />
        <ChatIcon sx={{ width: 35, height: 35 }} className="text-gray-600" />
      </div>
    </>
  )
}

export default Sidebar