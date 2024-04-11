'use client'
import Post from "@/components/pages/auth/signup/Post";
import SsgSubHeader from "@/components/ui/SsgSubHeader";
import { redirect } from "next/navigation";
import { useSession } from 'next-auth/react'

export default function Page(
    { searchParams } : { searchParams: { [key: string]: string | string[] | undefined } }
) {

    const session = useSession();
    console.log("session", session.data?.user?.data?.userId);
    const userId = session.data?.user?.data?.userId;
    
    const productId = searchParams.productId ? Number(searchParams.productId): 0;
    console.log("productId", productId);
    

    async function createUser(formData: FormData) {
        const userFormData = {
            addressName: formData.get('addressName'),
            recipient: formData.get('recipient'),
            mobileNumber: formData.get('mobileNumber'),
            addressPhoneNumber: formData.get('mobileNumber'),
            address: `${formData.get('address')} ${formData.get('addressDetail')}`
        }

        console.log(userFormData)
        const res = await fetch(`${process.env.API_BASE_URL}/address/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userFormData),
        })
        if (res.ok) {
            console.log("배송지 등록 성공");
            console.log(res.status);
            redirect(`/product-detail?productId=${productId}`);
        }

        console.log(res);
    }

    return (
        <main>
            <SsgSubHeader title='배송지 추가' />

            <form action={createUser}>
                <div className="px-[20px] pb-[40px] text-[14px] tracking-[-0.05rem]">
                    <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                        <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>주소별칭</p>
                        <input type='text' name="addressName" className='basis-5/6 border py-[10px] px-[10px]' />
                    </div>
                    <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                        <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>받는분</p>
                        <input type='text' name="recipient" className='basis-5/6 border py-[10px] px-[10px]' />
                    </div>
                    <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                        <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>휴대폰</p>
                        <input type='text' name="mobileNumber" className='basis-5/6 border py-[10px] px-[10px]' />
                    </div>
                    <Post />
                </div>
                <button type="submit" className='my-[15px] py-[10px] mx-[20px] w-11/12 bg-[#ff5452] text-white font-extrabold items-center content-center'>
                    등록하기
                </button>
            </form>
        </main>
    )
}