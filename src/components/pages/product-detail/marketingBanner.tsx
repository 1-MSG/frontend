import { CommonDataResType } from '@/types/commonResType';
import Image from 'next/image';

async function getProductCategory(productId: number) {
    const res = await fetch(`${process.env.API_BASE_URL}/product/${productId}/category`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function MarketingBanner({productId}: {productId: number}) {
    
    const productCategory:CommonDataResType = await getProductCategory(productId);
    //console.log(productCategory.data);
    
    
    return(
        <div>
            <div className='pt-[20px] pb-[20px] px-[16px] text-[13px] border-t-[15px] border-[#f5f5f5]'>
                <div className='flex justify-between'>
                    <div className='w-1/2 h-[44px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>상품고시정보</div>
                    <div className='w-1/2 h-[44px] ml-[5px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>백화점 상품 안내</div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2 h-[44px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>교환/반품/환불 안내</div>
                    <div className='w-1/2 h-[44px] ml-[5px] mt-[5px] leading-[44px] px-[20px] box-border font-bold border rounded-lg'>배송안내</div>
                </div>
            </div>
            <Image src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202306/2023060809574180075551801655_598.jpg&w=750&t=aa8dcb01bf15e184376b817b3eed864b5fb2d071'
                alt='' width={100} height={100}  />
            <Image src='https://sstatic.ssgcdn.com/promo/event/ssg/202402/40163920247419180.jpg' alt='' width={100} height={100} />
            <div className='border-t-[15px] border-b-[70px] border-[#f5f5f5] '>
                <dl className='px-[16px] py-[20px] text-[14px] '>
                    <dt className='float-left text-[#848684]'>
                        카테고리
                    </dt>
                    <dd className='ml-[80px] font-bold'>
                        {productCategory.data.categoryLarge} &gt; {productCategory.data.categoryMid}
                    </dd>
                </dl>
            </div>
        </div>
    )
}