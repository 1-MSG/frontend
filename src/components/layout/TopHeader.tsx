import CircleArrow from '@/images/svgs/CircleArrow'
import SsgLogo from '@/images/svgs/SsgLogo'
import React from 'react'
import SearchForm from '../form/SearchForm'
import AlarmIcon from '@/images/svgs/AlarmIcon'
import CartIcon from '@/images/svgs/CartIcon'

function TopHeader() {
    return (
        <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3">
            <div className='flex items-center w-[113px] h-[14px] mr-[5px]'>
                <SsgLogo />
                <div className='ml-[2px]'><CircleArrow /></div>
                {/* <h1 className="text-[0px]">SSG.com</h1> */}
            </div>
            <SearchForm />
            <div className="flex items-center">
                <div className='w-[32px] h-[32px]'><AlarmIcon /></div>
                <div className='w-[32px] h-[32px] mr-[10px]'><CartIcon w={32} h={32} /></div>
            </div>
        </div>
    )
}

export default TopHeader
