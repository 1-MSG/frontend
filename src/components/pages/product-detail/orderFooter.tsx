'use client';

import Like from '@/images/svgs/Like';
import LikeTrue from '@/images/svgs/LikeTrue';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { CommonDataResType } from '@/types/commonResType';

export default function OrderFooter({
    productId,
    setOrderModal,
}: {
    productId: number;
    setOrderModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [isLike, setIsLike] = useState<boolean>(false);
    const session = useSession();
    const accessToken = session.data?.user?.data?.accessToken;
    //console.log("session", session.data?.user?.data?.accessToken);

    useEffect(() => {
        const getLike: any = async () => {
            if (!accessToken) return;
            const res = await fetch(
                `${process.env.API_BASE_URL}/like/${productId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );

            const data: CommonDataResType = await res.json();
            if (data.isSuccess === false) {
                return false;
            }
            // console.log(data);
            setIsLike(data.data.like);
        };
        if (session.status == 'authenticated') getLike();
    }, [productId, accessToken, session.status]);

    async function handleClick() {
        if (isLike === true) {
            const res = await fetch(
                `${process.env.API_BASE_URL}/like/${productId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );
            if (!res.ok) {
                throw new Error('서버 오류');
            }
            alert('좋아요를 삭제했습니다.');
            // console.log('좋아요 삭제 성공');
            setIsLike(false);
        } else {
            const check = await fetch(
                `${process.env.API_BASE_URL}/like/${productId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );
            const data: CommonDataResType = await check.json();
            if (data.isSuccess === false) {
                return false;
            } else {
                if (data.data.like === true) {
                    alert('이미 좋아요를 누르셨습니다.');
                } else {
                    const res = await fetch(
                        `${process.env.API_BASE_URL}/like/${productId}`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${accessToken}`,
                            },
                        },
                    );
                    if (!res.ok) {
                        throw new Error('서버 오류');
                    }
                    alert('좋아요를 눌렀습니다.');
                    setIsLike(true);
                }
            }
        }
    }

    return (
        <div>
            <ul className="flex fixed w-full z-10 bottom-0 h-[52px] text-center leading-[52px]">
                <li className=" basis-1/6 bg-white ">
                    <div
                        onClick={() => handleClick()}
                        className="w-[28px]  m-auto place-self-center pt-[10px]"
                    >
                        {isLike ? (
                            <div className="pt-[3px] pl-[2px]">
                                <LikeTrue w={23} h={23} />
                            </div>
                        ) : (
                            <Like w={28} h={28} />
                        )}
                        {/* <Like w={28} h={28} /> */}
                    </div>
                </li>
                <li
                    className="basis-5/6 bg-[#ff5452] text-[17px] font-bold text-white"
                    onClick={() => setOrderModal(true)}
                >
                    구매하기
                </li>
            </ul>
        </div>
    );
}
