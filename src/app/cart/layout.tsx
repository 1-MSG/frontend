import CartHeader from "@/components/pages/cart/cartHeader";


export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <CartHeader/>
            {children}
        </>
    );

}