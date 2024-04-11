import { CartDataType } from "@/types/cartDataType"
import CartItem from "./CartItem"
import { CommonDataResType } from "@/types/commonResType";
import { useState } from "react";


export default function CartListItem({ 
    list, orderList, priceList, handleSingleCheck, checkItems, setTotal, maxOrderList
}: { 
    list: CartDataType[], orderList: any, priceList: any, handleSingleCheck: any, checkItems: any, setTotal: any, maxOrderList: any
}) {

    const [productPrice, setProductPrice] = useState<number>(0);
    const [maxDelivery, setMaxDelivery] = useState<number>(0); // 최대 배송비


    // const productData:CommonDataResType = await getProductData(productId);
    // const product = productData.data;

    // const { data, isError } = useProduct(productId)

    // if (isError) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    // const optionData: CommonDataResType = data;
    // const optionList = optionData.data;

    // console.log(optionList);

    //console.log("list ", list);


    return (
        <>
            <div className="border-b-[3px] border-b-[#f5f5f5]">
                {
                    list.map((item: CartDataType) => (
                        <CartItem
                            key={item.id}
                            list={item}
                            orderList={orderList}
                            priceList={priceList}
                            handleSingleCheck={handleSingleCheck}
                            checkItems={checkItems}
                            setTotal={setTotal}
                            maxOrderList={maxOrderList}
                        />
                    ))
                }
            </div>
        </>

    )
}

