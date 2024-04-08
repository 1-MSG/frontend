import CartIcon from "@/images/svgs/CartIcon";
import Like from "@/images/svgs/Like";
import Image from "next/image";
import Link from "next/link";

export default function SpecialPriceContent({specialPriceList}: {specialPriceList: any}) {

    //const specialPriceList = props.specialPriceList;

    // function priceToString(price: number) {
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

    return (
        <div className="px-[16px]">
            {specialPriceList.bundles.map((list: any, index: number) => {
                return (
                    <div key={index} className="pt-[10px] pb-[20px]">
                        <div>
                            <Link href={`/product-list/special-price/bundleId?bundleId=${list.bundleId}`}>
                                <div>
                                    <Image src={list.bundleImage}
                                        alt=""
                                        width={358}
                                        height={215}
                                        className="" />
                                </div>
                            </Link>
                        </div>
                        <div className="relative pt-[12px] pr-[84px] tracking-[-0.04em]">
                            <Link href={`/product-list/special-price/bundleId?bundleId=${list.bundleId}`} className=" text-[16px]">
                                <p className="font-medium">
                                    <span className="font-bold pr-[4px]">{list.brandName}</span>
                                    {list.bundleName}
                                </p>
                                <p className="font-semibold">{Number(list.bundlePrice).toLocaleString()}원~</p>
                            </Link>
                            <div className='flex absolute right-0 top-0 pt-[8px]'>
                                <button className='w-[20px] mr-[5px]'><Like w={20} h={20} /></button>
                                <button className='mr-[3px]'><CartIcon w={26} h={26} /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}