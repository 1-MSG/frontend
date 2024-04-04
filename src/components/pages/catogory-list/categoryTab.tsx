'use client'
import { useSearchParams } from "next/navigation"


export default function CategoryTab(props:any) {
    const categoryList = props.categoryList

    const params = useSearchParams();
    const categoryIdParam = params.get('categoryId');
    
    console.log('categoryIdParam', categoryIdParam);


    
    
    return(
        <div className="py-[10px] px-[16px] text-[13px] whitespace-nowrap overflow-x-auto flex tracking-[-0.05rem]">
            {categoryList.map((list:any, index:number) => {
                return(
                    <div key={index} className={"px-[10px] mr-[6px] h-[36px] content-center" + (list.categoryId == categoryIdParam ? " bg-[#222222] text-white" : " border bg-[#f5f5f5]")}>{list.categoryName}</div>
                )
            })}
        </div>
    )
}