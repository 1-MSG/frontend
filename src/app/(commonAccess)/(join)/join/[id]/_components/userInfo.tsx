'use client'

import Image from "next/image";
import Etc3 from '@/assets/image/etc/etc3.png'
import Link from "next/link";

export default function UserInfo(props : any) {

    //나중에 지울 필요 있음
    console.log(props.name)
    console.log(props.info)

    return (
        <>
            
            <div style={{background:'#F8F8F8', width:'100%', padding:'18px', fontSize:'14px', color:'grey'}}>회원정보</div>
            <div style={{ width:'100%', padding:'18px'}}>
                
                {/* 1 */}
                {props.name === 'integrated' && (
                    <div style={{ fontSize:'13px',width:'100%', display:'flex', borderBottom : '1px solid #d1d1d1'}}>
                        <div style={{width:'25%', paddingTop:'20px', paddingBottom:'20px', color:'grey'}}>
                            *아이디
                        </div>
                        <input style={{ width:'30%', border: '1px solid #d1d1d1', height:'35px', marginTop:'13px', paddingLeft:'7px'}} />
                    </div>
                )}
                {props.name === 'easy' && (
                    <div style={{ fontSize:'13px',width:'100%', display:'flex', borderBottom : '1px solid #d1d1d1'}}>
                        <div style={{width:'25%', paddingTop:'20px', paddingBottom:'20px', color:'grey'}}>
                            *아이디
                        </div>
                        <p style={{ width:'30%', height:'35px', marginTop:'18px', paddingLeft:'7px'}}>{props.info.email}</p>
                    </div>
                )}

                {/* 2 */}
                {props.name === 'integrated' && (
                    <div style={{ fontSize:'13px',width:'100%', display:'flex', borderBottom : '1px solid #d1d1d1'}}>
                        <div style={{width:'25%', paddingTop:'20px', paddingBottom:'20px', color:'grey'}}>
                            *비밀번호
                        </div>
                        <div style={{ width:'75%', height:'90px', paddingBottom:'100px',}}>
                            <input placeholder='영문, 숫자 조합 8~20자리' style={{ width:'100%', border: '1px solid #d1d1d1', height:'35px', marginTop:'10px', paddingLeft:'7px'}} />
                            <input placeholder='비밀번호 재확인' style={{ width:'100%', border: '1px solid #d1d1d1', height:'35px', marginTop:'10px', paddingLeft:'7px'}} />
                        </div>
                    </div>
                )}
                {/* 3 */}
                <div style={{ fontSize:'13px',width:'100%', display:'flex', borderBottom : '1px solid #d1d1d1'}}>
                    <div style={{width:'25%', paddingTop:'20px', paddingBottom:'20px', color:'grey'}}>
                        *이름
                    </div>
                    <input style={{ width:'30%', border: '1px solid #d1d1d1', height:'35px', marginTop:'13px', paddingLeft:'7px'}} />
                </div>
                {/* 여기서 우편번호 받아야함, 추후 작업 예정 */}
                
                {/* 5 */}
                <div style={{ fontSize:'13px',width:'100%', display:'flex', borderBottom : '1px solid #d1d1d1'}}>
                    <div style={{width:'25%', paddingTop:'20px', paddingBottom:'20px', color:'grey'}}>
                        *휴대폰번호
                    </div>
                    <input style={{ width:'75%', border: '1px solid #d1d1d1', height:'35px', marginTop:'13px', paddingLeft:'7px'}} />
                </div>
                {/* 6 */}
                {props.name === 'integrated' && (
                    <div style={{ fontSize:'13px',width:'100%', display:'flex'}}>
                        <div style={{width:'25%', paddingTop:'20px', color:'grey'}}>
                            *이메일주소
                        </div>
                        <input style={{ width:'75%', border: '1px solid #d1d1d1', height:'35px', marginTop:'13px', paddingLeft:'7px'}} />
                    </div>
                )}


            </div>
            <div style={{background:'#F8F8F8', width:'100%', padding:'18px', fontSize:'14px', color:'grey'}}>마케팅 정보 수신 동의</div>
            <div style={{padding : '18px'}}>
                <h2 style={{fontSize:'13px', fontWeight:'bold'}}>SSG.COM</h2>
                <p style={{fontSize:'12px'}}>마케팅 정보 저공을 위한 개인정보 수집 및 이용 동의</p>
                <Image src={Etc3} alt=''></Image>
            </div>
            <div style={{width: '100%', padding:'20px'}}>
                <Link href={'/'}>
                    <button style={{width:'100%', background:'#ff5452', height:'50px', color:'white', fontSize:'15px', fontWeight:'bold'}}>가입하기</button>
                </Link>
            </div>
        </>
    );
}