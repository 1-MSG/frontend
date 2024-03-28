import OrderHeader from "@/components/pages/order/product-order/orderHeader";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <OrderHeader />
            {children}
        </>
    );

}