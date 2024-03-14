'use client'

import React from 'react'
import Image from 'next/image'
import user from '@/assets/image/footer/footerimgW.png'
import footerImgW from '@/assets/image/footer/footerimgW.png'
import userFooterM_top from '@/assets/image/footer/userFooterImgM_top.png'
import userFooterM_bottom from '@/assets/image/footer/userFooterImgM_bottom.png'
import { signOut } from 'next-auth/react';

export default function UserFooter() {

    const handleLogOut = async () => {
        await signOut({ redirect: true, callbackUrl: '/' });
    };

    return (
        <footer className='w-full'>
        <div className="web-only">
            <Image src={footerImgW} alt='' style={{width:'100%', height:'auto'}}></Image>
        </div>
        <div className="mobile-only">
            <Image src={userFooterM_top} alt='' style={{width:'100%', height:'auto'}}></Image>
            <div style={{background:'#DBDBDF', width:'100%', height:'30px', display:'flex', justifyContent:'center', paddingTop:'5px', paddingBottom:'5px'}}>
                <div style={{color:'grey', fontSize:'11px', width:'25%', display:'flex', justifyContent:'center', alignItems:'center', borderRight:'1px solid #a5a5a5'}}>홈</div>
                <div onClick={handleLogOut} style={{color:'grey', fontSize:'11px', width:'25%', display:'flex', justifyContent:'center', alignItems:'center', borderRight:'1px solid #a5a5a5'}}>로그아웃</div>
                <div style={{color:'grey', fontSize:'11px', width:'25%', display:'flex', justifyContent:'center', alignItems:'center', borderRight:'1px solid #a5a5a5'}}>앱다운로드</div>
                <div style={{color:'grey', fontSize:'11px', width:'25%', display:'flex', justifyContent:'center', alignItems:'center'}}>PC버전</div>
            </div>
            <Image src={userFooterM_bottom} alt='' style={{width:'100%', height:'auto'}}></Image>
        </div>
        </footer>
    )
}