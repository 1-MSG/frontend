
'use client'

import { CategoryDataType } from "@/types/categoryDataType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryItem({categoryId}: {categoryId: number}) {
    console.log("categoryId", categoryId);

    const router = useRouter();
    const [middleCategory, setMiddleCategory] = useState<CategoryDataType[]>();

    const handleClick = (id: number) => {
        router.push(`/category-product?categoryId=${id.toString()}`);
    }

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryId}`)
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setMiddleCategory(data.data.subCategories);
            }
        }
        getData();
    }, [categoryId])
    
    
    return(
        <div className='flex flex-wrap'>
            {middleCategory?.map((item: CategoryDataType) => (
                <div key={item.categoryId} className="w-1/2 h-[38px] text-[#222222] text-[14px] tracking-[-0.07rem] content-center" onClick={()=>handleClick(item.categoryId)}>
                    {item.categoryName}
                </div>
            ))}
        </div>
    )
}

// const queryClient = new QueryClient()

// export default function CategoryItem({categoryId}: {categoryId: number}) {

//     console.log("categoryId", categoryId);
    
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Items categoryId={categoryId}/>
//         </QueryClientProvider>
//     )
// }

// function Items({categoryId}: {categoryId: number}) {
//     const { data, isLoading, error } = useQuery({ 
//       queryKey: [''],
//       queryFn: () =>
//         fetch(`${process.env.API_BASE_URL}/category-child?categoryId=${categoryId}`).then(
//           (res) => res.json(),
//         ),
//     })


//     // if (isPending) return 'Loading...'

//     // if (error) return 'An error has occurred: ' + error.message


//     //const data = categoryMiddle.category_middle_list1;
//     console.log(data);


//     return (
//         <div className='flex flex-wrap'>
//             {/* {data.map((item: CategoryDataType) => (
//                 <Link key={item.id} href="" className="w-1/2 h-[38px] text-[#222222] text-[14px] tracking-[-0.07rem] content-center">
//                     {item.product_category_name}
//                 </Link>
//             ))} */}


//         </div>
//     )
// }