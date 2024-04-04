export default function CategorySmallTab({subCategories}: {subCategories: any[]}) {
    return(
        <div className="grid grid-cols-3 tracking-[-0.05rem]">
            {subCategories.map((list:any, index:number) => {
                return(
                    <div key={index} className="h-[45px] px-[15px] content-center border border-[#f0f0f0] text-[13px]">{list.categoryName}</div>
                )
            })}
        </div>
    )
}