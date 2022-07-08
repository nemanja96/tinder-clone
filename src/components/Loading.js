import React from 'react'
import loadingIcon from '../assets/loading-icon.png';

const Loading = () => {
  return (
    <div style={{ background: "linear-gradient(45deg,#fd267a,#ff6036)" }} className="w-full h-screen flex justify-center items-center">
        <img src={loadingIcon} width="60px" className="animate-bounce" />
    </div>
  )
}

export default Loading