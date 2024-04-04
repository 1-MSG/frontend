export default function MarketingAgreement() {
    return (
        <div>
            <div>
                <h3 className='py-[15px] px-[20px] text-[13px] text=[#666666] font-bold bg-[#f8f8f8]'>마케팅 정보 수신 동의</h3>
            </div>
            <div>
                <div className='mx-[20px] pb-[10px] text-[12px] tracking-[-0.05rem]  border-b'>
                    <p className='pt-[20px] font-extrabold'>신세계포인트</p>
                    <div className='border-b pt-[10px] pb-[10px]'>
                        <div>
                            <input type='checkbox' className='float-left ' />
                            <div className='grid grid-cols-5'>
                                <p className='col-start-1 col-span-4 pl-[5px]'><span className='pr-[5px] font-extrabold'>&#40;선택&#41;</span>마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의 </p>
                                <div className='border bg-[#f5f5f5] text-center content-center'>내용보기</div>
                            </div>
                        </div>
                        <div className='pt-[7px]'>
                            <input type='checkbox' className='float-left ' />
                            <div className='grid grid-cols-5'>
                                <p className='col-start-1 col-span-4 pl-[5px]'><span className='pr-[5px] font-extrabold'>&#40;선택&#41;</span>선택 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용 동의</p>
                                <div className=' border  bg-[#f5f5f5] text-center content-center'>내용보기</div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[15px]'>
                        <label><input type='checkbox' /><span className='pl-[3px]'>이메일</span></label>
                        <label className='pl-[20px]'><input type='checkbox' /><span className='pl-[3px]'>문자</span></label>
                        <label className='pl-[20px]'><input type='checkbox' /><span className='pl-[3px]'>우편물</span></label>
                        <label className='pl-[20px]'><input type='checkbox' /><span className='pl-[3px]'>텔레마케팅</span></label>
                    </div>
                    <p className='pt-[5px] text-[11px] font-bold text-[#ff5452]'>마케팅 정보 수신 동의를 하시면 신세계포인트 서비스 및 이벤트 정보를 받으실 수 있습니다.</p>
                </div>
                <div className='mx-[20px] pb-[10px] text-[12px] tracking-[-0.05rem] border-b'>
                    <p className='pt-[20px] font-extrabold'>SSG.COM</p>
                    <div className='border-b pt-[10px] pb-[10px]'>
                        <div>
                            <input type='checkbox' className='float-left ' />
                            <div className='grid grid-cols-5'>
                                <p className='col-start-1 col-span-4 pl-[5px]'><span className='pr-[5px] font-extrabold'>&#40;선택&#41;</span>마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의 </p>
                                <div className='border bg-[#f5f5f5] text-center content-center'>내용보기</div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[15px]'>
                        <label><input type='checkbox' /><span className='pl-[3px]'>이메일</span></label>
                        <label className='pl-[20px]'><input type='checkbox' /><span className='pl-[3px]'>문자</span></label>
                    </div>
                    <p className='pt-[5px] text-[11px] font-bold text-[#ff5452]'>마케팅 정보 수신 동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다.</p>
                </div>
                <div className='py-[20px] mx-[20px]'>
                    <p className='text-[11px] font-bold'>선택 항목에 동의하지 않더라도 SSG.COM 회원가입 및 기본 서비스를 이용하실 수 있습니다.</p>
                </div>
            </div>
        </div>
    )
}