import Image from "next/image";
import empty from "@/assets/image/cart/emptyCart.png"

export default function EmptyCart() {
    return(
        <Image src={empty} alt="" className=""/>
    )
}