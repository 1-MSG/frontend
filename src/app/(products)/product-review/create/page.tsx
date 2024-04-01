import BtnBack from '@/components/pages/product-review/BtnBack'
import CreateReview from '@/components/pages/product-review/createReview'
import reviewData from '@/dummydata/review_create_data.json'
import { ReviewCreateType } from '@/types/reviewCreateType';

async function fetchData(): Promise<ReviewCreateType[]>{
    // fetch data
    const res = reviewData;
    return res.creat_review;
}

export default async function Page() {

    const data:ReviewCreateType[] = await fetchData();

    return (
        <main className='w-full h-auto'>
            <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                <div className='pl-[10px] w-[56px] place-self-center'><BtnBack /></div>
                <h2 className='text-[15px] leading-[3rem] font-[600]'>리뷰 쓰기</h2>
                <div className='flex items-center w-[56px] h-[50px]'></div>
            </div>

            <CreateReview data={data}/>
        </main>
    )
}
