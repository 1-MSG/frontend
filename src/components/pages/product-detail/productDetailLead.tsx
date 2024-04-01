'use client'

import OrderFooter from '@/components/pages/product-detail/orderFooter';
import { useCallback, useState } from 'react';

export default function ProductDetailLead(props: any) {

    const giveData = props.giveData;
    const [orderList, setOrderList] = useState([]); 
    const priceList:any = [];
    const [total, setTotal] = useState(0);

    const onRemove = useCallback(
        (id:number) => {
            const newList = [...orderList]
            newList.splice(id, 1);
            setOrderList(newList) 

            const newList2 = [...priceList]
            newList2.splice(id, 1);
        }, [orderList]
    )

    return (
        <div>
            {/* 하단 구매하기 버튼 */}
            <OrderFooter giveData={giveData} onRemove={onRemove} orderList={orderList} priceList={priceList} setTotal={setTotal} total={total}/>
        </div>
    )
}