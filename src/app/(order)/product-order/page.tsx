import Crooked from '../../../components/pages/order/product-order/crooked';
import OrderDeliveryInfo from '@/components/pages/order/product-order/orderDeliveryInfo';
import OrderPaymentInfo from '@/components/pages/order/product-order/orderPaymentInfo';
import OrderCustomerInfo from '@/components/pages/order/product-order/orderCustomerInfo';
import OrderProductInfo from '@/components/pages/order/product-order/orderProductInfo';
import { getServerSession } from 'next-auth';
import {options} from '@/app/api/auth/[...nextauth]/options';
import { redirect } from "next/navigation";
import { CommonDataResType } from '@/types/commonResType';


export default async function Page(
    { searchParams } : { searchParams: { [key: string]: string | string[] | undefined } }
) {

    const session = await getServerSession(options)
    const userId = session?.user.data.userId
    const accessToken = session?.user.data.accessToken

    const orderList = searchParams.orderList ? JSON.parse(searchParams.orderList as string) : [];
    const priceList = searchParams.priceList ? JSON.parse(searchParams.priceList as string) : [];

    console.log(orderList);
    console.log(priceList);


    let SaleTotal = 0;
    priceList.map((e: any) => { SaleTotal += e.salePrice })

    let originalTotal = 0;
    priceList.map((e: any) => { originalTotal += (e.productPrice * e.count)})

    let discountTotal = 0;
    priceList.map((e: any) => { discountTotal += e.discountPrice * e.count})

    let salePrice = originalTotal - discountTotal;


    let orderProductDetails:any[] = [];
    priceList.map((e:any, index:number) => (
        orderProductDetails.push({
            productId: e.productId,
            productOptionId: orderList[index].optionId,
            orderQuantity: e.count,
            orderDeliveryFee: 0,
            discountRate: e.discountRate,
            salePrice: e.discountPrice,
            originPrice: e.productPrice,
        })
    ))

    console.log("orderProductDetails ", orderProductDetails);
    


    async function createOrder(formData: FormData) {
        'use server'
        const orderFormData = {
            buyerId: userId,
            buyerName: formData.get('userName'),
            buyerPhoneNumber: formData.get('phoneNumber'),
            address: formData.get('email'),
            orderProductDetails: orderProductDetails,
        }

        console.log("orderForm", orderFormData)
        const res = await fetch(`${process.env.API_BASE_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(orderFormData),
        })
        const data = await res.json();
        console.log("data", data.data);
        redirect(`/order-complete?orderId=${data.data}`)
    }


    return (
        <div className='w-full h-auto'>

            <div className="bg-[#f5f5f5] pt-[20px]">
                <form action={createOrder}>
                    <div className="px-[14px] pb-[60px]">

                        <OrderDeliveryInfo userId={userId} />
                        <OrderPaymentInfo SaleTotal={SaleTotal}/>

                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
                            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem] border-b border-[#f5f5f5]">
                                <span>결제예정금액</span>
                                <span>{SaleTotal.toLocaleString()}원</span>
                            </h2>
                            <div className="pt-[16px] text-[14px] tracking-[-0.1rem]">
                                <p className="flex">
                                    <span>주문금액</span>
                                    <span>{originalTotal.toLocaleString()}원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>배송비</span>
                                    <span>+ 원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>할인금액</span>
                                    <span className="text-[#ff5452]">- {discountTotal.toLocaleString()}원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>
                                        <span className="float-left pt-[6px] pr-[3px] pl-[2px]"><Crooked /></span>
                                        <em className="not-italic text-[#888888]">상품할인</em>
                                    </span>
                                    <span className="text-[#888888]">- {salePrice.toLocaleString()}원</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-t-xl">
                            <div>
                                <p className="flex text-[13px] tracking-[-0.07rem]">
                                    <span>주문정보 및 서비스 약관에 동의합니다.</span>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                        <div className="pt-[10px] px-[16px] pb-[10px] text-center bg-[#ff5452] rounded-b-xl">
                            <button className="text-[18px] font-extrabold text-white tracking-[-0.07rem]">
                                결제하기
                            </button>
                        </div>
                        
                        <OrderCustomerInfo/>

                        <OrderProductInfo orderList={orderList} priceList={priceList}/>
                    </div>


                    <div>
                        <button type='submit' className="w-full h-[52px] fixed bottom-0 bg-[#ff5452] text-[17px] text-white ">
                            <span className="font-extrabold">{SaleTotal.toLocaleString()}원</span>
                            <span className="font-semibold"> 결제하기</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )


}

