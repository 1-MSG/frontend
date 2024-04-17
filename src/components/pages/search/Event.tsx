import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

import event1 from '@/assets/image/events/event1.png'
import event2 from '@/assets/image/events/event2.png'
import event3 from '@/assets/image/events/event3.png'
import event4 from '@/assets/image/events/event4.png'
import event5 from '@/assets/image/events/event5.png'
import event6 from '@/assets/image/events/event6.png'


export default async function Event() {

    return (
        <>  
            <div className="mt-[20px]" style={{padding : '12px'}}>
                <h2 style={{fontSize:'13px', fontWeight:'bold'}}>이벤트</h2>
            </div>
            <div style={{display:'flex', width : '100%', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                <div style={{width:'fit-content'}}>
                    <div style={{width : '150px', height : 'auto', display:'inline-block'}}>
                        <Image src={event1} alt='' style={{borderRadius:'7px', width:'130px', marginLeft:'12px', display:'inline-block'}}/>
                        <Image src={event2} alt='' style={{borderRadius:'7px', width:'135px', marginLeft:'12px', display:'inline-block'}}/>
                        <Image src={event3} alt='' style={{borderRadius:'7px', width:'135px', marginLeft:'12px', display:'inline-block'}}/>
                        <Image src={event4} alt='' style={{borderRadius:'7px', width:'135px', marginLeft:'12px', display:'inline-block'}}/>
                        <Image src={event5} alt='' style={{borderRadius:'7px', width:'135px', marginLeft:'12px', display:'inline-block'}}/>
                        <Image src={event6} alt='' style={{borderRadius:'7px', width:'135px', marginLeft:'12px', marginRight:'12px', display:'inline-block'}}/>
                    </div>
                </div>
            </div>
        </>
    );
}
