import SpecialPriceHeader from "@/components/pages/product-list/special-price/specialPriceHeader";


export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <>
            <SpecialPriceHeader/>
            {children}
        </>
    );

}