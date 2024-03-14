"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import nullImg from '@/assets/image/etc/nullImg.png';
import etc7 from '@/assets/image/etc/etc7.png';
import closeBtn from '@/assets/image/button/closeBtn.png';

function PopUp() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.4)', height: '100vh', width: '100%' }}>
                    <div className='popup' style={{ position: 'absolute', borderRadius: '20px 20px 0px 0px', bottom: 0, background: 'white', padding: '5px', width: '100%', height: '570px' }}>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                            <Image src={nullImg} alt='' />
                            <h2 style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>신세계 유니버스 클럽 런칭 안내</h2>
                            <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <Image src={closeBtn} alt='' style={{ width: '15px', height: '15px', marginTop: '5px' }} />
                            </button>
                        </div>

                        <div style={{ width: '100%', background: '#d3d3d3', height: '1px' }}></div>

                        <div style={{ padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src={etc7} alt='' style={{ width: '100%' }} />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default PopUp;