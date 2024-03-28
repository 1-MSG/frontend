import { CartDataType } from "@/types/cartDataType"
import CartItem from "./CartItem"
export default function CartListItem({ brand, list}: {brand: number, list: CartDataType[]}) {

    // todo brand name get

    return (
        <>
            <div className="border-b-[3px] border-b-[#f5f5f5]">
            {
                list.map((item:CartDataType) => (
                    <CartItem
                        key={item.id}
                        brandName={"brandName"}
                        list={item}
                    />
                ))
            }
            </div>
        </>

    )
}

