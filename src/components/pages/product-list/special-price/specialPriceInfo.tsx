import Share from '@/images/svgs/Share'
import Star from '@/images/svgs/Star'
import Image from 'next/image'

export default function SpecialPriceInfo(props:any) {
    const bundle = props.bundle;


    return (
        <div>
            <div>
                <Image src={bundle.bundleImage}
                    alt=''
                    width={390}
                    height={374}
                    className='z-0' />
            </div>

            <div className=' relative mt-[-100px] z-10 bg-gradient-to-t bg-white/65 to-90% from-white from-60%'>
                {/* 상단배너 */}
                <div className='pt-[15px] pl-[16px] pr-[16px] pb-[7px] flex'>
                    <div className='w-[40px] h-[40px]'></div>
                    <Share />
                </div>

                {/* 상품가격 정보노출 */}
                <div className='my-[15px] px-[16px]'>
                    <h2 className='text-[24px] font-extrabold tracking-[-0.05rem]'>
                        <span>&#91;{bundle.brandName}&#93;</span>
                        {bundle.bundleName}
                    </h2>
                    <div className='mt-[8px] text-[24px] font-bold'>
                        <em className='not-italic'>{bundle.bundlePrice.toLocaleString()}</em>
                        <span>원~</span>
                    </div>
                </div>

                {/* 리뷰 */}
                {/* <div className='pt-[13px] pb-[10px] pl-[16px] pr-[18px]'>
                    <div className=''>
                        <div className='float-left pt-[2px]'><Star w={16} h={16} /></div>
                        <em className='float-left not-italic font-bold  pl-[5px] pr-[24px]'>{bundle.bundle_star}</em>
                    </div>
                    <p className='text-[#222222] text-[14px] font-medium underline tracking-[-0.05rem]'>
                        {priceToString(bundle.bundle_review_count)}건 리뷰</p>
                </div> */}
            </div>
        </div>
    )
}