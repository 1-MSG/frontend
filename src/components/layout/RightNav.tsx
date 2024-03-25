"use client"
import RigthNavIcon from '@/images/svgs/RightNavIcon';
import React from 'react'


function RightNav() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
  };

  return (
    <div className='w-full'>
        <div onClick={scrollToTop} style={{background:'rgba(255, 255, 255, 0.9)', position:'fixed', right:0 ,bottom:0 ,borderRadius:'15px', fontSize :'20px', fontWeight:'bold',padding:'10px', width:'40px', height:'40px', display:'flex', justifyContent:'center',alignItems:'center', marginBottom:'75px',marginRight:'20px'}}>
            <RigthNavIcon/>
        </div>
    </div>
  )
}

export default RightNav