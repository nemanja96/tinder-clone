import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import img from '../assets/chat.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Sidebar = () => {

  const [user] = useSignInWithGoogle(auth);
  console.log(user)

  const [nav, setNav] = useState(false);

  return (
    <div className="basis-1/4 h-screen">
      <div className='bg-[#fd4f86] h-[73px] flex items-center justify-between px-4'>
        <div className="flex items-center gap-2">
          <Avatar src={user.photoUrl} sx={{ width: 32, height: 32 }} />
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
        <p onClick={() => setNav(true)} className={`${nav === true ? "border-[#fd4f86]" : "border-white"} px-2 border-b-4 cursor-pointer text-base text-[#21262e] font-bold`}>Matches</p>
        <p onClick={() => setNav(false)} className={`${nav === false ? "border-[#fd4f86]" : "border-white"} px-2 border-b-4 cursor-pointer text-base text-[#21262e] font-bold`}>Messages</p>
      </div>
      <div className="flex justify-center h-max">
        { nav ? 
              <div className="mt-20 w-3/4 flex flex-col items-center">
                <h3 className="text-center text-2xl font-semibold my-2">Matches</h3>
              </div>
                :
              <div className="mt-20 w-3/4 flex flex-col items-center">
                <img src={img} className="w-40" />
                <h3 className="text-center text-2xl font-semibold my-2">Sag Hallo</h3>
                <p className="text-center text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quam quis tenetur, sequi modi quasi!</p>
              </div>
        }
      </div>
    </div>
  )
}

export default Sidebar