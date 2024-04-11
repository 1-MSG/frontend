import TopHeader from "@/components/layout/TopHeader";
import ProductHeader from "@/components/pages/product-detail/productHeader";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <TopHeader/>
            <ProductHeader/>
            {children}
        </>
    );

}