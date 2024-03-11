import React from 'react'
import Image from 'next/image'
import footerImgW from '@/assets/image/footer/footerimgW.png'
import footerImgM from '@/assets/image/footer/footerimgM.png'


function Footer() {
  return (
    <footer className='w-full'>
      <div className="web-only">
        <Image src={footerImgW} alt='' style={{width:'100%', height:'auto'}}></Image>
      </div>
      <div className="mobile-only">
        <Image src={footerImgM} alt='' style={{width:'100%', height:'auto'}}></Image>
      </div>
    </footer>
  )
}

export default Footer
