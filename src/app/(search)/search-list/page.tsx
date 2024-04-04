import SearchForm from "@/components/pages/search/SearchForm";
import CartIcon from "@/images/svgs/CartIcon";
import Image from "next/image";
import BackBtn from '@/components/pages/search/BackBtn';
import RecommendSearch from "@/components/pages/search/RecommendSearch";
import Event from "@/components/pages/search/Event";
import RecentSearch from "../../../components/pages/search/RecentSearch";


export default function Page() {
    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3">
                <BackBtn/>
                <SearchForm/>
                <div className="flex items-center justify-end">
                <CartIcon w={45} h={45}/>
                </div>
            </div>

            {/* 최근 검색어 클라이언트 컴포넌트*/}

            {/* 추천검색어 - 서버 컴포넌트 */}
            <RecentSearch/>
            <RecommendSearch/>
            <Event/>
        </>
    );
}