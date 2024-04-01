"use client"
import RigthNavIcon from '@/images/svgs/RightNavIcon';
import React from 'react'
import { useEffect, useState } from "react";

function RightNav() {

    const [open, setOpen] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
        if (window.scrollY >= 56) {
            setOpen(true);
        } else {
            // 스크롤이 50px 미만일경우 false를 넣어줌
            setOpen(false);
        }

    };

    return (
        <>
            {open &&
                <div className='w-full'>
                    <div onClick={scrollToTop} style={{ background: 'rgba(255, 255, 255, 0.9)', position: 'fixed', right: 0, bottom: 0, borderRadius: '15px', fontSize: '20px', fontWeight: 'bold', padding: '10px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '75px', marginRight: '20px' }}>
                        <RigthNavIcon />
                    </div>
                </div>
            }
        </>
    )
}

export default RightNav