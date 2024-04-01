
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query';
import categoryMiddle from '@/dummydata/categoryMiddle.json'
import { CategoryMiddleDataType } from "@/types/categoryDataType";
import Link from 'next/link';


const queryClient = new QueryClient()

export default function CategoryItem() {

    return (
        <QueryClientProvider client={queryClient}>
            <Items />
        </QueryClientProvider>
    )
}

function Items() {
    // const { isPending, error, data } = useQuery({ 
    //   queryKey: [''],
    //   queryFn: () =>
    //     fetch('').then(
    //       (res) => res.json(),
    //     ),
    // })


    // if (isPending) return 'Loading...'

    // if (error) return 'An error has occurred: ' + error.message


    const data = categoryMiddle.category_middle_list1;
    console.log(data);


    return (
        <div className='flex flex-wrap'>
            {data.map((item: CategoryMiddleDataType) => (
                <Link key={item.id} href="" className="w-1/2 h-[38px] text-[#222222] text-[14px] tracking-[-0.07rem] content-center">
                    {item.product_category_name}
                </Link>
            ))}


        </div>
    )
}