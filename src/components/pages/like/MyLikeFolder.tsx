import LikeAll from "@/images/svgs/LikeAll";
import LikeNewFolder from "@/images/svgs/LikeNewFolder";
import LikeNewFolderManage from "@/images/svgs/LikeNewFolderManage";

export default function MyLikeFolder() {
    return (
        <div className="pb-[20px]">
            <ul className="table">
                <li className="table-cell pl-[15px]">
                    <div>
                        <span className="mx-[6px]"><LikeAll /></span>
                        <em className="not-italic pt-[7px] text-[12px] font-bold text-[#222222]">전체보기</em>
                    </div>
                </li>
                <li className="table-cell pl-[15px]">
                    <div>
                        <span className="mx-[6px]"><LikeNewFolder /></span>
                        <em className="not-italic pt-[7px] px-[4px] text-[12px] text-[#959595]">새폴더</em>
                    </div>
                </li>
                <li className="table-cell pl-[15px]">
                    <div>
                        <span className="mx-[6px]"><LikeNewFolderManage /></span>
                        <em className="not-italic pt-[7px] text-[12px] text-[#959595]">폴더관리</em>
                    </div>
                </li>
            </ul>
        </div>
    )
}