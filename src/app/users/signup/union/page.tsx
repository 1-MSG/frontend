import Post from "@/components/pages/signup/post"
import MarketingAgreement from "@/components/pages/signup/union/marketingAgreement"

export default function Page() {
    return (
        <main>
            <div>
                <h3 className='py-[15px] px-[20px] text-[13px] text=[#666666] font-bold bg-[#f8f8f8]'>회원 정보</h3>
            </div>
            <div>
                <form>
                    <div className='px-[20px] text-[12px] tracking-[-0.05rem]'>

                        <div className='relative py-[15px] border-b border-b-[#f8f8f8]'>
                            <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>아이디</p>
                            <div className='flex'>
                                <input type="id" className='float-left border py-[10px] px-[10px]' placeholder='영어 또는 숫자로 6~20자리' />
                                <button className='font-bold px-[17px] py-[10px] text-[#313131] bg-[#f5f5f5]'>중복확인</button>
                            </div>
                        </div>
                        <div className='py-[15px] border-b border-b-[#f8f8f8]'>
                            <div className=''>
                                <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>비밀번호</p>
                                <input type="password" className='py-[10px] px-[10px] w-4/5 border ' placeholder='영문, 숫자 조합 8~20자리' />
                            </div>
                            <div className='pt-[10px]'>
                                <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000] invisible'>비밀번호</p>
                                <input type="password" className='py-[10px] px-[10px] w-4/5 border right-0' placeholder='비밀번호 재확인' />
                            </div>
                        </div>
                        <div className='py-[15px] border-b border-b-[#f8f8f8]'>
                            <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이름</p>
                            <input className='w-4/5 border py-[10px] px-[10px]' placeholder='' />
                        </div>

                        {/* 주소 받아오기 */}
                        <Post />

                        <div className='py-[15px] border-b border-b-[#f8f8f8]'>
                            <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>휴대폰번호</p>
                            <input type="number" className='w-4/5 border py-[10px] px-[10px]' placeholder='- 제외' />
                        </div>
                        <div className='py-[15px]'>
                            <p className='float-left w-[70px] leading-[41px] text-[#787878] font-semibold before:content-["*"] before:text-[#ff0000]'>이메일</p>
                            <input type='email' className='w-4/5 border py-[10px] px-[10px]' placeholder='이메일주소' />
                        </div>

                    </div>

                    <MarketingAgreement/>
                    <button className='my-[15px] py-[10px] mx-[20px] w-11/12 bg-[#ff5452] text-white font-extrabold items-center content-center'>가입하기</button>
                </form>
            </div>

        </main>
    )

}