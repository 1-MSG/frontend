
import SignupInput from "@/components/pages/auth/signup/SignupInput";
import {  redirect } from "next/navigation";

export default function Page() {

    // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     'use server';
    //     e.preventDefault();
    //     const target = e.target as typeof e.target & {
    //         loginId: { value: string };
    //         password: { value: string };
    //         username: { value: string };
    //         phoneNumber: { value: string };
    //         email: { value: string };
    //         address : {value : string};
    //         address2 : {value : string};
    //     };
    //     const loginId = target.loginId.value;
    //     const password = target.password.value;
    //     const username = target.username.value;
    //     const phoneNumber = target.phoneNumber.value;
    //     const email = target.email.value;
    //     const address = target.address.value + target.address2.value;

    //     // try {
    //     //     const response = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
    //     //         method: "POST",
    //     //         headers: {
    //     //             "Content-Type": "application/json",
    //     //         },
    //     //         body: JSON.stringify({ loginId, password, username, phoneNumber, email, address}),
    //     //     });
    //     //     if (response.ok) {
    //     //         alert("회원가입이 완료되었습니다.");
    //     //         location.href = "/login";
    //     //     } else {
    //     //         alert("회원가입에 실패했습니다.");
    //     //     }
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }

    //     console.log(loginId, password, username, phoneNumber, email, address);
        
    // }

    async function handleSubmit(loginId: string, password: string, username: string, phoneNumber: string, email: string, address: string) {
        'use server'
        console.log(loginId, password, username, phoneNumber, email, address);

        // try {
        //     const response = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ loginId:loginId, password:password, username:username, phoneNumber:phoneNumber, email:email, address:address}),
        //     });
            
        //     if (response.ok) {
        //         console.log("회원가입이 완료되었습니다.");
        //         return redirect('/login');
        //     } else {
        //         console.log("회원가입에 실패했습니다.");
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
        
    }



    return (
        <main>
            <div>
                <h3 className='py-[15px] px-[20px] text-[13px] text=[#666666] font-bold bg-[#f8f8f8]'>회원 정보</h3>
            </div>
            <SignupInput handleSubmit={handleSubmit}/>
        </main>
    )

}