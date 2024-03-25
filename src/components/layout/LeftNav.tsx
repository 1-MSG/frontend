'use client'

import React from 'react'
import {useRouter} from 'next/navigation'
import LeftNavIcon from '@/images/svgs/LeftNavIcon'

function LeftNav() {

    let router = useRouter()
    return (
        <div className='w-full'>
            <div onClick={()=>{ router.back() }} style={{background:'rgba(255, 255, 255, 0.9)', position:'fixed', bottom:0 ,borderRadius:'15px', fontSize :'20px', fontWeight:'bold',padding:'10px', width:'40px', height:'40px', display:'flex', justifyContent:'center',alignItems:'center', marginBottom:'75px',marginLeft:'20px'}}>
                <LeftNavIcon/>
            </div>
        </div>
    )
}

export default LeftNav