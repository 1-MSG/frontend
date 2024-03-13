import Image from "next/image";
import Adv1 from '@/assets/image/mainadvertisement/adv1.png'

import event1 from '@/assets/image/events/event1.png'
import event2 from '@/assets/image/events/event2.png'
import event3 from '@/assets/image/events/event3.png'
import event4 from '@/assets/image/events/event4.png'
import event5 from '@/assets/image/events/event5.png'
import event6 from '@/assets/image/events/event6.png'

const recommendKeywords = [
    "우유", "바나나", "제로콜라", "귤", "제로", "토마토", "사이다", "딸기", "탄산수", "계란"
];

const keywordStyle = {
    background: '#f1f1f1',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: '7px',
    marginTop: '5px',
    marginLeft: '12px',
    fontSize: '14px'
};

export default async function RecommendSearch() {
    return (
        <>
            <div style={{ padding: '12px' }}>
                <h2 style={{ fontSize: '13px', fontWeight: 'bold' }}>추천 검색어</h2>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                {recommendKeywords.map((keyword, index) => (
                    <p key={index} style={keywordStyle}>{keyword}</p>
                ))}
                </div>
            </div>
        </>
    );
}