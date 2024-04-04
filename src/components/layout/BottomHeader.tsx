'use client'

import React from 'react'
// import { mainNavMenuData } from '@/lib/initData'
// import { NavType } from '@/types/navType'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function BottomHeader() {

    const pathname = usePathname()

    return (
        <nav className='flex flex-col justify-center h-[46px] border-b border-b-[#f5f5f5] leading-[35px] bg-white'>
            <ul className="flex text-[15px] font-medium">
                <li className="px-4 py-2 whitespace-nowrap font-bold text-800" style={{ color: "#0B3B17" }}>패션명품쓱세일</li>
                <li className="px-4 pt-[8px] whitespace-nowrap">
                    <Link href='/'
                          className={'pb-[8px] h-[46px]' + (pathname == '/' ? ' border-b-2 border-black font-extrabold' : '')}>
                        홈
                    </Link>
                </li>
                <li className="pt-[8px] px-4 whitespace-nowrap">
                    <Link href="/product-list/special-price" 
                          className={'pb-[8px] h-[46px]' + (pathname == '/product-list/special-price' ? ' border-b-2 border-black font-extrabold' : '')}>
                        특가
                    </Link>
                </li>
                <li className="px-4 pt-[8px] whitespace-nowrap">
                    <Link href='/product-list/ranking'
                          className={'pb-[8px] h-[46px]' + (pathname == '/product-list/ranking' ? ' border-b-2 border-black font-extrabold' : '')}>
                        베스트
                    </Link>
                </li>
                <li className="px-4 py-2 whitespace-nowrap">명품</li>
                <li className="px-4 py-2 whitespace-nowrap">뷰티</li>
                <li className="px-4 py-2 whitespace-nowrap">패션</li>
                <li className="px-4 py-2 whitespace-nowrap">SSG.TV</li>
                <li className="px-4 py-2 whitespace-nowrap">브랜드</li>
            </ul>
        </nav>
    )
}

export default BottomHeader
