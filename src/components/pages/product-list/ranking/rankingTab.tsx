export default function RankingTab() {

    const li1 = '전체\n베스트'
    const li2 = '실시간\n베스트'
    const li3 = '장보기\n상품'
    const li4 = '백화점\n상품'

    return (
        <div className="mx-[16px]">
            <div className="py-[10px]">
                <ul className="whitespace-pre-line flex text-center text-[13px] tracking-[-0.1rem] leading-[16px]">
                    <li className="w-1/4 py-[12px] border-2 border-black font-bold">{li1}</li>
                    <li className="w-1/4 py-[12px] ml-[8px] bg-[#f5f5f5]">{li2}</li>
                    <li className="w-1/4 py-[12px] ml-[8px] bg-[#f5f5f5]">{li3}</li>
                    <li className="w-1/4 py-[12px] ml-[8px] bg-[#f5f5f5]">{li4}</li>
                </ul>
            </div>
        </div>
    )
}