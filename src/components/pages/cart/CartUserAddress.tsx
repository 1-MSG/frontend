import Position from "@/images/svgs/Position";

async function getAddress(userId:number, accessToken: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    })
    if (!res.ok) {
        throw new Error('서버 오류');
    }
    return res.json();
}

export default async function CartUserAddress({userId, accessToken}: {userId: number, accessToken: string}) {

    const UserData = await getAddress(userId, accessToken);
    const address = UserData.data[0];
    console.log("address", address);

    return (
        <div className="my-[20px] mx-[16px] tracking-[-0.07rem] ">
            <div>
                <div className="my-[11px]">
                    <div className="">
                        <div className="inline-block pt-[4px] w-[20px] h-[20px] "><Position /></div>
                        <h3 className="inline-block pl-[3px] text-[18px] font-bold">{address.addressName}</h3>
                        <span className="ml-[3px] text-white text-[12px] font-medium bg-[#ff5452] pt-[2px] px-[5px] pb-[2px] leading-[18px] ">기본배송지</span>
                    </div>
                    <p className="text-[13px] text-[#666666]">{address.address}</p>
                </div>
                <div className="text-[13px] text-[#666666]">
                    <div className="flex text-center">
                        <div className="w-1/2 py-[8px] border border-[#ededed]">
                            여러 곳으로 한방에
                        </div>
                        <div className="w-1/2 py-[8px] border border-[#ededed]">
                            배송지 변경
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}