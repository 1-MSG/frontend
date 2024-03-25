export default function CategoryTab(props:any) {
    const categoryList = props.categoryList
    return (
        <div className="sticky top-[46px] z-10 overflow-x-scroll overflow-y-hidden bg-white">
            <div className="whitespace-nowrap overflow-x-auto flex py-[10px] px-[16px] font-medium text-[13px] text-center tracking-[-0.1rem] items-center leading-[34px]">
                <div className='mr-[6px] h-[34px] px-[10px] bg-black text-white'>전체</div>
                {categoryList.map((list:any) => {
                    return (
                        <div key={list.category_id} className='mr-[6px] px-[10px] border border-[#e9e9e9]'>{list.category_name}</div>
                    )
                })}
            </div>
        </div>
    )
}