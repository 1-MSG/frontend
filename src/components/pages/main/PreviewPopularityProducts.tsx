import Image from "next/image";
import Adv2 from "@/assets/image/mainadvertisement/adv2.png"
import Adv3 from "@/assets/image/mainadvertisement/adv3.png"
import { CommonDataResType } from '@/types/commonResType';
import { BundleDataType } from '@/types/bundleDataType'
import SpecialPriceContent from "../product-list/special-price/specialPriceContent";


async function getSpecialPriceList() {
    const res = await fetch(`${process.env.API_BASE_URL}/bundles?page=1&size=10`)
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function PreviewPopularityProducts() {

    const specialPriceListData: CommonDataResType = await getSpecialPriceList();
    const specialPriceList = specialPriceListData.data;
    const specialPrice: BundleDataType[] = specialPriceList.bundles;

    return (
        <>
            <div style={{ padding: '12px', marginTop: '20px' }}>
                <h2 style={{ fontSize: '19px', fontWeight: 'bold' }}>가장 인기 있는 특가 상품이에요!</h2>
                <Image src={Adv2} alt='' style={{ width: '100%' }} />
            </div>

            <div style={{ display: 'flex', padding: '12px', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between' }}>
                {specialPrice.map((list: any, index: number) => (
                    <SpecialPriceContent list={list} key={index} />
                ))}
            </div>

            <div style={{ padding: '12px', marginTop: '20px' }}>
                <Image src={Adv3} alt='' style={{ width: '100%' }} />
            </div>
        </>
    );
}
