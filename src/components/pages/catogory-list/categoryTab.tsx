'use client'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";


export default function CategoryTab(props:any) {
    const categoryList = props.categoryList

    const router = useRouter();

    const params = useSearchParams();
    const categoryIdParam = params.get('categoryId');
    
    console.log('categoryIdParam', categoryIdParam);

    const handleClick = (id: number, pageParam:number) => {
        router.push(`/category-product?categoryId=${id.toString()}&page=${pageParam}&size=6&sort=`);
    }
    
    
    return(
        <div className="py-[10px] px-[16px] text-[13px] whitespace-nowrap overflow-x-auto flex tracking-[-0.05rem]">
            {categoryList.map((list:any, index:number) => {
                return(
                    <div key={index} 
                        onClick={()=>handleClick(list.categoryId, 0)}
                        className={"px-[10px] mr-[6px] h-[36px] content-center" + (list.categoryId == categoryIdParam ? " bg-[#222222] text-white" : " border bg-[#f5f5f5]")}>
                        {list.categoryName}
                    </div>
                )
            })}
        </div>
    )
}