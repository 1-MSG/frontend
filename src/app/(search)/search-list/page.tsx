import SearchForm from "@/components/pages/search/SearchForm";
import CartIcon from "@/images/svgs/CartIcon";
import RecommendSearch from "@/components/pages/search/RecommendSearch";
import Event from "@/components/pages/search/Event";
import RecentSearch from "../../../components/pages/search/RecentSearch";
import { CommonDataResType } from "@/types/commonResType";
import SearchList from "@/components/pages/search/SearchList";
import { redirect } from "next/navigation";
import Link from "next/link";
import BackBtn from "@/images/svgs/BackBtn";


export interface getListType {
    productName: string;
}

async function searchFetchData(searchText: string) {
    // if(searchText == undefined) return;
    // console.log(searchText);
    const res = await fetch(`${process.env.API_BASE_URL}/search-list?keyword=${searchText}`);
    if (res.ok) {
        const data = await res.json();
        // console.log(data);
        return data;   
    }
}

export default async function Page({
    searchParams
} : {
    searchParams: { [key: string]: string | string[] | undefined } 
}) {

    async function getSearchData(searchForm: FormData) {
        'use server'
        const searchData = {
            keyword: searchForm.get('keyword'),
        }
        // console.log(searchData);
    }

    const searchText = searchParams.keyword as string;
    const res:CommonDataResType = await searchFetchData(searchText);
    const searchList:getListType[] = res?.data || [];
  
    return (
        <>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3">
                <Link href='/'><BackBtn/></Link>
                <SearchForm getSearchData={getSearchData} searchText={searchText}/>
                <div className="flex items-center justify-end">
                <Link href="/cart"><CartIcon w={45} h={45}/></Link>
                </div>
            </div>
            {
                searchList.length > 0 && (
                   
                    <SearchList searchList={searchList}/>
                )
            }
            
            {/* <SearchRecommandList searchForm={}/> */}

            {/* 최근 검색어 클라이언트 컴포넌트*/}
            {/* {searchText.trim() !== '' && (
                <SearchList />
            )} */}
            {/* 추천검색어 - 서버 컴포넌트 */}
            <RecentSearch/>
            <RecommendSearch/>
            <Event/>
        </>
    );
}