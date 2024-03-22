import BtnBack from '@/components/pages/product-review/BtnBack'
import CreateReview from '@/components/pages/product-review/createReview'

export default function Page() {

    return (
        <main className='w-full h-auto'>
            <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                <div className='pt-[15px] pl-[10px]'><BtnBack /></div>
                <h2 className='text-[15px] leading-[3rem] font-[600]'>리뷰 쓰기</h2>
                <div className='flex items-center w-[56px] h-[50px]'></div>
            </div>

            <CreateReview/>
        </main>
    )
}
