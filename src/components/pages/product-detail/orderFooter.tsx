'use client'

import { useState } from "react";
import OrderModal from "./orderModal";
import Like from '@/images/svgs/Like';

export default function OrderFooter(props:any) {

    const giveData = props.giveData;
    const [orderModal, setOrderModal] = useState(false);

    const clickOrderModal = () => { setOrderModal(!orderModal) }

    return (
        <div>
            <ul className='flex fixed w-full z-10 bottom-0 h-[52px] text-center leading-[52px]'>
                <li className=' basis-1/6 justify-center bg-white '>
                    <div className='w-[28px] h-[28px] m-auto pt- align-middle justify-center pt-[11px]' ><Like /></div>
                </li>
                <li className='basis-5/6 bg-[#ff5452] text-[17px] font-bold text-white' onClick={() => setOrderModal(true)}>
                    구매하기
                </li>
                {
                    orderModal &&
                    <OrderModal clickOrderModal={clickOrderModal} giveData={giveData} />
                }
            </ul>
        </div>
    )
}