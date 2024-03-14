import Av1 from "@/assets/image/mainadvertisement/adv1.png"
// ssg 렌더링 방식 적용 필요


export default function UserPoint() {
    return (
        <>
            <div style={{height:'150px', width:'100%', padding : '18px', display:'flex', justifyContent:'space-between'}}>
                <div style={{height : '100%', width:'28%', borderRadius:'10px', border : '1px solid #d3d3d3', alignContent:'center'}}>
                    <p style={{marginTop:'13px', fontSize:'13px', display:'flex', justifyContent:'center'}}>쿠폰</p>
                    <p style={{marginTop:'10px', fontWeight:'bold', fontSize:'14px', display:'flex', justifyContent:'center'}}>0 장</p>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{background:'black', borderRadius:'3px', padding:'3px',width:'55px', color:'white',marginTop:'10px', fontWeight:'bold', fontSize:'11px', display:'flex', justifyContent:'center', alignItems:'center'}}>쿠폰함</div>
                    </div>
                </div>
                <div style={{height : '100%', width:'28%', borderRadius:'10px', border : '1px solid #d3d3d3', alignContent:'center'}}>
                    <p style={{marginTop:'13px', fontSize:'13px', display:'flex', justifyContent:'center'}}>SSG MONEY</p>
                    <p style={{marginTop:'10px', fontWeight:'bold', fontSize:'14px', display:'flex', justifyContent:'center'}}>0 원</p>
                </div>
                <div style={{height : '100%', width:'39%', borderRadius:'10px', border : '1px solid #d3d3d3', alignContent:'center'}}>
                    <p style={{marginTop:'13px', fontSize:'13px', display:'flex', justifyContent:'center'}}>신세계포인트</p>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'30px', }}>
                        <div style={{background:'black', borderRadius:'3px', padding:'3px',width:'110px', color:'white',marginTop:'10px', fontWeight:'bold', fontSize:'11px', display:'flex', justifyContent:'center', alignItems:'center'}}>통합회원 전환하기</div>
                    </div>
                </div>
            </div>
        </>
    );
}