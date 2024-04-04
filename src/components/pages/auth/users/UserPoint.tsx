import Av1 from "@/assets/image/mainadvertisement/adv1.png"
// ssg 렌더링 방식 적용 필요


export default function UserPoint() {
    return (
        <>
            <div className="whitespace-nowrap overflow-x-auto flex p-[18px] tracking-[-0.05rem]"> 
                <div className="mr-[8px] p-[16px] h-full w-screen rounded-[10px] border border-[#d3d3d3] content-center">
                    <p style={{ marginTop: '5px', fontSize: '13px', display: 'flex', justifyContent: 'center' }}>쿠폰</p>
                    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '17px', display: 'flex', justifyContent: 'center' }}>0<em className="not-italic text-[12px] mt-[5px] pl-[2px]">장</em></p>
                    <div className="mt-[15px] flex flex-row justify-center align-middle">
                        <div className="bg-black rounded-[3px] m-auto px-[12px] h-[20px] w-[55px] text-white text-[12px] items-center box-border">쿠폰함</div>
                    </div>
                </div>
                <div className="mr-[8px] p-[16px] h-full w-screen rounded-[10px] border border-[#d3d3d3] content-center">
                    <p style={{ marginTop: '5px', fontSize: '13px', display: 'flex', justifyContent: 'center' }}>SSG MONEY</p>
                    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '17px', display: 'flex', justifyContent: 'center' }}>0<em className="not-italic text-[12px] mt-[5px] pl-[2px]">원</em></p>
                    <div className="flex mt-[15px] content-center">
                        <div className="bg-[#ff5452] rounded-[3px] px-[12px] h-[20px] text-white text-[12px]">상품권</div>
                        <div className="bg-black rounded-[3px] px-[12px] ml-[4px] h-[20px] text-white text-[12px]">계좌</div>
                        <div className="bg-[#666666] rounded-[3px] px-[12px] ml-[4px] h-[20px] text-white text-[12px]">포인트</div>
                    </div>
                </div>
                <div className="mr-[8px] p-[16px] h-full w-screen rounded-[10px] border border-[#d3d3d3] content-center">
                    <p style={{ marginTop: '5px', fontSize: '13px', display: 'flex', justifyContent: 'center' }}>신세계포인트</p>
                    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '17px', display: 'flex', justifyContent: 'center' }}>0<em className="not-italic text-[12px] mt-[5px] pl-[2px]">p</em></p>
                    <div className="mt-[15px] flex justify-center">
                        <div className="bg-black rounded-[3px] m-auto px-[5px] h-[20px] w-[24px] text-white text-[9px] text-center content-center">||||||</div>
                    </div>
                </div>
            </div>
        </>
    );
}