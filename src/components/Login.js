import React, { useState } from 'react'
import image from '../assets/background.webp';
import PublicIcon from '@mui/icons-material/Public';
import logo from '../assets/logo.png';

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
    </div>
  )
}

export default Login