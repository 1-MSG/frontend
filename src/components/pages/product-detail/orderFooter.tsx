'use client'

import { useState } from "react";
import OrderModal from "./orderModal";
import Like from '@/images/svgs/Like';

export default function OrderFooter({giveData, onRemove, orderList, priceList, setTotal, total, productId} : {giveData: any, onRemove: any, orderList: any, priceList: any, setTotal: any, total: any, productId: number}) {

   // const giveData = props.giveData;
    const [orderModal, setOrderModal] = useState(false);

    //const orderList = props.orderList;
    //const priceList = props.priceList;
    //const setTotal = props.setTotal;
   // const total = props.total;
    //const { onRemove } = props;

    const clickOrderModal = () => { setOrderModal(!orderModal) }

    return (
        <div>
            <ul className='flex fixed w-full z-10 bottom-0 h-[52px] text-center leading-[52px]'>
                <li className=' basis-1/6 justify-center bg-white '>
                    <div className='w-[28px] h-[28px] m-auto pt- align-middle justify-center pt-[11px]' ><Like w={28} h={28}/></div>
                </li>
                <li className='basis-5/6 bg-[#ff5452] text-[17px] font-bold text-white' onClick={() => setOrderModal(true)}>
                    구매하기
                </li>
                {
                    orderModal &&
                    <OrderModal clickOrderModal={clickOrderModal} giveData={giveData} onRemove={onRemove} orderList={orderList} priceList={priceList} total={total} setTotal={setTotal} productId={productId}/>
                }
            </ul>
        </div>
    )
}