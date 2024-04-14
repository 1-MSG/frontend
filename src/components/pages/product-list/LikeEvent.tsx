'use client';

import Like from '@/images/svgs/Like';
import LikeTrue from '@/images/svgs/LikeTrue';
import { CommonDataResType } from '@/types/commonResType';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LikeEvent({
    productId,
    accessToken,
}: {
    productId: number;
    accessToken: string;
}) {
    const [isLike, setIsLike] = useState<boolean>(false);
    const router = useRouter();
    const session = useSession();
    // console.log('session', session.data?.user?.data?.accessToken);
    console.log(accessToken);
    

    useEffect(() => {
        const getLike: any = async () => {
            const res = await fetch(
                `${process.env.API_BASE_URL}/like/${productId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    cache: 'no-cache',
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
        if(accessToken === undefined) {
            alert('로그인이 필요합니다.');
            return;
        }
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
            // router.refresh();
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
        <div
            onClick={() => handleClick()}
            className="w-[20px] mr-[5px] place-self-center"
        >
            {isLike ? <LikeTrue w={18} h={18} /> : <Like w={20} h={20} />}
        </div>
    );
}
