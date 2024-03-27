'use client'

import { useCallback, useState } from "react"
import SpecialPriceOrderFooter from '@/components/pages/product-list/special-price/specialPriceOrderFooter'


export default function SpecialPriceLead(props: any) {

    const bundle = props.bundle;
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


    return(
        <SpecialPriceOrderFooter bundle={bundle} onRemove={onRemove} orderList={orderList} priceList={priceList} setTotal={setTotal} total={total}/>
    )
}