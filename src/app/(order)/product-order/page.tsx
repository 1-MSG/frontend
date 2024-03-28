import dummydata from '@/app/(commonAccess)/dummydata/order.json'
import Crooked from '../../../components/pages/order/product-order/crooked';
import OrderDeliveryInfo from '@/components/pages/order/product-order/orderDeliveryInfo';
import OrderPaymentInfo from '@/components/pages/order/product-order/orderPaymentInfo';
import Image from 'next/image';
import OrderCustomerInfo from '@/components/pages/order/product-order/orderCustomerInfo';
import OrderProductInfo from '@/components/pages/order/product-order/orderProductInfo';


export default function Page() {
    const data = dummydata[0];

    let delivery: any = [];
    let brandTotal: any = [];
    let discountTotal: any = [];
    let originalTotal: any = [];
    let value = 0;


    data.brand_list.map((arr1: any, i: number) => {
        let sum = 0;
        let discount = 0;
        let original = 0;

        arr1.product_list.map((arr2: any, j: number) => {
            value++;
            sum += arr2.cart_product_quantity * (arr2.product_price * ((100 - arr2.product_rate) / 100))
            discount += arr2.cart_product_quantity * (arr2.product_price * (arr2.product_rate) / 100)
            original += arr2.cart_product_quantity * arr2.product_price
        })

        if (sum >= arr1.min_delivery_fee) delivery.push(0)
        else delivery.push(arr1.product_delivery_fee)

        brandTotal.push(sum);
        discountTotal.push(discount);
        originalTotal.push(original);
    })

    let finalOriginal = 0;
    originalTotal.map((e: number) => finalOriginal += e)

    let finalDiscount = 0;
    discountTotal.map((e: number) => finalDiscount += e)

    let finalDelivery = 0;
    delivery.map((e: number) => finalDelivery += e)

    let finalPrice = finalOriginal - finalDiscount + finalDelivery


    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    return (
        <div className='w-full h-auto'>

            {/*  */}
            <div className="bg-[#f5f5f5] pt-[20px]">
                <form>
                    <div className="px-[14px] pb-[60px]">

                        <OrderDeliveryInfo data={data} />
                        <OrderPaymentInfo data={data} finalPrice={finalPrice}/>

                        <div className="mt-[20px] pt-[20px] px-[16px] pb-[20px] bg-white rounded-xl">
                            <h2 className="flex pb-[10px] text-[18px] font-extrabold tracking-[-0.1rem] border-b border-[#f5f5f5]">
                                <span>결제예정금액</span>
                                <span>{priceToString(finalPrice)}원</span>
                            </h2>
                            <div className="pt-[16px] text-[14px] tracking-[-0.1rem]">
                                <p className="flex">
                                    <span>주문금액</span>
                                    <span>{priceToString(finalOriginal)}원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>배송비</span>
                                    <span>+ {priceToString(finalDelivery)}원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>할인금액</span>
                                    <span className="text-[#ff5452]">- {priceToString(finalDiscount)}원</span>
                                </p>
                                <p className="flex mt-[5px]">
                                    <span>
                                        <span className="float-left pt-[6px] pr-[3px] pl-[2px]"><Crooked /></span>
                                        <em className="not-italic text-[#888888]">상품할인</em>
                                    </span>
                                    <span className="text-[#888888]">- {priceToString(finalDiscount)}원</span>
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
                        
                        <OrderCustomerInfo data={data}/>

                        <OrderProductInfo data={data}/>
                    </div>


                    <div>
                        <button className="w-full h-[52px] fixed bottom-0 bg-[#ff5452] text-[17px] text-white ">
                            <span className="font-extrabold">{priceToString(finalPrice)}원</span>
                            <span className="font-semibold"> 결제하기</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )


}

