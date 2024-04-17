import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import card1 from '@/assets/image/maincard/card1.png'
import card2 from '@/assets/image/maincard/card2.png'
import card3 from '@/assets/image/maincard/card3.png'
import card4 from '@/assets/image/maincard/card4.png'
import card5 from '@/assets/image/maincard/card5.png'
import card6 from '@/assets/image/maincard/card6.png'
import card7 from '@/assets/image/maincard/card7.png'


export default async function PreviewCards() {

  return (
    <>
        <div style={{padding : '12px', marginTop:'20px'}}>
            <h2 style={{fontSize:'19px', fontWeight:'bold'}}>카드 할인받고 즐겁게 쇼핑해요</h2>
            <p style={{fontSize:'12px', color:'grey'}}>SSGPAY로 결제하셔도 혜택 받을 수 있어요</p>
        </div>    
        <div style={{display:'flex', width : '100%', overflowX: 'auto', whiteSpace: 'nowrap'}}>
            <div style={{width:'fit-content'}}>
                <div style={{width : '150px', height : 'auto', display:'inline-block'}}>
                    <Image src={card1} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card2} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card3} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card4} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card5} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card6} alt='' style={{width:'150px', marginLeft:'12px', display:'inline-block'}}/>
                    <Image src={card7} alt='' style={{width:'150px', marginLeft:'12px', marginRight:'12px', display:'inline-block'}}/>
                </div>
            </div>
        </div>
    </>
  );
}
