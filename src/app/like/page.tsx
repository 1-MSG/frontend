import LikeFilter from '@/components/pages/like/LikeFilter';
import MyLikeFolder from '@/components/pages/like/MyLikeFolder';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import LikeEdit from '@/images/svgs/LikeEdit';
import Question from '@/images/svgs/Question';
import ProductCardTypeItem from '@/components/pages/product-list/ProductCardTypeItem';

async function getLikeList(accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/like`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        cache: 'no-cache',
    });
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function Page() {
    const session = await getServerSession(options);
    const accessToken = session?.user.data.accessToken;

    //console.log("accessToken ", accessToken);

    const LikeDataList = await getLikeList(accessToken);
    const LikeData = LikeDataList.data;
    //console.log("LikeDataList", LikeData);

    return (
        <main>
            <MyLikeFolder />

            <LikeFilter />

            <div className="flex pt-[16px] px-[15px] text-[13px] items-center tracking-[-0.07rem]">
                <p className="flex">
                    <span>상품 안내</span>
                    <span className="pt-[3px] pl-[1px]">
                        <Question />
                    </span>
                </p>
                <div className="flex px-[10px] h-[30px] border border-[#e9e9e9] rounded-md items-center">
                    <span className="mr-[5px]">
                        <LikeEdit />
                    </span>
                    <span>편집</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mx-[16px]">
                {LikeData.map((item: number, index: number) => (
                    <ProductCardTypeItem productId={item} key={index} />
                ))}
            </div>
        </main>
    );
}
