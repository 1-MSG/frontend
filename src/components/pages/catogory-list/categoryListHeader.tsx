import CategoryCrooked from "@/images/svgs/CategoryCrooked";
import BtnBack from "../product-review/BtnBack";
import categoryList from "@/dummydata/categoryDetail.json"
import SelectCustom from "@/images/svgs/selectCustom";
import Like from "@/images/svgs/Like";
import Share from "@/images/svgs/Share";


export default function CategoryListHeader({categoryLid, categoryId, categoryName} : {categoryLid: any, categoryId: number, categoryName: string}) {
    console.log(categoryLid);
    
    return (
        <div className="h-[50px] px-[16px] sticky bg-white top-0 z-10 overflow-x-scroll overflow-y-hidden justify-between flex text-[14px] leading-[50px]">
            <div className='pt-[18px]'><BtnBack /></div>
            <div className="flex px-[20px] w-full tracking-[-0.05rem]">
                <div className="flex">
                    <div className="">{categoryLid.parentName}</div>
                    <div className="pt-[19px] pl-[6px]"><CategoryCrooked /></div>
                    <div className="pl-[6px] font-extrabold">{categoryName}</div>
                    <div className="pt-[19px] pl-[6px]"><SelectCustom /></div>
                </div>
            </div>
            <div className="flex mr-[] w-[75px]">
                <button className=''><Like w={24} h={24} /></button>
                <button className=''><Share /></button>
            </div>
        </div>
    )
}