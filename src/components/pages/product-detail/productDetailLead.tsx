'use client'

import OrderFooter from '@/components/pages/product-detail/orderFooter';
import { useCallback, useState } from 'react';
import OrderModal from "./orderModal";


export default function ProductDetailLead({productId, Info} : {productId: number, Info: any}) {

    //const giveData = props.giveData;
    const [orderList, setOrderList] = useState([]); 
    const priceList:any[] = [];
    const [total, setTotal] = useState(0);
    const [orderModal, setOrderModal] = useState(false);

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
        <>
        <OrderFooter 
            setOrderModal={setOrderModal}
            productId={productId} 
        />
         {
            orderModal &&
            <OrderModal 
                setOrderModal={setOrderModal} 
                Info={Info} 
                onRemove={onRemove} 
                orderList={orderList} 
                priceList={priceList} 
                total={total} 
                setTotal={setTotal} 
                productId={productId}
            />
        }
        </>

    )
}