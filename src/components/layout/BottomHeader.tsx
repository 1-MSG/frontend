import React from 'react'
// import { mainNavMenuData } from '@/lib/initData'
// import { NavType } from '@/types/navType'

import Link from 'next/link'

function BottomHeader() {

  return (
    <nav className='flex flex-col justify-center'>
      <ul className="flex">
      <li className="px-4 py-2 whitespace-nowrap font-bold text-800" style={{color: "#0B3B17"}}>패션명품쓱세일</li>
        <li className="px-4 py-2 whitespace-nowrap">홈</li>
        <li className="px-4 py-2 whitespace-nowrap">특가</li>
        <li className="px-4 py-2 whitespace-nowrap">베스트</li>
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
