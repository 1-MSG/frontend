import Image from 'next/image';
import OrderProductItem from './OrderProductItem';


export default  function OrderProductInfo({orderList, priceList} : {orderList: any, priceList: any}) {
    
    return (
        <div className="mt-[20px] mb-[60px] pt-[20px] px-[16px] bg-white rounded-xl">
            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem]">
                택배배송
            </h2>
            <div className="tracking-[-0.07rem]">
                {priceList.map((list: any, index: number) => (
                    <>
                        <div></div>
                        <OrderProductItem key={index} price={list} orderList={orderList[index]}/>
                    </>
                ))}
                
            </div>
        </div>
    )
}