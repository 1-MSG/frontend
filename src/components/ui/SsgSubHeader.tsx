import BtnBack from '@/components/pages/product-review/BtnBack'

function SsgSubHeader({ title = 'title' }: { title: string }) {
    return (
        <div>
            <div className="h-[50px] justify-between flex leading-[2.7rem] border-b border-[#ededed]">
                <div className='pt-[15px] pl-[10px]'><BtnBack /></div>
                <h2 className='text-[15px] leading-[3rem] font-[600]'>{title}</h2>
                <div className='flex items-center w-[56px] h-[50px]'></div>
            </div>
        </div>
    )
}

export default SsgSubHeader
