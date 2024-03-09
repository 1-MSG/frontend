import React from 'react'

import Image from 'next/image'
import MainCategory1_1 from '@/assets/image/maincategory/maincategory1_1.png'
import MainCategory1_2 from '@/assets/image/maincategory/maincategory1_2.png'
import MainCategory1_3 from '@/assets/image/maincategory/maincategory1_3.png'
import MainCategory1_4 from '@/assets/image/maincategory/maincategory1_4.png'
import MainCategory1_5 from '@/assets/image/maincategory/maincategory1_5.png'
import MainCategory1_6 from '@/assets/image/maincategory/maincategory1_6.png'
import MainCategory1_7 from '@/assets/image/maincategory/maincategory1_7.png'
import MainCategory1_8 from '@/assets/image/maincategory/maincategory1_8.png'
import MainCategory2_1 from '@/assets/image/maincategory/maincategory2_1.png'
import MainCategory2_2 from '@/assets/image/maincategory/maincategory2_2.png'
import MainCategory2_3 from '@/assets/image/maincategory/maincategory2_3.png'
import MainCategory2_4 from '@/assets/image/maincategory/maincategory2_4.png'
import MainCategory2_5 from '@/assets/image/maincategory/maincategory2_5.png'
import MainCategory2_6 from '@/assets/image/maincategory/maincategory2_6.png'
import MainCategory2_7 from '@/assets/image/maincategory/maincategory2_7.png'
import MainCategory2_8 from '@/assets/image/maincategory/maincategory2_8.png'

function MainCategory() {

  return (
    <nav className='main-flex flex-col justify-center'>
      <ul className="main-flex">
        <div className='main-flex-container1'>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_1} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>쓱배송</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_2} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>새벽배송</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_3} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>쓱1DAY<br/>배송</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_4} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>트레이더스<br/>쓱배송</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_5} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>유니버스<br/>클럽</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_6} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>SSG상품권</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_7} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>이벤트</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory1_8} alt='' style={{width:'65px', height:'65px', borderRadius:'100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>특가/세일</div>
          </div>
        </div>
        <div className='main-flex-container2'>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_1} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>백화점</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_2} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>신선직송</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_3} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', textAlign: 'center', fontSize:'12px', marginTop:'8px'}}>프리미엄<br/>식품관</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_4} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>명품</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_5} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>뷰티</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_6} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>패션</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_7} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>W컨셉</div>
          </div>
          <div style={{margin: '7px', width:'65px'}}>
            <Image src={MainCategory2_8} alt='' style={{width:'65px', height:'95px', borderRadius: '100px'}}/>
            <div style={{ display:'flex', justifyContent:'center', fontSize:'12px', marginTop:'8px'}}>골프</div>
          </div>
        </div>   
      </ul>
    </nav>
  )
}

export default MainCategory
