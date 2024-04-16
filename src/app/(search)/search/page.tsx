import SearchForm from "@/components/pages/search/SearchForm";
import CartIcon from "@/images/svgs/CartIcon";
import BackBtn from '@/components/pages/search/BackBtn';
import TopHeader from "@/components/layout/TopHeader";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import SearchDataList from "@/components/pages/search/SearchDataList";
import DepartmentIcon from '@/images/svgs/DepartmentIcon'
import SsgDeliveryIcon from '@/images/svgs/SsgDeliveryIcon'
import SelectCustom from "@/images/svgs/selectCustom";


export default function Page({
    searchParams
} : {
    searchParams: { [key: string]: string | string[] | undefined } 
}) {

    const searchText = searchParams.keyword ? searchParams.keyword as string : '';

    return (
        <>
            <TopHeader/>
            <div>
                <div className='my-[10px] pr-[16px] flex'>
                    <div className='flex pl-[16px]'>
                        <div><SsgDeliveryIcon/></div>
                        <div className='ml-[6px]'><DepartmentIcon/></div>                       
                    </div>
                </div>
            </div>
            <div className="py-[10px] pl-[16px] tracking-[-0.07rem]">
                <ul className='flex whitespace-nowrap overflow-x-hidden text-[12px] text-[#888888] '>
                    <li className="py-[8px] px-[10px] border border-[#888888] rounded-full">선물포장</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>신발사이즈</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>브랜드</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>가격</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>혜택</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>카테고리</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>배송유형</li>
                    <li className='ml-[7px] py-[8px] px-[10px] border border-[#888888] rounded-full'>상품유형</li>
                </ul>
            </div>
            <div className="flex px-[16px] h-[32px]">
                <div></div>
                <div className="flex text-[13px] tracking-[-0.07rem]">
                    <span>추천순</span> 
                    <div className="inline-block pt-[7px] pl-[5px]"><SelectCustom/></div>
                </div>
            </div>
            <SearchDataList searchText={searchText}/>
            <Footer/>
            <Nav/>
        </>
    );
}