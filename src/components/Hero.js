import React from 'react'

const Hero = () => {
    
    return ( 
        <div id='hero' className="hero relative overflow-hidden">  
        <img src="/Landing.jpg" alt='watches Hero' className=" object-cover" />  
        <div className="absolute inset-0 flex items-center px-7 md:px-16">  
            <div className="text-left">  
            <h1 className="text-xl md:text-4xl font-inter font-bold text-black mb-4">bitHeart.</h1>
            <h2 className="md:text-xl font-inter tracking-wide text-black opacity-75">Making You Fit.</h2>
            </div>
        </div>
        </div>
     )
}

export default Hero