import React from 'react'
import Image from 'next/image'
import nav1 from '@/assets/image/nav/nav1.png'
import nav2 from '@/assets/image/nav/nav2.png'
import nav3 from '@/assets/image/nav/nav3.png'
import nav4 from '@/assets/image/nav/nav4.png'
import nav5 from '@/assets/image/nav/nav5.png'
import Link from 'next/link'


function Nav() {
  return (
    <div className='w-full'>
        <div style={{position:'fixed', bottom:0 ,background:'white', padding:'5px', width:'100%', height:'50px', display:'flex', justifyContent:'space-evenly'}}>
            <Image src={nav1} alt='' style={{width: '37px', height:'40px'}}></Image>      
            <Image src={nav2} alt='' style={{width: '37px', height:'40px'}}></Image>     
            <Image src={nav3} alt='' style={{width: '40px', height:'40px'}}></Image>     
            <Link href={'/login'}>
              <Image src={nav4} alt='' style={{width: '37px', height:'40px'}}></Image>
            </Link>     
            <Image src={nav5} alt='' style={{width: '37px', height:'40px'}}></Image>     
        </div>
    </div>
  )
}

export default Nav
