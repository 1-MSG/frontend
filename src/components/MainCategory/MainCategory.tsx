import React from 'react'
// import { mainNavMenuData } from '@/lib/initData'
// import { NavType } from '@/types/navType'
import Image from 'next/image'
import Link from 'next/link'
import MainBanner1_1 from '@/images/svgs/MainBanner1_1'
import MainBanner1_2 from '@/images/svgs/MainBanner1_2'
import MainBanner1_3 from '@/images/svgs/MainBanner1_3'
import MainCategory1_1 from '@/assets/image/maincategory/maincategory1_1.png'
import MainCategory1_2 from '@/assets/image/maincategory/maincategory1_2.png'
import MainCategory1_3 from '@/assets/image/maincategory/maincategory1_3.png'
import MainCategory1_4 from '@/assets/image/maincategory/maincategory1_4.png'
import MainCategory1_5 from '@/assets/image/maincategory/maincategory1_5.png'
import MainCategory1_6 from '@/assets/image/maincategory/maincategory1_6.png'
import MainCategory1_7 from '@/assets/image/maincategory/maincategory1_7.png'
import MainCategory1_8 from '@/assets/image/maincategory/maincategory1_8.png'


function MainCategory() {

  return (
    <nav className='main-flex flex-col justify-center'>
      <ul className="main-flex">
        <div className='main-flex-container1'>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_1} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>쓱배송</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_2} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>새벽배송</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_3} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>쓱1DAY<br/>배송</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_4} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>트레이더스<br/>쓱배송</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_5} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>유니버스<br/>클럽</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_6} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>SSG상품권</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_7} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>이벤트</div>
          </div>
          <div style={{ backgroundColor: 'red', margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_8} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>특가/세일</div>
          </div>
        </div>
        <div className='main-flex-container2'>
            <li className="px-4 py-2 whitespace-nowrap">홈</li>
            <li className="px-4 py-2 whitespace-nowrap">특가</li>
            <li className="px-4 py-2 whitespace-nowrap">베스트</li>
            <li className="px-4 py-2 whitespace-nowrap">명품</li>
            <li className="px-4 py-2 whitespace-nowrap">뷰티</li>
            <li className="px-4 py-2 whitespace-nowrap">패션</li>
            <li className="px-4 py-2 whitespace-nowrap">SSG.TV</li>
            <li className="px-4 py-2 whitespace-nowrap">브랜드</li>
        </div>   
      </ul>
    </nav>
  )
}

export default MainCategory
