import React, { useState } from 'react'
import image from '../assets/background.webp';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../assets/logo.png';
import TestimonialCard from './TestimonialCard';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {

    const [loginBox, setLoginBox] = useState(false);

  return (
    <div>
        <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-screen">
            <div className="w-full h-screen" style={{ background: "rgba(72, 72, 72, 0.4)", background: "-webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))", background: "-moz-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))", background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))"}}>
                <div className="flex justify-between py-5 px-7">
                    <div className="flex items-center gap-10">
                        <img src={logo} width="150px" height="35px" />
                        <ul className="flex gap-10">
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Products</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Learn</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Safety</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Support</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Download</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-10">
                        <p className="text-white text-base flex items-center gap-2 cursor-pointer hover:text-[#d6002f]"><PublicIcon sx={{ width: 16, height: 16 }} /> <span>ENGLISH</span></p>
                        <button className="bg-white w-[104px] h-[40px] text-xl rounded-md text-[#d6002f] font-semibold">Log in</button>
                    </div>
                </div>
                <div className="h-4/5 flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-white text-[109px] font-bold">Swipe Right</h1>
                        <button onClick={() => setLoginBox(true)} className="px-20 rounded-full py-4 mt-4 text-white font-medium" style={{ background: "linear-gradient(45deg,#fd267a,#ff6036)" }}>Create account</button>
                    </div>
                    {
                        loginBox &&
                        <div className="h-full absolute w-60 bg-white">
                            <p onClick={() => setLoginBox(false)}>X</p>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="bg-white grid grid-cols-3 gap-4 px-16 py-8 max-w-8xl">
                <TestimonialCard name="Nemanja Radivojevic" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
                <TestimonialCard name="Tamara Peric" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
                <TestimonialCard name="Kristina Damnjanovic" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
            </div>
        </div>
        <div className="flex justify-center">
            <div className="bg-white grid grid-cols-5 gap-12 px-16 py-8 max-w-8xl border-b border-gray-300">
                <div>
                    <h3 className="text-xl font-bold mb-4">LEGAL</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Privacy</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Terms</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Cookie Policy</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Intellectual Property</li>
                    </ul>
                </div>
                <div >
                    <h3 className="text-xl font-bold mb-4">CAREERS</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Careers Portal</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Tech Blog</li>
                    </ul>
                </div>
                <div >
                    <h3 className="text-xl font-bold mb-4">SOCIAL</h3>
                    <ul className="flex flex-row gap-6">
                        <InstagramIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <YouTubeIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <TwitterIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <FacebookIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                    </ul>
                </div>
                <div >
                    <h3 className="text-xl font-normal mb-4">FAQ</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Destinations</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Press Room</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Contact</li>
                        <li className="text-[#21262e] text-base cursor-pointer hover:text-[#d6002f]">Promo Code</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login