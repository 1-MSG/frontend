import LikeFilter from "@/components/pages/like/LikeFilter";
import LikeListItem from "@/components/pages/like/LikeListItem";
import MyLikeFolder from "@/components/pages/like/MyLikeFolder";
import { LikeDataType } from "@/types/likeDataType";
import listData from "@/dummydata/like.json"

async function fetchData(): Promise<LikeDataType[]>{
    // fetch data
    const res = listData;
    return res.like_list;
}


export default async function Page() {

    const data:LikeDataType[] = await fetchData();

    return(
        <main>
            <MyLikeFolder/>
            <LikeFilter/>
            <LikeListItem data={data}/>
        </main>
    )
}