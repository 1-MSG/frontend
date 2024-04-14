'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupCheckId() {

    const router = useRouter();

    const [id, setId] = useState('');
    const [idError, setIdError] = useState('');
    const [isIdCheck, setIsIdCheck] = useState(false); // 중복 검사를 했는지 안했는지
    const [isIdAvailable, setIsIdAvailable] = useState(false); // 아이디 사용 가능한지 아닌지

    const onChangeIdHandler = (e: any) => {
        const idValue = e.target.value;
        // router.push(`?loginId=${idValue}`);
        setId(idValue);
        idCheckHandler(idValue);
    }

    const idCheckHandler = async (id: any) => {
        const idRegex = /^[a-z\d]{5,10}$/;
        if (id === '') {
            setIdError('아이디를 입력해주세요.');
            setIsIdAvailable(false);
            return false;
        } else if (!idRegex.test(id)) {
            setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
            setIsIdAvailable(false);
            return false;
        }
        try {
            const responseData = await checkId(id);
            if (responseData) {
                setIdError('사용 가능한 아이디입니다.');
                setIsIdCheck(true);
                setIsIdAvailable(true);
                return true;
            } else {
                setIdError('이미 사용중인 아이디입니다.');
                setIsIdAvailable(false);
                return false;
            }
        } catch (error) {
            alert('서버 오류입니다. 관리자에게 문의하세요.');
            console.error(error);
            return false;
        }
    }

    async function checkId(loginId: string) {
        console.log(loginId);

        try {
            const response = await fetch(`${process.env.API_BASE_URL}/auth/check-duplicate-id`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ loginId: loginId }),
            });

            if (response.ok) {
                console.log("사용 가능한 아이디 입니다.");
                return loginId;
            } else {
                console.log("사용이 불가능한 아이디 입니다.");
                return '';
            }
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="py-[15px]">
            <div className=' border-b border-b-[#f8f8f8] flex'>
                <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>아이디</p>
                {/* <div className='basis-5/6'> */}
                    <input type="text" onChange={onChangeIdHandler} value={id} name="loginId" className='basis-5/6 border py-[10px] px-[10px]' placeholder='영어 또는 숫자로 6~20자리' />
                    {/* <button onClick={() => checkId} className='font-bold basis-2/5 px-[17px] py-[10px] text-[#313131] bg-[#f5f5f5]'>중복확인</button> */}
                {/* </div> */}

            </div>
            {idError &&
                <div className="flex pt-[5px]">
                    <p className='basis-1/6  text-[#787878] font-semibold  invisible'>아이디</p>
                    <small className={isIdAvailable ? 'idAvailable basis-5/6' : 'basis-5/6'}>{idError}</small>
                </div>
            }
        </div>
    )
}