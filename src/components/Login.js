import React, { useState } from 'react'
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import image from '../assets/background.webp';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../assets/logo.png';
import TestimonialCard from './TestimonialCard';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import appStore from '../assets/app-store.webp';
import googlePlay from '../assets/google-play.webp';
import CloseIcon from '@mui/icons-material/Close';
import logoIcon from '../assets/logo-icon.png';
import googleIcon from '../assets/google-icon.svg';
import facebookIcon from '../assets/facebook-icon.png';

const Login = () => {

    const [loginBox, setLoginBox] = useState(false);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);

  return (
    <div>
        <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} className="w-full h-screen">
            <div className="w-full h-screen" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))" }}>
                <div className="flex justify-between py-4 md:py-5 px-5 md:px-7">
                    <div className="flex items-center gap-10">
                        <img src={logo} alt="Tinder" className="w-[100px] md:w-[150px]" />
                        <ul className="hidden gap-10 lg:flex">
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Products</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Learn</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Safety</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Support</li>
                            <li className="text-white text-xl font-semibold cursor-pointer hover:text-[#d6002f] hover:underline hover:decoration-[#d6002f]">Download</li>
                        </ul>
                    </div>
                    <div className="hidden items-center gap-10 md:flex">
                        <p className="text-white text-base flex items-center gap-2 cursor-pointer hover:text-[#d6002f]"><PublicIcon sx={{ width: 16, height: 16 }} /> <span>ENGLISH</span></p>
                        <button className="bg-white w-[104px] h-[40px] text-xl rounded-md text-[#d6002f] font-semibold">Log in</button>
                    </div>
                </div>
                <div className="h-4/5 flex justify-center items-center">
                    <div className="flex relative flex-col items-center justify-center">
                        <h1 className="text-white text-5xl md:mt-10 lg:text-[100px] font-bold mb-5 2xl:text-[153px]">Swipe Right</h1>
                        <button onClick={() => setLoginBox(true)} className="px-20 rounded-full py-4 mt-4 text-white font-medium" style={{ background: "linear-gradient(45deg,#fd267a,#ff6036)" }}>Create account</button>                      
                    </div>
                    {
                        loginBox &&
                        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="md:w-[420px] max-h-[700px] h-full bg-white relative flex flex-col justify-center">
                                <p onClick={() => setLoginBox(false)} className="absolute right-4 top-2 w-8 h-8 rounded-full text-center border-2 border-gray-300 cursor-pointer text-gray-300 transition-all hover:border-gray-600 hover:text-gray-600 hover:rotate-90"><CloseIcon sx={{ width: 22 , height: 22 }} /></p>
                                <div className="flex flex-col items-center justify-center px-5 md:px-10">
                                    <img src={logoIcon} alt="Tinder Logo" width="35px" />
                                    <h2 className="text-2xl italic font-bold my-4 text-[#21262e]">CREATE ACCOUNT</h2>
                                    <p className="font-normal mb-2 text-[#21262e] text-center leading-5 text-sm max-w-xs">By clicking Log In, you agree to our <span className="underline text-gray-600 cursor-pointer">Terms</span>. Learn how we process your data in our <span className="underline text-gray-600 cursor-pointer">Privacy Policy</span>. and <span className="underline text-gray-600 cursor-pointer">Cookie Policy</span>.</p>
                                    <div onClick={() => signInWithGoogle()} className="border-2 border-gray-300 rounded-full mt-4 w-full px-4 py-3 flex items-center gap-5 md:gap-10 cursor-pointer text-gray-600 transition-all hover:text-gray-900 max-w-xs">
                                        <img src={googleIcon} alt="Google Logo" width="25px" />
                                        <span className="font-medium">LOG IN WITH GOOGLE</span>
                                    </div>
                                    <div onClick={() => signInWithFacebook()} className="border-2 border-gray-300 rounded-full mt-4 w-full px-4 py-3 flex items-center gap-5 md:gap-10 cursor-pointer text-gray-600 transition-all hover:text-gray-900 max-w-xs">
                                        <img src={facebookIcon} alt="Facebook Logo" width="25px" />
                                        <span className="font-medium">LOG IN WITH FACEBOOK</span>
                                    </div>
                                    <p className="mt-4 underline text-gray-600 cursor-pointer">Trouble Logging In?</p>
                                    <hr className="border-white md:border-gray-300 mt-6 w-full" />
                                    <h2 className="hidden md:block text-2xl italic font-bold my-4 text-[#21262e]">GET THE APP!</h2>
                                    <div className="hidden md:flex items-center gap-4">
                                        <img src={appStore} alt="App Store" className="w-36 h-12 cursor-pointer" />
                                        <img src={googlePlay} alt="Google Play" className="w-40 h-[70px] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="bg-white grid grid-cols-1 md:grid-cols-3 py-8 px-4 md:px-0 gap-4 md:w-10/12 max-w-8xl">
                <TestimonialCard name="Nemanja Radivojevic" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
                <TestimonialCard name="Tamara Peric" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
                <TestimonialCard name="Kristina Damnjanovic" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae, debitis ratione cum at atque voluptatum nesciunt aliquid impedit vel aspernatur dolore soluta ex mollitia, nemo omnis dolores iusto quasi." />
            </div>
        </div>
        <div className="flex md:justify-center">
            <div className="grid grid-cols-3 px-4 pb-6 md:px-0 md:grid-cols-5 md:py-8 md:w-10/12 max-w-8xl">
                <div className="md:mr-20">
                    <h3 className="text-lg md:text-xl font-bold mb-4">LEGAL</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Privacy</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Terms</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Cookie Policy</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Intellectual Property</li>
                    </ul>
                </div>
                <div className="md:mr-20">
                    <h3 className="text-lg md:text-xl font-bold mb-4">CAREERS</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Careers Portal</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Tech Blog</li>
                    </ul>
                </div>
                <div className="md:mr-20">
                    <h3 className="text-lg md:text-xl font-bold mb-4">SOCIAL</h3>
                    <ul className="grid grid-cols-2 md:flex md:flex-row gap-2">
                        <InstagramIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <YouTubeIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <TwitterIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                        <FacebookIcon sx={{ width: 30, height: 30 }} className="cursor-pointer hover:text-[#d6002f]" />
                    </ul>
                </div>
                <div className="md:mr-20">
                    <h3 className="text-sm mt-6 md:mt-0 md:text-xl font-normal mb-4">FAQ</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Destinations</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Press Room</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Contact</li>
                        <li className="text-[#21262e] text-sm md:text-base cursor-pointer hover:text-[#d6002f]">Promo Code</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-6">
            <div className="flex flex-col md:w-10/12 px-4 md:px-0 max-w-8xl pb-4 border-b border-gray-300 border-t">
                <div className="bg-white flex mb-4 items-center justify-between md:justify-start md:gap-6">
                    <h3 className="text-md md:text-xl font-bold">GET THE APP!</h3>
                    <img src={appStore} alt="App Store" className="w-36 h-12 hidden md:inline" />
                    <img src={googlePlay} alt="Google Play" className="w-40 h-[70px]" />
                </div>
                <p className="text-[#505965] text-sm pb-4">Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.</p>
                <p className="text-[#505965] text-sm">There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col md:justify-between md:flex-row md:w-10/12 px-4 md:px-0 max-w-8xl mt-4 mb-10">
                <ul className="flex justify-center md:flex-row gap-2 flex-wrap">
                    <li className="text-[#505965] text-xs md:text-sm cursor-pointer hover:text-[#d6002f]">FAQ /</li>
                    <li className="text-[#505965] text-xs md:text-sm cursor-pointer hover:text-[#d6002f]">Safety Tips /</li>
                    <li className="text-[#505965] text-xs md:text-sm cursor-pointer hover:text-[#d6002f]">Terms /</li>
                    <li className="text-[#505965] text-xs md:text-sm cursor-pointer hover:text-[#d6002f]">Cookie Policy /</li>
                    <li className="text-[#505965] text-xs md:text-sm cursor-pointer hover:text-[#d6002f]">Privacy Settings</li>
                </ul>
                <p className="text-[#505965] mt-4 text-center md:text-right md:mt-0 text-xs md:text-sm">2022 Match Group, LLC, All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Login