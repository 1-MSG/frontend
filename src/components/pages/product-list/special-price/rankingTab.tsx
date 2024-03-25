export default function RankingTab() {

    const li1 = '전체\n보기'
    const li2 = '쓱-\n특가'
    const li3 = '오늘의\n장보기'

    return (
        <div className="mx-[16px]">
            <div className="py-[10px]">
                <ul className="whitespace-pre-line flex text-center text-[13px] tracking-[-0.1rem] leading-[16px]">
                    <li className="w-1/3 py-[12px] border-2 border-black font-bold">{li1}</li>
                    <li className="w-1/3 py-[12px] ml-[8px] bg-[#f5f5f5]">{li2}</li>
                    <li className="w-1/3 py-[12px] ml-[8px] bg-[#f5f5f5]">{li3}</li>
                </ul>
            </div>
        </div>
    )
}