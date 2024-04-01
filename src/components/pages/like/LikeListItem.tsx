import LikeEdit from "@/images/svgs/LikeEdit";
import Question from "@/images/svgs/Question";
import { LikeDataType } from "@/types/likeDataType";
import LikeItem from "./LikeItem";

export default function LikeListItem({ data }: { data: LikeDataType[] }) {


    return (
        <div>
            <div className="flex pt-[16px] px-[15px] text-[13px] items-center tracking-[-0.07rem]">
                <p className="flex">
                    <span>상품 안내</span>
                    <span className="pt-[3px] pl-[1px]"><Question /></span>
                </p>
                <div className="flex px-[10px] h-[30px] border border-[#e9e9e9] rounded-md items-center">
                    <span className="mr-[5px]"><LikeEdit /></span>
                    <span>편집</span>
                </div>
            </div>

            <div>
                <ul className="flex flex-wrap mx-[12px]">
                    {data.map((item: LikeDataType) => (
                        <li key={item.id} className="w-1/2 px-[4px] pt-[10px] pb-[20px]">
                            <LikeItem
                                list={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}