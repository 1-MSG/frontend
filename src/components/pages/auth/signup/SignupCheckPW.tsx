'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupCheckPW() {

    const router = useRouter();

    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const onChangePasswordHandler = (e: any) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            if(passwordCheckHandler(value, confirm)){
                router.push(`&password=${value}`);
            }
        
        } else {
            setConfirm(value);
            passwordCheckHandler(password, value);
        }
    }

    const passwordCheckHandler = (password: any, confirm: any) => {
        const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
        if (password === '') {
            setPasswordError('비밀번호를 입력해주세요.');
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
            return false;
        } else if (confirm !== password) {
            setPasswordError('');
            setConfirmError('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            setPasswordError('');
            setConfirmError('');
            return true;
        }
    }

    return (
        <div className='py-[15px] border-b border-b-[#f8f8f8]'>
            <div className="flex">
                <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>비밀번호</p>
                <input type="password" onChange={onChangePasswordHandler} name="password" className='py-[10px] px-[10px] border basis-5/6' placeholder='영문, 숫자 조합 8~20자리' />
            </div>
            {passwordError &&
                <div className="flex pt-[5px]">
                    <p className='basis-1/6  text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000] invisible'>비밀번호</p>
                    <small className="basis-5/6">{passwordError}</small>
                </div>
            }
            <div className='pt-[10px] flex'>
                <p className='basis-1/6 leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000] invisible'>비밀번호</p>
                <input type="password" onChange={onChangePasswordHandler} name="confirm" className='py-[10px] px-[10px] border basis-5/6' placeholder='비밀번호 재확인' />
            </div>
            {confirmError &&
                <div className="flex pt-[5px]">
                    <p className='basis-1/6 text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000] invisible'>비밀번호</p>
                    <small className="basis-5/6">{confirmError}</small>
                </div>
            }
        </div>
    )
}