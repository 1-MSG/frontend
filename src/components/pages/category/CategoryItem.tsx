
'use client'

import { CategoryDataType } from "@/types/categoryDataType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryItem({categoryId}: {categoryId: number}) {
    // console.log("categoryId", categoryId);

    const router = useRouter();
    const [middleCategory, setMiddleCategory] = useState<CategoryDataType[]>();

    const handleClick = (id: number, name: string) => {
        
        if(name=="상품 전체보기"){
            // console.log("상품전체보기를 클릭")
            alert("준비중입니다")
            return
        }
        router.push(`/category-product?categoryId=${id.toString()}`);
    }

    const redCate = ["디자이너샵", "남성화장품", "뷰티선물세트", "오가닉", "국민템", "친환경/유기농", "손질/소포장", "몰리스 Only"];
    function checkCategoryName(categoryName:string) {
        const value = redCate.find((e) => e === categoryName)
        return value;
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryId}`)
            if (res.ok) {
                const data = await res.json();
                // console.log(data);
                setMiddleCategory(data.data.subCategories);
            }
        }
        getData();
    }, [categoryId])
    
    // console.log('??',middleCategory);
    return(
        <div className='flex flex-wrap'>
            {middleCategory?.map((item: CategoryDataType) => (
                <div key={item.categoryId} className={"w-1/2 h-[38px] text-[14px] tracking-[-0.07rem] content-center" + (checkCategoryName(item.categoryName) != undefined ? " text-[#ff5452]" : " text-[#222222]") } onClick={()=>handleClick(item.categoryId,item.categoryName)}>
                    {item.categoryName}
                </div>
            ))}
        </div>
    )
}

