import OrderCompleteHeader from "@/components/pages/order/order-complete/orderCompleteHeader";

export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <OrderCompleteHeader/>
            {children}
        </>
    );

}