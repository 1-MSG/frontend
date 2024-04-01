export default function ProductDetailInfo(props: any) {

    const data = props.giveData;

    return(
        <div >
            <div className='pb-[20px] pl-[16px] pr-[16px] border-t-[14px] border-[#f5f5f5]' >
                <div className='pt-[40px] mb-[15px] text-[19px] font-bold tracking-[-0.05rem] border-b border-[#f5f5f5]'>
                    <h3 className='inline-block border-b border-[#000]'>상세정보</h3>
                </div>
                <ul className='pb-[20px] pr-[16px] text-[14px] font-medium text-[#777777] border-b border-[#f5f5f5] '>
                    <li>상품번호 : {data.product_id}</li>
                    <li>모델 : {data.product_item_number}</li>
                </ul>
            </div>
            <div className='pl-[16px] pr-[16px] pb-[20px] border-b-[14px] border-[#f5f5f5]'>
                {data.product_detail_url.map((product_detail:any, index:number) => {
                    return (
                        <div key={index}>
                            <img src={product_detail} alt="" className="h-auto w-full max-w-4xl rounded-lg" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}