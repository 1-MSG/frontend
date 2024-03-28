import { CartDataType } from "@/types/cartDataType";
import Image from "next/image";
import Link from "next/link";

export default function CartItem({list, brandName}: {list: CartDataType, brandName: string}) {
    return(
        <>{brandName}</>
        // <div className="grid grid-cols-4 px-[16px] py-[20px] border-b border-b-[#f5f5f5] last:border-b-none">
        //     <div className="relative">
        //         <Image src={list.product_img_url} alt="" width={87} height={87} />
        //         <input type='checkbox'
        //             onChange={(e) => handleSingleCheck(e.target.checked, list.product_id)}
        //             // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
        //             checked={checkItems.includes(list.product_id) ? true : false}
        //             className="absolute top-0" />
        //     </div>

        //     <div className="col-start-2 col-end-5 ml-[10px] mb-[6px]">
        //         <div className="flex text-[13px] tracking-[-0.05rem]">
        //             <Link href="">
        //                 <strong>{brand.brand_name} </strong>
        //                 <span>{list.product_name}</span>
        //             </Link>
        //             <div className="pl-[5px] h-[28px] w-[28px]">
        //                 <button><DeleteCart /></button>
        //             </div>
        //         </div>
        //         <div className="basis-full text-[12px] tracking-[-0.05rem]">{list.product_option_detail}</div>

        //         {/* 수량 변경 */}
        //         <ProductCount quantity={list.cart_product_quantity} product_price={list.product_price} product_rate={list.product_rate} />


        //         {/* 옵션변경 버튼, 바로구매 버튼 */}
        //         <div className="flex mt-[8px] w-full h-[36px] text-[13px] text-center tracking-[-0.1rem]">
        //             <button className="w-1/2 border border-[#e5e5e5]">옵션변경</button>
        //             <button className="w-1/2 border border-[#e5e5e5] font-bold">바로구매</button>
        //         </div>
        //     </div>
        // </div>
    );
}