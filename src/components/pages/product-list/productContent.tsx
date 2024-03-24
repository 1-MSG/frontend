import Image from 'next/image'
import Link from 'next/link'
import Like from '@/images/svgs/Like'
import CartIcon from '@/images/svgs/CartIcon'
import GrayStar from '@/images/svgs/GrayStar';

export default function ProductConetent(props:any) {

    const productList = props.productList;

    function priceToString(price: number) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function Rate(price:number, rate:number) {
        let n = (100 - rate) / 100;
        return (
            <div>
                <p className='line-through text-[#969696] text-[12px]'>{priceToString(price)}원</p>
                <div className='inline-block items-center mt-[2px] text-[15px] font-bold'>
                    <p className='mr-[4px] float-left text-[#ff5452]'>{rate}%</p>
                    <p className='float-left'>{priceToString(price * n)}원</p>
                </div>
            </div>
        )
    }

    function NotRate(price:number) {
        return (
            <div className='inline-block items-center'>
                <p className='float-left text-[16px] font-bold'>{priceToString(price)}원</p>
            </div>
        )
    }

    return(
        <div className='grid grid-cols-2 gap-2 mx-[16px]'>

                {productList.map((list:any, index:number) => {
                    return (
                        <div className='pt-[10px] pb-[20px]' key={index}>
                            <Link href='/product-detail/1'>
                                <Image src={list.product_img} 
                                    alt=''
                                    width={175}
                                    height={175}
                                    className=''/>
                            </Link>

                            <div className='flex mt-[3px] py-[2px]'>
                                <div></div>
                                <div className='flex'>
                                    <button className='w-[20px] mr-[5px]'><Like w={20} h={20}/></button>
                                    <button className='mr-[3px]'><CartIcon w={26} h={26}/></button>
                                </div>
                            </div>

                            <Link href='/product-list/1' className='mt-[10px] pr-[20px] leading-[16px]'>
                                <p className='text-[13px]'>
                                    <span className='font-bold'>{list.product_brand} </span> 
                                    {list.product_name}</p>
                                <div className='mt-[4px]'>
                                    {list.product_rate == 0 ? NotRate(list.product_price) : Rate(list.product_price, list.product_rate)}
                                </div>
                                <div className=' text-[#777777] text-[12px] items-center mt-[4px]'>
                                    <div className='float-left pt-[3px]'><GrayStar/></div>
                                    <p className='float-left ml-[4px]'>{list.product_star}</p>
                                    <p className='float-left ml-[4px] text-[#ededed] text-[10px]' >|</p>
                                    <p className='float-left ml-[4px]'>{priceToString(list.product_review_count)}건</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
    )
}