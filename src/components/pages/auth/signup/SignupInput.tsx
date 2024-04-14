import Post from "@/components/pages/auth/signup/Post";
import MarketingAgreement from "@/components/pages/auth/signup/marketingAgreement"
import SignupCheckPW from "./SignupCheckPW";
import SignupCheckId from "./SignupCheckId";
import { redirect } from "next/navigation";



export default function SignupInput() {

    let num = "휴대폰\n번호"
    
    async function createUser(formData: FormData) {
        'use server'
        const userFormData = {
            loginId: formData.get('loginId'),
            password: formData.get('password'),
            username: formData.get('username'),
            phoneNumber: formData.get('phoneNumber'),
            email: formData.get('email'),
            address: `${formData.get('address')} ${formData.get('addressDetail')}`,
            // addressDetail: formData.get('addressDetail'),
        }

        console.log(userFormData)
        const res = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userFormData),
        })
        if (res.ok) {
            console.log("회원가입 성공");
            console.log(res.status);
            // 
            redirect('/login')
        }

        console.log(res);
    }



    return (
        <form action={createUser}>
            <div className='px-[20px] text-[12px] tracking-[-0.05rem]'>
                

                <SignupCheckId />
                {/* 비밀번호 */}
                <SignupCheckPW />

                <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                    <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이름</p>
                    <input type="text" name="username" className='basis-5/6 border py-[10px] px-[10px]' />
                </div>

                {/* 주소 받아오기 */}
                <Post />

                <div className='flex py-[15px] border-b border-b-[#f8f8f8]'>
                    <p className='whitespace-pre-line basis-1/6 leading-[-10px] text-[#787878] center font-semibold before:content-["*"] before:text-[#ff0000]'>{num}</p>
                    <input type="number" name="phoneNumber" className='basis-5/6 border py-[10px] px-[10px]' placeholder='- 제외' />
                </div>
                <div className='flex py-[15px]'>
                    <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이메일</p>
                    <input type='text' name="email" className='basis-5/6 border py-[10px] px-[10px]' placeholder='이메일주소' />
                </div>

            </div>

            <MarketingAgreement />
            <button type="submit" className='my-[15px] py-[10px] mx-[20px] w-11/12 bg-[#ff5452] text-white font-extrabold items-center content-center'>
            가입하기
            </button>
        </form>
    )
}