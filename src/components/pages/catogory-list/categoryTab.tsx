export default function CategoryTab(props:any) {
    const categoryList = props.categoryList
    
    return(
        <div className="py-[10px] px-[16px] text-[13px] whitespace-nowrap overflow-x-auto flex tracking-[-0.05rem]">
            {categoryList[0].category_list.map((list:any, index:number) => {
                return(
                    <div key={index} className="px-[10px] mr-[6px] h-[36px] border content-center bg-[#f5f5f5]">{list.category_name}</div>
                )
            })}
        </div>
    )
}