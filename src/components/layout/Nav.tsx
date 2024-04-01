import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Category from '@/images/svgs/nav/Category'
import Gift from '@/images/svgs/nav/Gift'
import HomeIcon from '@/images/svgs/HomeIcon'
import My from '@/images/svgs/nav/My'
import Recent from '@/images/svgs/nav/Recent'


function Nav() {

    //style={{ position: 'fixed', bottom: 0, background: 'white', padding: '5px', width: '100%', height: '50px', display: 'flex', justifyContent: 'space-evenly' }}
    return (
        <div className='w-full'>
            <div className='fixed grid grid-cols-5 bottom-0 bg-white h-[50px] w-full items-center tracking-[-0.05rem]'>
                <div className='m-auto'>
                    <Link href={'/category'}>
                        <div className='pl-[7px] pt-[5px]'>
                            <Category />
                        </div>
                        <div className='text-[11px]'>카테고리</div>
                    </Link>
                </div>
                <div className='m-auto'>
                    <div className='pl-[9px] pt-[5px]'>
                        <Gift />
                    </div>
                    <div className='text-[11px]'>선물하기</div>
                </div>
                <div className='m-auto text-center'>
                    <Link href={'/'}>
                        <div className='pt-[5px]'>
                            <HomeIcon />
                        </div>
                        <div className='pt-[5px] text-[11px]'>홈</div>
                    </Link>
                </div>
                <div className='m-auto text-center '>
                    <Link href={'/mypage'}>
                        <div className='pt-[3px]'>
                            <My />
                        </div>
                        <div className='text-[11px]'>MY</div>
                    </Link>
                </div>
                <div className='m-auto text-center'>
                    <div className='pl-[2px] pt-[3px]'>
                        <Recent />
                    </div>
                    <div className='text-[11px]'>최근본</div>
                </div>
            </div>
        </div>
    )
}

export default Nav
