import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import axios from '../axios';
import Avatar from '@mui/material/Avatar';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Main = () => {

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }

    fetchData();
  }, [])

  const [people, setPeople] = useState([]);
  const [user] = useAuthState(auth);

  return (
    <>
    <div className="basis-full flex justify-center bg-gray-200">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        <Avatar src={user?.photoURL} sx={{ width: 100, height: 100 }} className="border-2 border-white border-solid animate-bounce" />
        <h3 className="text-lg text-gray-600 font-medium">No more data!</h3>
        </div>
        {people?.map((person) => (
          <TinderCard key={person._id} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']} className="h-5/6 lg:max-h-[550px] w-full lg:w-96 rounded-lg absolute">
            <div style={{ backgroundImage: "url(" + person.imgUrl + ")", backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-full rounded-lg cursor-pointer">
              <div className="relative w-full h-full rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 rounded-lg" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))" }}>
                  <h3 className="text-white text-3xl font-bold">{person.name} <span className="text-2xl font-light">{person.age}</span></h3>
                  <p className="text-sm text-light text-white py-1 mb-2">{person.status}</p>
                  <div className='flex flex-wrap gap-2'>
                    {
                      person.tags.map(tag => (
                        <p key={tag} className="text-sm text-white text-light px-2 py-1 rounded-full" style={{ background: "rgba(0, 0, 0, 0.5)" }}>{tag}</p>
                      ))
                    }
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full border border-[#e6af16] border-solid text-[#e6af16]">
                      <ReplayIcon  sx={{ width: 32, height: 32 }} className="hover:scale-110 transition-all" />
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 rounded-full border border-[#ff4458] border-solid text-[#ff4458]">
                      <CloseIcon sx={{ width: 32, height: 32 }} className="hover:scale-110 transition-all" />
                    </div>
                    <div className="flex justify-center items-center w-14 h-14 rounded-full border border-[#1786ff] border-solid text-[#1786ff]">
                      <StarIcon sx={{ width: 32, height: 32 }} className="hover:scale-110 transition-all" />
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 rounded-full border border-[#21d07c] border-solid text-[#21d07c]">
                      <FavoriteIcon sx={{ width: 32, height: 32 }} className="hover:scale-110 transition-all" />
                    </div>
                    <div className="flex justify-center items-center w-14 h-14 rounded-full border border-[#9908e8] border-solid text-[#9908e8]">
                      <BoltIcon sx={{ width: 32, height: 30 }} className="hover:scale-110 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
    </>
  )
}

export default Main