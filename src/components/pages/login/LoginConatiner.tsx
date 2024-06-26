'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import toggleFalse from '@/assets/image/button/toggleFalse.png';
import toggleTrue from '@/assets/image/button/toggleTrue.png';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { LoginFormType } from '@/types/formType';
import { useRouter } from 'next/navigation';

export default function LoginContainer() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleHandler = () => {
        setIsToggled(!isToggled);
    };

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            // router.push('/');
        }
        console.log(session);
    }, [session, router]);

    // 입력값을 상태관리 하여 로그인 기능 구현 필요
    const [payLoad, setPayLoad] = useState<LoginFormType>({
        loginId: '',
        password: '',
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setPayLoad({
            ...payLoad,
            [e.target.name]: e.target.value,
        });
    };

    // const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("페이로드",payLoad);
    //     signIn('credentials', {
    //         redirect: true,
    //         loginId: payLoad.loginId,
    //         password: payLoad.password,
    //         callbackUrl: '/',
    //     });
    // };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            loginId: payLoad.loginId,
            password: payLoad.password,
        });

        if (!result?.ok) {
            // 로그인 실패 시
            alert(`로그인에 실패하였습니다. 다시 시도해주세요. (error:${result?.error})`);
          } else {
            // 로그인 성공 시
            router.push('/')
          }
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div
                    style={{
                        width: '100%',
                        paddingTop: '35px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    }}
                >
                    {/* <h2 style={{fontWeight:'bold'}}>로그인</h2> */}
                    <div style={{ width: '100%', height: 'fit-content' }}>
                        <input
                            type="text"
                            name="loginId"
                            onChange={onChangeHandler}
                            placeholder="아이디"
                            style={{
                                fontSize: '14px',
                                width: '100%',
                                height: '45px',
                                paddingLeft: '10px',
                                border: '1px solid #d3d3d3',
                                outlineColor: '#ff5452',
                            }}
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={onChangeHandler}
                            placeholder="비밀번호"
                            style={{
                                fontSize: '14px',
                                width: '100%',
                                height: '45px',
                                paddingLeft: '10px',
                                border: '1px solid #d3d3d3',
                                outlineColor: '#ff5452',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: 'fit-content',
                            padding: '8px',
                        }}
                    >
                        <div
                            onClick={toggleHandler}
                            style={{ display: 'flex' }}
                        >
                            {!isToggled && (
                                <>
                                    <Image
                                        src={toggleFalse}
                                        alt=""
                                        style={{
                                            width: '18px',
                                            marginLeft: '1px',
                                        }}
                                    />
                                    <p
                                        style={{
                                            marginLeft: '7px',
                                            fontSize: '12px',
                                        }}
                                    >
                                        아이디 저장
                                    </p>
                                </>
                            )}
                            {isToggled && (
                                <>
                                    <Image
                                        src={toggleTrue}
                                        alt=""
                                        style={{ width: '20px' }}
                                    />
                                    <p
                                        style={{
                                            marginLeft: '6px',
                                            fontSize: '12px',
                                        }}
                                    >
                                        아이디 저장
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        height: 'fit-content',
                        padding: '20px',
                    }}
                >
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            background: '#ff5452',
                            height: '50px',
                            color: 'white',
                        }}
                    >
                        로그인
                    </button>
                </div>
            </form>

            <div
                style={{
                    width: '100%',
                    height: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <p style={{ fontSize: '12px' }}>아이디 찾기</p>
                <p
                    style={{
                        paddingLeft: '8px',
                        borderRight: '1px solid grey',
                    }}
                ></p>
                <p style={{ paddingLeft: '8px', fontSize: '12px' }}>
                    비밀번호 찾기
                </p>
                <p
                    style={{
                        paddingLeft: '8px',
                        borderRight: '1px solid grey',
                    }}
                ></p>
                <Link href={'/join'}>
                    <p style={{ paddingLeft: '8px', fontSize: '12px' }}>
                        회원가입
                    </p>
                </Link>
            </div>
            {/* <p onClick={() => signOut()}>logout</p> */}
        </>
    );
}
