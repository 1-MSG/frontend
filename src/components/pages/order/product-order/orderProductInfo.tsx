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
                        <OrderProductItem price={list} orderList={orderList[index]}/>
                    </>
                ))}
                {/* {data.brand_list.map((brand: any, index: number) => {
                    return (
                        <div key={index} className=''>
                            {brand.product_list.map((list: any, index2: number) => {
                                return (
                                    <div key={index2} className='grid grid-cols-7 py-[20px] border-b border-[#f0f0f0]'>
                                        <div className="col-span-2 align-top">
                                            <Image src={list.product_img_url} alt='' width={85} height={85} className=""/>
                                        </div>
                                        <div className="col-span-5 ml-[10px]">
                                            <p className="text-[14px]">
                                                <span className="font-bold">{brand.brand_name}</span>
                                                <span className=""> {list.product_name}</span>
                                            </p>
                                            <p className="mt-[5px] text-[12px] text-[#888888]">
                                                <span>{list.product_option_detail}</span>
                                            </p>
                                            <div className="mt-[5px] w-full flex justify-between">
                                                <div className="text-[14px]">
                                                    <em className="text-[#888888] not-italic line-through">{priceToString(list.product_price)}원</em>
                                                    <em className="ml-[4px] not-italic font-extrabold">{priceToString(list.cart_product_quantity * (list.product_price * ((100 - list.product_rate) / 100)))}원</em>
                                                </div>
                                                <div className="text-[12px] text-[#888888]">
                                                    수량 <em className='not-italic'>{list.cart_product_quantity}</em>개
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}